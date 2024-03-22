import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  public getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:3000/clientes', {headers: new HttpHeaders({})}); 
   }
}
