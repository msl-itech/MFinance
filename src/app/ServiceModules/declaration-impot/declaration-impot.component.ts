import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-declaration-impot',
  templateUrl: './declaration-impot.component.html',
  styleUrl: './declaration-impot.component.css'
})
export class DeclarationImpotComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Déclaration d\'Impôt - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Assistance pour la déclaration d\'impôt des particuliers et des entreprises.' },
      { name: 'keywords', content: 'déclaration d\'impôt, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
