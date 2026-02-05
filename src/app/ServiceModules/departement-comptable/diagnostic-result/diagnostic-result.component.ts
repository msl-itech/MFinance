import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProfileResult {
    profile: string;
    label: string;
    icon: string;
    frequency: string;
    months: number;
    internalCost: number;
    mfinancesCost: number;
}

interface SimulationResult {
    profiles: ProfileResult[];
    totalInternalCost: number;
    totalMfinancesCost: number;
    savings: number;
    savingsPercent: number;
    sector: string;
    revenue: string;
    usesOdoo: string;
}

@Component({
    selector: 'app-diagnostic-result',
    templateUrl: './diagnostic-result.component.html',
    styleUrls: ['./diagnostic-result.component.css']
})
export class DiagnosticResultComponent implements OnInit {
    result: SimulationResult | null = null;
    hasResult = false;
    isSharedView = true;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // Récupérer les données encodées depuis l'URL
        this.route.queryParams.subscribe(params => {
            const encodedData = params['data'];
            if (encodedData) {
                this.decodeResultFromUrl(encodedData);
            } else {
                this.hasResult = false;
            }
        });
    }

    decodeResultFromUrl(encodedData: string): void {
        try {
            // Décoder le base64 URL-safe
            let base64 = encodedData.replace(/-/g, '+').replace(/_/g, '/');
            // Ajouter le padding si nécessaire
            while (base64.length % 4) {
                base64 += '=';
            }

            const jsonString = decodeURIComponent(escape(atob(base64)));
            const shareData = JSON.parse(jsonString);

            // Reconstruire l'objet SimulationResult
            this.result = {
                profiles: shareData.p.map((p: any) => ({
                    profile: p.k,
                    label: p.l,
                    icon: p.i,
                    frequency: p.f,
                    months: p.m,
                    internalCost: p.ic,
                    mfinancesCost: p.mc
                })),
                totalInternalCost: shareData.ti,
                totalMfinancesCost: shareData.tm,
                savings: shareData.s,
                savingsPercent: shareData.sp,
                sector: shareData.se,
                revenue: shareData.r,
                usesOdoo: shareData.o
            };

            this.hasResult = true;
        } catch (e) {
            console.error('Erreur lors du décodage des données:', e);
            this.hasResult = false;
        }
    }

    formatCurrency(value: number): string {
        return new Intl.NumberFormat('fr-BE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    getSectorLabel(sector: string): string {
        const labels: { [key: string]: string } = {
            'commerce': 'Commerce',
            'services': 'Services',
            'industrie': 'Industrie',
            'autre': 'Autre secteur'
        };
        return labels[sector] || sector;
    }

    getRevenueLabel(revenue: string): string {
        const labels: { [key: string]: string } = {
            'moins-1m': 'Moins de 1M €',
            '1m-5m': '1 à 5M €',
            '5m-10m': '5 à 10M €',
            'plus-10m': 'Plus de 10M €'
        };
        return labels[revenue] || revenue;
    }

    getOdooLabel(usesOdoo: string): string {
        const labels: { [key: string]: string } = {
            'oui': 'Oui',
            'non': 'Non',
            'en-cours': 'En cours d\'implémentation'
        };
        return labels[usesOdoo] || usesOdoo;
    }

    scrollToSimulator(): void {
        window.location.href = '/services/departement-comptable#simulateur';
    }

    bookCall(): void {
        window.open('https://odoo.mfinances.be/book/4781b4d3', '_blank');
    }
}
