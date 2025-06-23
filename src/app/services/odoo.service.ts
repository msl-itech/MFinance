import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OdooService {
  private apiUrl = environment.odooApiUrl; // URL de votre backend Odoo
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-signature': environment.xSignature,
    'x-client-id': environment.xClientId,
    'x-company-id': environment.xCompanyId,
  });

  constructor(private http: HttpClient) {}

  // Création d'un lead
  createLead(leadData: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/leads`, leadData, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Gestion des erreurs
  private handleError(error: any) {
    console.error("Une erreur s'est produite:", error);
    return throwError(() => new Error(error.message || 'Erreur du serveur'));
  }
}
