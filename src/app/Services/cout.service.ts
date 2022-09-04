import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cout } from 'src/app/Models/cout';
@Injectable({
  providedIn: 'root'
})
export class CoutService {

  constructor(private http: HttpClient) { }

  private baseUrl1 = 'http://localhost:8088/SpringMVC/Jardin/affecter-cout';

  affectercoutjardin(Cout: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, Cout);
  }


}
