import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-transformez-tresorerie',
  templateUrl: './transformez-tresorerie.component.html',
  styleUrls: ['./transformez-tresorerie.component.css'],
})
export class TransformezTresorerieComponent implements OnInit {
  tresorerieModules = [
    {
      title: 'Trésorerie vs Bénéfices',
      description:
        "Comprendre la différence cruciale entre avoir des bénéfices et disposer d'une trésorerie saine",
      icon: 'fa-balance-scale',
      route: '/tresorerie/tresorerie-benefice',
      color: '#25335b',
      highlight: 'Fondamental',
    },
    {
      title: 'Investir sans risquer',
      description:
        'Comment réaliser des investissements stratégiques sans mettre en danger votre trésorerie',
      icon: 'fa-chart-line',
      route: '/tresorerie/investir-tresorerie',
      color: '#f34947',
    },
    {
      title: 'Optimisez vos Stocks',
      description:
        'Stratégies pour gérer efficacement vos stocks et libérer votre trésorerie',
      icon: 'fa-boxes',
      route: '/tresorerie/optimiser-stock',
      color: '#25335b',
    },
    {
      title: 'Alerte trésorerie',
      description:
        "Identifiez les signaux d'alerte et protégez votre entreprise face à la concurrence",
      icon: 'fa-exclamation-triangle',
      route: '/tresorerie/alerte-tresorerie',
      color: '#f34947',
    },
    {
      title: 'Protégez Votre Trésorerie',
      description:
        'Méthodes éprouvées pour sécuriser vos liquidités contre les risques internes et externes',
      icon: 'fa-shield-alt',
      route: '/tresorerie/proteger-sa-tresorerie',
      color: '#25335b',
      highlight: 'Essentiel',
    },
    {
      title: 'Anticipez vos Finances',
      description:
        'Techniques de prévision financière pour maintenir une trésorerie saine en toutes circonstances',
      icon: 'fa-chess',
      route: '/tresorerie/anticiper-sa-tresorerie',
      color: '#f34947',
    },
    {
      title: "Service d'accompagnement",
      description:
        'Un accompagnement personnalisé pour transformer votre gestion financière',
      icon: 'fa-hands-helping',
      route: '/tresorerie/accompagnement',
      color: '#25335b',
    },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    // À remplacer par la méthode appropriée dans votre service MetaService
    this.metaService.setTresoreriePageMeta();
  }

  // Méthode pour faire défiler jusqu'à une section spécifique
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
