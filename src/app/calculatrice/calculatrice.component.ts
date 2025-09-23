import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent {
  
  options = [
    { label: 'Hotel - Restaurant - Café', url: 'https://docs.google.com/forms/d/e/1FAIpQLSdZDDxu4UegyGSD5Vzh3oH1Vn5VPRH7oHRNMCWOic9Ehz8mCA/viewform?usp=dialog' },
    { label: 'Artisan & Commerçant', url: ' https://docs.google.com/forms/d/e/1FAIpQLSfVfSR1M0ReCwZRSSb9Rd5BImAcuDRNCvGqUQ00QrBZ6PbYzQ/viewform?usp=dialog' },
    { label: 'Professions libérales', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeh4LNLc5E-R7tQDk7bL4YeISVqLUmfBkj5_E9OB-u_vN5NvQ/viewform?usp=dialog' },
    { label: 'Freelance / Indépendant', url: 'https://docs.google.com/forms/d/e/1FAIpQLSfeiEQNDFi5EVGX2H4uWQKnEnoVxIwi5uchNpw9Kx5RpcrZ4A/viewform?usp=dialog' }
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
