import { Component, OnInit } from '@angular/core';
import { ChevaliersService } from '../service/chevaliers-service.service';
import { Chevalier } from '../model/chevalier.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-chevaliers',
  templateUrl: './chevaliers.component.html',
  styleUrls: ['./chevaliers.component.css']
})
export class ChevaliersComponent implements OnInit {

  chevaliers : Observable<Chevalier []>;

  constructor(private chevaliersService : ChevaliersService) { }

  ngOnInit() {
    // Méthode qui marche
    this.chevaliersService.getChevaliers().subscribe(donnees => {
      this.chevaliers = donnees;
    });
  //this.reloadData();

  }

  reloadData() {
    this.chevaliersService.getChevaliers();
  }

  supprChevalier( id : number) {
    this.chevaliersService.supprChevalier(id).subscribe (
      donnees => { console.log(donnees);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

}
