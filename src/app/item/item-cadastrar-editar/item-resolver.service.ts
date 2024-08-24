import { Injectable } from '@angular/core';
import { Item } from '../item.model';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { ItemService } from '../item.service';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<Item>{

  constructor(private itemService: ItemService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route  .params["id"];
    if (id) {
      return this.itemService.pesqusarPorId(id);
    }
    return empty();
  }
  
}
