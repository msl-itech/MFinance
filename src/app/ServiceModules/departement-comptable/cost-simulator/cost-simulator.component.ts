import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OdooService } from '../../../services/odoo.service';
import { ToastrService } from 'ngx-toastr';

interface ProfileSelection {
    profile: string;
    label: string;
    icon: string;
    frequency: string;
    months: number;
    internalCost: number;
    mfinancesCost: number;
}

interface SimulationResult {
    profiles: ProfileSelection[];
    totalInternalCost: number;
    totalMfinancesCost: number;
    savings: number;
    savingsPercent: number;
    userInfo: {
        name: string;
        email: string;
        phone: string;
        preferredTime: string;
        preferredDay: string;
    };
    sector: string;
    revenue: string;
    usesOdoo: string;
}

@Component({
    selector: 'app-cost-simulator',
    templateUrl: './cost-simulator.component.html',
    styleUrls: ['./cost-simulator.component.css'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(20px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(-20px)' }))
            ])
        ]),
        trigger('fadeIn', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class CostSimulatorComponent implements OnInit {
    @Output() simulationComplete = new EventEmitter<SimulationResult>();

    currentStep = 1;
    totalSteps = 7;
    isLoading = false;
    showResult = false;
    resultCopied = false;

    // Pricing data (annual costs)
    pricingData = {
        comptable: {
            label: 'Comptable',
            icon: 'fas fa-calculator',
            internalSalary: 43000,
            internalCost: 58000,
            mfinances: {
                fullTime: { monthly: 3000, annual: 36000 },
                halfTime: { monthly: 1800, annual: 21600 },
                thirdTime: { monthly: 1200, annual: 14400 }
            }
        },
        expertComptable: {
            label: 'Expert-comptable',
            icon: 'fas fa-user-tie',
            internalSalary: 70000,
            internalCost: 95000,
            mfinances: {
                fullTime: { monthly: 3500, annual: 42000 },
                halfTime: { monthly: 2100, annual: 25200 },
                thirdTime: { monthly: 1400, annual: 16800 }
            }
        },
        controleurGestion: {
            label: 'Contrôleur de gestion',
            icon: 'fas fa-chart-pie',
            internalSalary: 75000,
            internalCost: 102000,
            mfinances: {
                fullTime: { monthly: 3650, annual: 43800 },
                halfTime: { monthly: 2190, annual: 26280 },
                thirdTime: { monthly: 1460, annual: 17520 }
            }
        },
        daf: {
            label: 'DAF',
            icon: 'fas fa-brain',
            internalSalary: 90000,
            internalCost: 122000,
            mfinances: {
                hourly: 150, // €/heure HTVA
                fullTime: { monthly: 6000, annual: 72000 }, // Estimation si temps plein
                halfTime: { monthly: 3000, annual: 36000 },
                thirdTime: { monthly: 2000, annual: 24000 }
            }
        }
    };

    // Form data
    formData = {
        // Step 1 - Sector
        sector: '',
        sectorOther: '',

        // Step 2 - Revenue
        revenue: '',

        // Step 3 - Odoo
        usesOdoo: '',

        // Step 4 - Profile selection
        selectedProfiles: [] as string[],

        // Step 5 - Frequency per profile
        profileFrequencies: {} as { [key: string]: { frequency: string; months: number } },

        // Step 6 - Contact info
        name: '',
        email: '',
        phone: '',
        preferredTime: '',
        preferredDay: '',
        rgpdConsent: false
    };

    // Simulation result
    simulationResult: SimulationResult | null = null;

    sectors = [
        { value: 'commerce', label: 'Commerce', icon: 'fas fa-store' },
        { value: 'services', label: 'Services', icon: 'fas fa-handshake' },
        { value: 'industrie', label: 'Industrie', icon: 'fas fa-industry' },
        { value: 'autre', label: 'Autre', icon: 'fas fa-ellipsis-h' }
    ];

    revenues = [
        { value: 'moins-1m', label: 'Moins de 1M €', icon: 'fas fa-seedling' },
        { value: '1m-5m', label: '1 à 5M €', icon: 'fas fa-leaf' },
        { value: '5m-10m', label: '5 à 10M €', icon: 'fas fa-tree' },
        { value: 'plus-10m', label: 'Plus de 10M €', icon: 'fas fa-crown' }
    ];

    odooOptions = [
        { value: 'oui', label: 'Oui', icon: 'fas fa-check-circle', color: 'success' },
        { value: 'non', label: 'Non', icon: 'fas fa-times-circle', color: 'danger' },
        { value: 'en-cours', label: 'En cours d\'implémentation', icon: 'fas fa-cog', color: 'warning' }
    ];

    profiles = [
        { value: 'comptable', label: 'Comptable', icon: 'fas fa-calculator' },
        { value: 'expertComptable', label: 'Expert-comptable', icon: 'fas fa-user-tie' },
        { value: 'controleurGestion', label: 'Contrôleur de gestion', icon: 'fas fa-chart-pie' },
        { value: 'daf', label: 'DAF', icon: 'fas fa-brain' }
    ];

    frequencies = [
        { value: 'fullTime', label: 'Temps plein', icon: 'fas fa-clock' },
        { value: 'halfTime', label: 'Mi-temps', icon: 'fas fa-adjust' },
        { value: 'thirdTime', label: 'Tiers-temps', icon: 'fas fa-clock' }
    ];

    preferredTimes = [
        { value: '9h-12h', label: '9h - 12h' },
        { value: '12h-15h', label: '12h - 15h' },
        { value: '15h-18h', label: '15h - 18h' }
    ];

    preferredDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

    constructor(
        private odooService: OdooService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        // Initialize profile frequencies
        this.profiles.forEach(p => {
            this.formData.profileFrequencies[p.value] = { frequency: 'fullTime', months: 12 };
        });
    }

    // Navigation
    nextStep(): void {
        if (this.canProceed() && this.currentStep < this.totalSteps) {
            this.currentStep++;
            if (this.currentStep === 7) {
                this.calculateResult();
            }
        }
    }

    prevStep(): void {
        if (this.currentStep > 1) {
            this.currentStep--;
            if (this.showResult) {
                this.showResult = false;
            }
        }
    }

    canProceed(): boolean {
        switch (this.currentStep) {
            case 1:
                return !!this.formData.sector;
            case 2:
                return !!this.formData.revenue;
            case 3:
                return !!this.formData.usesOdoo;
            case 4:
                return this.formData.selectedProfiles.length > 0;
            case 5:
                return this.formData.selectedProfiles.every(p =>
                    this.formData.profileFrequencies[p]?.frequency
                );
            case 6:
                return !!(
                    this.formData.name &&
                    this.formData.email &&
                    this.formData.phone &&
                    this.formData.rgpdConsent
                );
            default:
                return true;
        }
    }

    // Profile selection
    toggleProfile(profileValue: string): void {
        const index = this.formData.selectedProfiles.indexOf(profileValue);
        if (index > -1) {
            this.formData.selectedProfiles.splice(index, 1);
        } else {
            this.formData.selectedProfiles.push(profileValue);
        }
    }

    isProfileSelected(profileValue: string): boolean {
        return this.formData.selectedProfiles.includes(profileValue);
    }

    // Calculation
    calculateResult(): void {
        this.isLoading = true;

        setTimeout(() => {
            const profiles: ProfileSelection[] = [];
            let totalInternalCost = 0;
            let totalMfinancesCost = 0;

            this.formData.selectedProfiles.forEach(profileKey => {
                const freqData = this.formData.profileFrequencies[profileKey];
                const pricing = (this.pricingData as any)[profileKey];

                if (pricing && freqData) {
                    const months = freqData.months || 12;
                    const frequency = freqData.frequency as keyof typeof pricing.mfinances;

                    // Internal cost (prorated to months)
                    const internalAnnual = pricing.internalCost;
                    const internalProrated = (internalAnnual / 12) * months;

                    // MFinances cost
                    const mfinancesData = pricing.mfinances[frequency];
                    const mfinancesCost = mfinancesData ? mfinancesData.monthly * months : 0;

                    profiles.push({
                        profile: profileKey,
                        label: pricing.label,
                        icon: pricing.icon,
                        frequency: this.frequencies.find(f => f.value === frequency)?.label || '',
                        months: months,
                        internalCost: Math.round(internalProrated),
                        mfinancesCost: Math.round(mfinancesCost)
                    });

                    totalInternalCost += internalProrated;
                    totalMfinancesCost += mfinancesCost;
                }
            });

            const savings = totalInternalCost - totalMfinancesCost;
            const savingsPercent = totalInternalCost > 0 ? (savings / totalInternalCost) * 100 : 0;

            this.simulationResult = {
                profiles,
                totalInternalCost: Math.round(totalInternalCost),
                totalMfinancesCost: Math.round(totalMfinancesCost),
                savings: Math.round(savings),
                savingsPercent: Math.round(savingsPercent),
                userInfo: {
                    name: this.formData.name,
                    email: this.formData.email,
                    phone: this.formData.phone,
                    preferredTime: this.formData.preferredTime,
                    preferredDay: this.formData.preferredDay
                },
                sector: this.formData.sector,
                revenue: this.formData.revenue,
                usesOdoo: this.formData.usesOdoo
            };

            this.showResult = true;
            this.isLoading = false;
            this.simulationComplete.emit(this.simulationResult);

            // Store result in localStorage for sharing
            this.storeResultForSharing();

            // Envoyer les données vers Odoo
            this.sendToOdoo();
        }, 1500);
    }

    sendToOdoo(): void {
        if (!this.simulationResult) return;

        // Construction de la description HTML complète
        const descriptionParts = [
            `<h3>📊 Résultats de la simulation - Département Comptable</h3>`,
            `<div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">`,
            `<h4 style="color: #28a745; margin-top: 0;">💰 Économie potentielle</h4>`,
            `<p style="font-size: 18px; margin: 10px 0;"><strong>${this.formatCurrency(this.simulationResult.savings)}</strong> (${this.simulationResult.savingsPercent}% d'économie)</p>`,
            `<p style="margin: 5px 0;">Coût interne estimé: <strong>${this.formatCurrency(this.simulationResult.totalInternalCost)}</strong></p>`,
            `<p style="margin: 5px 0;">Coût MFINANCES: <strong>${this.formatCurrency(this.simulationResult.totalMfinancesCost)}</strong></p>`,
            `</div>`,

            `<h4>🏢 Contexte entreprise</h4>`,
            `<ul>`,
            `<li><strong>Secteur:</strong> ${this.getSectorLabel(this.simulationResult.sector)}</li>`,
            `<li><strong>Chiffre d'affaires:</strong> ${this.getRevenueLabel(this.simulationResult.revenue)}</li>`,
            `<li><strong>Utilise Odoo:</strong> ${this.getOdooLabel(this.simulationResult.usesOdoo)}</li>`,
            `</ul>`,

            `<h4>👥 Profils sélectionnés et fréquences</h4>`,
            `<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">`,
            `<thead>`,
            `<tr style="background: #e9ecef;">`,
            `<th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Profil</th>`,
            `<th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Fréquence</th>`,
            `<th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Durée</th>`,
            `<th style="padding: 8px; text-align: right; border: 1px solid #ddd;">Coût interne</th>`,
            `<th style="padding: 8px; text-align: right; border: 1px solid #ddd;">Coût MFINANCES</th>`,
            `<th style="padding: 8px; text-align: right; border: 1px solid #ddd;">Économie</th>`,
            `</tr>`,
            `</thead>`,
            `<tbody>`,
            ...this.simulationResult.profiles.map(p =>
                `<tr>` +
                `<td style="padding: 8px; border: 1px solid #ddd;">${p.label}</td>` +
                `<td style="padding: 8px; border: 1px solid #ddd;">${p.frequency}</td>` +
                `<td style="padding: 8px; border: 1px solid #ddd;">${p.months} mois</td>` +
                `<td style="padding: 8px; text-align: right; border: 1px solid #ddd; color: #dc3545;">${this.formatCurrency(p.internalCost)}</td>` +
                `<td style="padding: 8px; text-align: right; border: 1px solid #ddd; color: #28a745;">${this.formatCurrency(p.mfinancesCost)}</td>` +
                `<td style="padding: 8px; text-align: right; border: 1px solid #ddd; font-weight: bold;">${this.formatCurrency(p.internalCost - p.mfinancesCost)}</td>` +
                `</tr>`
            ),
            `</tbody>`,
            `</table>`,

            `<h4>📞 Préférences de contact</h4>`,
            `<ul>`,
            this.simulationResult.userInfo.preferredTime ? `<li><strong>Créneau préféré:</strong> ${this.simulationResult.userInfo.preferredTime}</li>` : '',
            this.simulationResult.userInfo.preferredDay ? `<li><strong>Jour préféré:</strong> ${this.simulationResult.userInfo.preferredDay}</li>` : '',
            `</ul>`,

            `<hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">`,
            `<p style="color: #6c757d; font-size: 12px; margin-top: 15px;">`,
            `<em>🔗 Lien du résultat: ${this.getShareUrl()}</em>`,
            `</p>`
        ];

        const fullDescription = descriptionParts.filter(p => p).join('\n');

        const leadData = {
            name: this.formData.name,
            phone: this.formData.phone,
            email_from: this.formData.email,
            description: fullDescription
        };

        this.odooService.createLead(leadData).subscribe({
            next: (response) => {
                console.log('Lead créé avec succès dans Odoo:', response);
                this.toastr.success(
                    'Vos résultats ont été enregistrés. Un conseiller vous contactera sous 72h.',
                    'Simulation enregistrée !'
                );
            },
            error: (error) => {
                console.error('Erreur lors de l\'envoi vers Odoo:', error);
                // On n'affiche pas d'erreur à l'utilisateur pour ne pas gâcher l'expérience
                // Les résultats sont déjà affichés
            }
        });
    }

    // Méthodes helper pour les labels
    getSectorLabel(sector: string): string {
        const sectorObj = this.sectors.find(s => s.value === sector);
        return sectorObj ? sectorObj.label : (this.formData.sectorOther || sector);
    }

    getRevenueLabel(revenue: string): string {
        const revenueObj = this.revenues.find(r => r.value === revenue);
        return revenueObj ? revenueObj.label : revenue;
    }

    getOdooLabel(usesOdoo: string): string {
        const odooObj = this.odooOptions.find(o => o.value === usesOdoo);
        return odooObj ? odooObj.label : usesOdoo;
    }

    storeResultForSharing(): void {
        // Les résultats sont maintenant encodés directement dans l'URL
        // Pas besoin de localStorage pour le partage
    }

    generateResultId(): string {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Encode les résultats pour l'URL
    encodeResultForUrl(): string {
        if (!this.simulationResult) return '';

        // Créer un objet compact avec uniquement les données nécessaires
        const shareData = {
            p: this.simulationResult.profiles.map(p => ({
                k: p.profile,
                l: p.label,
                i: p.icon,
                f: p.frequency,
                m: p.months,
                ic: p.internalCost,
                mc: p.mfinancesCost
            })),
            ti: this.simulationResult.totalInternalCost,
            tm: this.simulationResult.totalMfinancesCost,
            s: this.simulationResult.savings,
            sp: this.simulationResult.savingsPercent,
            se: this.simulationResult.sector,
            r: this.simulationResult.revenue,
            o: this.simulationResult.usesOdoo
        };

        // Encoder en base64 URL-safe
        const jsonString = JSON.stringify(shareData);
        const base64 = btoa(unescape(encodeURIComponent(jsonString)));
        return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    // Génère l'URL de partage complète
    getShareUrl(): string {
        const encoded = this.encodeResultForUrl();
        return `https://www.mfinances.be/services/diagnostic/resultat?data=${encoded}`;
    }

    // Sharing functionality
    getShareMessage(): string {
        const shareUrl = this.getShareUrl();
        return `Hello 👋

Je viens de faire un mini-diagnostic sur le site de MFINANCES pour comparer le coût réel d'un poste comptable interne avec une externalisation.

Le résultat est assez parlant. J'aimerais bien avoir ton avis.

Voici le lien vers le résultat :
👉 ${shareUrl}

Et si tu veux faire le test pour ta structure :
👉 https://www.mfinances.be/services/departement-comptable#simulateur`;
    }

    copyShareMessage(): void {
        navigator.clipboard.writeText(this.getShareMessage()).then(() => {
            this.resultCopied = true;
            setTimeout(() => this.resultCopied = false, 3000);
        });
    }

    shareOnWhatsApp(): void {
        const text = encodeURIComponent(this.getShareMessage());
        window.open(`https://wa.me/?text=${text}`, '_blank');
    }

    shareOnLinkedIn(): void {
        const shareUrl = this.getShareUrl();
        const url = encodeURIComponent(shareUrl + '&utm_source=linkedin&utm_medium=share&utm_campaign=simulator');
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }

    // Reset
    resetSimulator(): void {
        this.currentStep = 1;
        this.showResult = false;
        this.simulationResult = null;
        this.formData = {
            sector: '',
            sectorOther: '',
            revenue: '',
            usesOdoo: '',
            selectedProfiles: [],
            profileFrequencies: {},
            name: '',
            email: '',
            phone: '',
            preferredTime: '',
            preferredDay: '',
            rgpdConsent: false
        };
        this.profiles.forEach(p => {
            this.formData.profileFrequencies[p.value] = { frequency: 'fullTime', months: 12 };
        });
    }

    // Helper methods for templates
    getProfileIcon(profileKey: string): string {
        const profile = this.profiles.find(p => p.value === profileKey);
        return profile ? profile.icon : 'fas fa-user';
    }

    getProfileLabel(profileKey: string): string {
        const profile = this.profiles.find(p => p.value === profileKey);
        return profile ? profile.label : profileKey;
    }

    // Formatting
    formatCurrency(value: number): string {
        return new Intl.NumberFormat('fr-BE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    // Progress bar
    get progressPercent(): number {
        return ((this.currentStep - 1) / (this.totalSteps - 1)) * 100;
    }
}
