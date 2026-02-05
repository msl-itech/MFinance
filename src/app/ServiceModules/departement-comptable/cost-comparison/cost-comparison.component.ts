import { Component } from '@angular/core';

@Component({
    selector: 'app-cost-comparison',
    templateUrl: './cost-comparison.component.html',
    styleUrls: ['./cost-comparison.component.css']
})
export class CostComparisonComponent {
    // Internal costs data
    internalCosts = [
        { icon: 'fas fa-file-invoice', role: 'Comptable interne', grossSalary: 43000, employerCost: 58000 },
        { icon: 'fas fa-user-tie', role: 'Expert-comptable interne', grossSalary: 70000, employerCost: 95000 },
        { icon: 'fas fa-chart-pie', role: 'Contrôleur de gestion', grossSalary: 75000, employerCost: 102000 },
        { icon: 'fas fa-brain', role: 'DAF interne', grossSalary: 90000, employerCost: 122000 }
    ];

    // MFinances costs data
    mfinancesCosts = [
        {
            icon: 'fas fa-file-invoice',
            role: 'Comptable',
            fullTime: { monthly: 3000, annual: 36000 },
            halfTime: { monthly: 1800 },
            thirdTime: { monthly: 1200 }
        },
        {
            icon: 'fas fa-user-tie',
            role: 'Expert-comptable',
            fullTime: { monthly: 3500, annual: 42000 },
            halfTime: { monthly: 2100 },
            thirdTime: { monthly: 1400 }
        },
        {
            icon: 'fas fa-chart-pie',
            role: 'Contrôleur de gestion',
            fullTime: { monthly: 3650, annual: 43800 },
            halfTime: { monthly: 2190 },
            thirdTime: { monthly: 1460 }
        },
        {
            icon: 'fas fa-brain',
            role: 'DAF',
            hourlyRate: 150,
            fullTime: null,
            halfTime: null,
            thirdTime: null
        }
    ];

    scrollToSimulator(): void {
        const element = document.getElementById('simulateur');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
}
