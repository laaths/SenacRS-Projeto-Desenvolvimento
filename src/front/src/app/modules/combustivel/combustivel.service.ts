import { CombustivelModel } from './../../shared/models/combustivel.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CombustivelService {

  constructor(private http: HttpClient) {}

  create(pneu: CombustivelModel): Observable<CombustivelModel> {
    return this.http.post<CombustivelModel>(`${url}/combustivel`, pneu);
  }
  read_all(): Observable<CombustivelModel[]> {
    return this.http.get<CombustivelModel[]>(`${url}/combustivel`);
  }
  read_id(id: number): Observable<CombustivelModel> {
    return this.http.get<CombustivelModel>(`${url}/combustivel/${id}`);
  }
  update(id: number, pneu: CombustivelModel): Observable<any> {
    return this.http.patch(`${url}/${id}`, pneu);
  }
  delete(id: number): Observable<CombustivelModel> {
    return this.http.delete<CombustivelModel>(`${url}/${id}`);
  }
}
