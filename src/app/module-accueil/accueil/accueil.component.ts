import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTags([
      { name: 'description', content: 'Bienvenue sur MFinances, votre expert comptable à Bruxelles.' },
      { name: 'keywords', content: 'expert comptable, Bruxelles, comptabilité' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
