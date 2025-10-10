import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-avis-google',
  templateUrl: './avis-google.component.html',
  styleUrl: './avis-google.component.css',
})
export class AvisGoogleComponent implements OnInit {
  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.setMetaTags();
  }

  private setMetaTags() {
    // Meta-tags pour la page d'avis Google
    this.metaService.updateMetaTags(
      'Votre avis compte pour nous ! ❤️ - MFinances',
      'Aidez-nous à améliorer nos services en partageant votre expérience avec MFinances. Votre avis nous aide à mieux vous servir.',
      'avis client, Google My Business, MFinances, feedback, témoignage'
    );
  }

  onLeaveFeedback() {
    // Lien vers Google My Business pour MFinances
    // Remplacez cet URL par votre vrai lien Google My Business
    // Pour obtenir votre lien, allez sur votre profil Google My Business et copiez l'URL de la section avis
    const googleReviewUrl =
      'https://www.google.com/search?sca_esv=bd4826c8ba41a3de&sxsrf=AE3TifM3-FaoUqMNelL-lPkK2eH0t4T5uA:1756115093965&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwY9wN49Ss6yAYNaMVwXLLnhCVrZfroQSEJ8Ic37tSPE45TmTK8NHm43mqXIGNlV9QOzePtNz3cqX83iRtIaiObLoZxVw1-lVXBh3mapUAuTKAMIXg%3D%3D&q=MFinances+%7C+Expert-Comptable+Avis&sa=X&ved=2ahUKEwie7_DC1qWPAxW1RKQEHcxVAFsQ0bkNegQIHhAE&biw=1680&bih=928&dpr=2#lrd=0x47c3c5d9d41dc777:0x4287de38397fa316,3';

    // Alternative : vous pouvez aussi utiliser un lien de recherche Google
    // const googleReviewUrl = 'https://www.google.com/search?q=MFinances+avis&rlz=1C1GCEU_fr';

    window.open(googleReviewUrl, '_blank');
  }
}
