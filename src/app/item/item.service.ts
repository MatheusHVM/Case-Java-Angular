import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from "./item.model";

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    listarItens(sort: string, direction: string) {
      throw new Error('Method not implemented.');
    }

    private baseURL = 'http://localhost:3306';
    private endpoint = 'pessoas';

    constructor(private httpClient: HttpClient) { }

    listar():Observable<Item[]>{
        return this.httpClient.get<Item[]>(`${this.baseURL}/${this.endpoint}`);
    }

    cadastrar(item: Item): Observable<Item>{
        return this.httpClient.post<Item>(`${this.baseURL}/${this.endpoint}`, item);
    }

    pesqusarPorId(id: string): Observable<Item> {
        return this.httpClient.get<Item>(`${this.baseURL}/${this.endpoint}/${id}`);
    }

    atualizar(item: Item): Observable<Item> {
        return this.httpClient.put<Item>(`${this.baseURL}/${this.endpoint}/${item.id}`, item);
    }

    deletar(item: Item): Observable<{}> {
        return this.httpClient.delete(`${this.baseURL}/${this.endpoint}/${item.id}`);
    }
}