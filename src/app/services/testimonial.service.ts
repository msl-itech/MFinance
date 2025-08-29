import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Testimonial } from '../models/testimonial.interface';

export interface TestimonialResponse {
  success: boolean;
  items: Testimonial[];
  meta: {
    limit: number;
    offset: number;
    order: string;
    status: string;
    type: string | null;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  private apiUrl = 'https://temoignage-capture-mfinances.vercel.app/api';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  // Récupérer les témoignages approuvés pour publication
  getApprovedTestimonials(): Observable<Testimonial[]> {
    return this.http
      .get<TestimonialResponse>(`${this.apiUrl}/testimonials?status=all&limit=50`, 
        { headers: this.headers })
      .pipe(
        map(response => response.items.filter(item => 
          item.allow_website_publication === true && 
          (item.status === 'approved' || item.status === 'pending')
        )),
        catchError(this.handleError)
      );
  }

  // Récupérer un témoignage par ID
  getTestimonialById(id: string): Observable<Testimonial> {
    return this.http
      .get<TestimonialResponse>(`${this.apiUrl}/testimonials?id=${id}`, { headers: this.headers })
      .pipe(
        map(response => response.items[0]),
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs
  private handleError(error: any) {
    console.error("Une erreur s'est produite:", error);
    return throwError(() => new Error(error.message || 'Erreur du serveur'));
  }
}