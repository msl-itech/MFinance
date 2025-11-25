import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ShardeModuleModule } from '../../sharde-module/sharde-module.module';
import { ZoneContactMobileComponent } from "../../zone-contact-mobile/zone-contact-mobile.component";

@Component({
  selector: 'app-salarie-independant-mobile',
  standalone: true,
  imports: [CommonModule, ShardeModuleModule, ZoneContactMobileComponent],
  templateUrl: './salarie-independant-mobile.component.html',
  styleUrls: ['./salarie-independant-mobile.component.scss']
})
export class SalarieIndependantMobileComponent implements OnInit {
  activeFaq: number | null = null;

  // Variables pour la vidéo
  showVideo = false;
  videoUrl: SafeResourceUrl;

  faqItems = [
    {
      question: "Quel statut choisir selon mon secteur d'activité ?",
      answer: "Cela dépend de votre secteur, vos revenus et vos priorités (sécurité vs liberté). Nos experts vous conseillent gratuitement."
    },
    {
      question: "Comment optimiser mes impôts en tant qu'indépendant ?",
      answer: "Les indépendants peuvent déduire de nombreux frais réels : bureau à domicile, véhicule professionnel, matériel, formations..."
    },
    {
      question: "La transition salarié → indépendant est-elle risquée ?",
      answer: "Avec un bon accompagnement comptable et une préparation financière, la transition peut se faire sereinement."
    },
    {
      question: "Puis-je cumuler salariat et statut indépendant ?",
      answer: "Oui, c'est possible sous certaines conditions. Nous vous aidons à respecter la réglementation."
    }
  ];

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    // URL sécurisée pour la vidéo
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/xZ1K4crKW-Q'
    );
  }

  ngOnInit(): void {
  }

  playVideo(): void {
      this.showVideo = !this.showVideo;
        if (this.showVideo) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
  }

  toggleFaq(index: number): void {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

  contactExpert(): void {
    // Navigation vers la page de contact ou ouverture d'un modal
    this.router.navigate(['/contact']);
  }

  goToFullFaq(): void {
    // Navigation vers la page FAQ complète
    console.log('Redirection vers la FAQ complète');
  }

  requestCallback(): void {
    // Logique pour demander un rappel
    console.log('Demande de rappel');
  }

  sendRequest(): void {
    // Logique pour envoyer une demande
      this.router.navigate(['/contact']);
  }
}