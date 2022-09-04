import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamation } from 'src/app/Models/reclamation';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private baseUrl1 = 'http://localhost:8088/SpringMVC/Jardin/envoie-reclamation';

  constructor(private http: HttpClient) { }

  sendEmail(Reclamation: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, Reclamation);
  }



}

