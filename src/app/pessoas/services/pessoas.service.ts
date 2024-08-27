import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from '../model/pessoa';
import { delay, first, map, tap } from 'rxjs/operators';
import { PessoaPage } from '../model/pessoa-page';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly API = 'http://localhost:8080/pessoas';

  constructor(private httpClient: HttpClient) { }

  list(page = 0, pageSize = 10) {
    return this.httpClient.get<PessoaPage>(this.API, { params: { page, pageSize } })
      .pipe(
        first(),
        //delay(5000),
        // tap(pessoas => console.log(pessoas))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Pessoa>(`${this.API}/${id}`);
  }

  save(record: Partial<Pessoa>) {
    // console.log(record);
    if (record._id) {
      // console.log('update');
      return this.update(record);
    }
    // console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Pessoa>) {
    return this.httpClient.post<Pessoa>(this.API, record).pipe(first());
  }

  private update(record: Partial<Pessoa>) {
    return this.httpClient.put<Pessoa>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
}
