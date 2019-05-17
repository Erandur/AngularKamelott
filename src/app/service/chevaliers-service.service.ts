import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Chevalier } from '../model/chevalier.model';

@Injectable({
  providedIn: 'root'
})
export class ChevaliersService {
  public CHEVALIER_URL = '//localhost:8080/kaamelott';

  constructor(private http : HttpClient) {

    }

    getChevaliers() : Observable<any> {
      // Méthode qui marche
      return this.http.get(this.CHEVALIER_URL);
      //return this.http.get('${this.CHEVALIER_URL}');
    }

    getUnChevalier (id : number) : Observable<Object> {
      return this.http.get(this.CHEVALIER_URL+'/'+id);
    }

    ajoutChevalier (chevalier : Object) : Observable <Object> {
      return this.http.post(this.CHEVALIER_URL, chevalier);
    }

    modifieChevalier (id : number, value : any) : Observable<Object> {
      return this.http.put(this.CHEVALIER_URL+'/'+id, value);
    }

    supprChevalier (id : number) : Observable<any> {
      return this.http.delete(this.CHEVALIER_URL+'/'+id, { responseType: 'text' });
    }

    /*supprChevalier(id : number) {
      console.log("On supprime le chevalier " + id);
      console.log("return this.http.delete(this.CHEVALIER_URL+/id")
    }*/

}
