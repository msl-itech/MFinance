import { Component, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrl: './tarif.component.css'
})
export class TarifComponent {
  isAccordionOpen = false;
  videoUrl: SafeResourceUrl;

 
  constructor(private sanitizer: DomSanitizer,private modalService: NgbModal) {
    const url = 'https://www.youtube.com/embed/ghSPTixak4cc';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
