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
      'https://www.google.com/search?q=mfinances&oq=mfinances&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhivARjHARiABDIJCAIQABgKGIAEMg8IAxAAGAoYgwEYsQMYgAQyCQgEEAAYChiABDIHCAUQABiABDIGCAYQRRg9MgYIBxBFGD3SAQg0NDAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x47c3c5d9d41dc777:0x4287de38397fa316,3,,,,';

    // Alternative : vous pouvez aussi utiliser un lien de recherche Google
    // const googleReviewUrl = 'https://www.google.com/search?q=MFinances+avis&rlz=1C1GCEU_fr';

    window.open(googleReviewUrl, '_blank');
  }
}
