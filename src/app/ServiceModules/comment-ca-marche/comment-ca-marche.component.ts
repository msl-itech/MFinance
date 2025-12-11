import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-ca-marche',
  templateUrl: './comment-ca-marche.component.html',
  styleUrl: './comment-ca-marche.component.css'
})
export class CommentCaMarcheComponent {

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
