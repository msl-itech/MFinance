import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-service',
  templateUrl: './page-service.component.html',
  styleUrl: './page-service.component.css'
})
export class PageServiceComponent implements OnInit {
  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle('Nos Services - MFinances');
    this.meta.addTags([
      { name: 'description', content: 'Découvrez les services offerts par MFinances, votre expert comptable à Bruxelles.' },
      { name: 'keywords', content: 'services, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
