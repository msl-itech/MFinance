import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import { FooterComponent } from "./footer/footer.component";
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'MFinances';
  isLoaded$!: Observable<boolean>;


  ngOnInit() {
    AOS.init({
      duration: 1200, // Durée de l'animation en millisecondes
      once: true, // L'animation se déclenche une seule fois
    });
    this.isLoaded$ = of(true).pipe(delay(100)); 
  }
}
