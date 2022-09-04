import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jardin } from '../Models/jardin';

@Injectable({
  providedIn: 'root'
})
export class JardinService {

  private baseUrl1 = 'http://localhost:8088/SpringMVC/Jardin/retrieve-all-Jardins';
  private baseUrl2 = 'http://localhost:8088/SpringMVC/Jardin/add-Jardin';

  private baseUrl3= 'http://localhost:8088/SpringMVC/Jardin/retrieve-Jardin';
  private baseUrl4 = 'http://localhost:8088/SpringMVC/Jardin/modify-Jardinn';
  private baseUrl5= 'http://localhost:8088/SpringMVC/Jardin/remove-Jardin';


  constructor(private http: HttpClient) { }

  retrieveJardin(jardin_id: number): Observable<any> {
    return this.http.get(`${this.baseUrl3}/${jardin_id}`);
  }

  addJardin(Jardin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, Jardin);
  }

  updateJardin(jardin_id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl4}/${jardin_id}`, value);
  }

  removeJardin(jardin_id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl5}/${jardin_id}`, { responseType: 'text' });
  }

  
  retrieveAllJardins(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }
}
