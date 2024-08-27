import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Pessoa } from '../model/pessoa';
import { PessoasService } from '../services/pessoas.service';


@Injectable({
  providedIn: 'root'
})
export class PessoaResolver  {

  constructor(private service: PessoasService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id:'' , name:'' , cpfCnpj:'' , telefone:'' , email:'', endereco:'' , numeroEndereco:'' , bairro:'' , cep:'' , cidade:'' , uf:'', lessons: [] });
  }
}
