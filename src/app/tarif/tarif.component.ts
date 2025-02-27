import { Component, TemplateRef, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css',
})
export class TarifComponent implements OnInit {
  isAccordionOpen = false;
  videoUrl: SafeResourceUrl;
  videoUrl2: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private meta: Meta
  ) {
    const url = 'https://www.youtube.com/embed/ghSPTixak4c';
    const url2 = 'https://www.youtube.com/embed/qc18dXxbibU';
    this.videoUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(url2);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.meta.addTags([
      {
        name: 'description',
        content: 'Découvrez nos tarifs pour les services comptables.',
      },
      { name: 'keywords', content: 'tarifs, services comptables, MFinances' },
      { name: 'author', content: 'MIKA MUSUNGAYI' },
    ]);
  }

  scrollToVideo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
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
    this.modalService.open(content, {
      ariaLabelledBy: 'detailsModalLabel',
      size: 'lg',
      scrollable: true,
    });
  }
}
