import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit() {
    this.meta.addTags([
      { name: 'description', content: 'Contactez MFinances pour vos besoins comptables.' },
      { name: 'keywords', content: 'contact, MFinances, expert comptable' },
      { name: 'author', content: 'MIKA MUSUNGAYI' }
    ]);
  }
}
