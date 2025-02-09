import { Component, TemplateRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css'
})
export class TarifComponent implements OnInit {
  isAccordionOpen = false;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private modalService: NgbModal, private meta: Meta) {
    const url = 'https://www.youtube.com/embed/ghSPTixak4cc';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.meta.addTags([
      { name: 'description', content: 'Découvrez nos tarifs pour les services comptables.' },
      { name: 'keywords', content: 'tarifs, services comptables, MFinances' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }

  isAccordionOpenSituation = false;
  isAccordionOpenAnticipation = false;
  isAccordionOpenServices = false;

  toggleAccordion(section: string): void {
    if (section === 'situation') {
      this.isAccordionOpenSituation = !this.isAccordionOpenSituation;
    } else if (section === 'anticipation') {
      this.isAccordionOpenAnticipation = !this.isAccordionOpenAnticipation;
    } else if (section === 'services') {
      this.isAccordionOpenServices = !this.isAccordionOpenServices;
    }
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'detailsModalLabel', size: 'lg', scrollable: true });
  }
}
