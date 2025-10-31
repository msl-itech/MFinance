import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';

@Component({
  selector: 'app-proteger-tresorerie-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule],
  templateUrl: './proteger-tresorerie-mobile.component.html',
  styleUrls: ['./proteger-tresorerie-mobile.component.scss']
})
export class ProtegerTresorerieMobileComponent implements OnInit {
  activeFaq: number | null = null;

  faqItems = [
    {
      question: "Pourquoi ma trésorerie est-elle affectée ?",
      answer: "Lorsque de nouveaux concurrents proposent des produits ou services similaires à des prix plus bas, vos ventes peuvent diminuer. Si vous baissez vos prix pour rester compétitif, vos marges diminuent également, ce qui impacte directement votre trésorerie."
    },
    {
      question: "Dois-je baisser mes prix ?",
      answer: "Pas forcément. Une baisse des prix peut fragiliser vos marges et rendre votre trésorerie encore plus vulnérable. Il est souvent plus stratégique de mettre en avant ce qui vous distingue : la qualité, l'originalité, ou l'expérience client."
    },
    {
      question: "Comment savoir ce que veulent mes clients ?",
      answer: "Pour comprendre les besoins et attentes de vos clients, vous pouvez créer un sondage en ligne, analyser les retours et avis clients, et interagir directement avec vos clients en magasin ou via vos réseaux sociaux."
    },
    {
      question: "Quels outils pour suivre ma trésorerie ?",
      answer: "Il existe plusieurs outils simples : Google Sheets ou Excel pour un tableau de bord de base, QuickBooks, Wave ou Odoo pour automatiser vos suivis financiers, et Google Analytics pour analyser vos performances en ligne."
    },
    {
      question: "C'est quoi un CRM ?",
      answer: "Un CRM (Customer Relationship Management) est un outil qui centralise toutes les informations sur vos clients. Cela vous permet de suivre leurs interactions, personnaliser vos offres et fidéliser vos clients grâce à un suivi adapté."
    },
    {
      question: "Et si la concurrence attire toujours mes clients ?",
      answer: "Si la concurrence reste forte, il est essentiel de revoir votre positionnement global. Posez-vous ces questions : mes produits répondent-ils toujours aux besoins actuels ? Mon offre est-elle suffisamment différenciée ? Puis-je innover ?"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  playVideo(): void {
    // Logique pour lancer la vidéo
    console.log('Lecture de la vidéo principale');
  }

  watchCaseStudy(): void {
    // Logique pour lancer la vidéo de l'étude de cas
    console.log('Lecture de l\'étude de cas Marianne');
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  startTest(): void {
    // Navigation vers le test de fidélisation ou ouverture du formulaire
    this.scrollToSection('contactSection');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}