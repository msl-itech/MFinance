import { Component, OnInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MetaService } from '../services/meta.service';

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
    private metaService: MetaService
  ) {
    const url = 'https://www.youtube.com/embed/ghSPTixak4c';
    const url2 = 'https://www.youtube.com/embed/qc18dXxbibU';
    this.videoUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(url2);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.metaService.setTarifPageMeta();
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
