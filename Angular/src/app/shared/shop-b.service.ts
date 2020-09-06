import { Injectable } from '@angular/core';
import { ShopB } from './shop-b.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopBService {

  formData : ShopB;
  list : ShopB[];
  readonly rootURL = "https://localhost:44383/api"

  constructor(private  http: HttpClient) { }

  postShop(formData : ShopB){
    return this.http.post(this.rootURL+'/ShopB', formData);

  }

  refreshList(){
    this.http.get(this.rootURL+'/ShopB')
    .toPromise().then(res => this.list = res as ShopB[]);
  }

  putShop(formData : ShopB){
    return this.http.put(this.rootURL+'/ShopB/'+formData.Name, formData);

  }
  deleteShop(id : number){
    return this.http.delete(this.rootURL+'/ShopB/'+id);
  }
}
