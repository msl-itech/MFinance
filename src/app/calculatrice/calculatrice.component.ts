import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  
  options = [
    { label: 'Horeca', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdZDDxu4UegyGSD5Vzh3oH1Vn5VPRH7oHRNMCWOic9Ehz8mCA/viewform?usp=dialog' },
    { label: 'Version Artisan & Commerçant', url: 'https://docs.google.com/forms/d/1AdOw-3SNFM-d95AsNVuEAy5iGAUcnxEre7DrEtfCc0E/edit' },
    { label: 'Professions libérales', url: 'https://docs.google.com/forms/d/1zzgA70ViP0whd9RfaLIWV5A7nUeskQr5CwB5AyLYEcg/edit' },
    { label: 'Type freelances/Indépendant', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfeiEQNDFi5EVGX2H4uWQKnEnoVxIwi5uchNpw9Kx5RpcrZ4A/viewform?usp=dialog' }
  ];

  selectedOption: string = '';

  // Redirection déclenchée par le bouton
  redirectToForm() {
    if (!this.selectedOption) {
      alert('Veuillez sélectionner votre secteur avant de continuer.');
      return;
    }

    const option = this.options.find(opt => opt.label === this.selectedOption);
    if (option) {
      window.open(option.url, '_blank');
    }
  }
}
