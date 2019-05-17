import { Component, OnInit } from '@angular/core';
import { ChevaliersService } from '../service/chevaliers-service.service';
import { Chevalier } from '../model/chevalier.model';

@Component({
  selector: 'app-chevalier-ajout',
  templateUrl: './chevalier-ajout.component.html',
  styleUrls: ['./chevalier-ajout.component.css']
})
export class ChevalierAjoutComponent implements OnInit {

  chevalier : Chevalier = new Chevalier();
  envoi = false;

  constructor(private chevaliersService : ChevaliersService) { }

  ngOnInit() {
  }

  save() {
    this.chevaliersService.ajoutChevalier(this.chevalier).subscribe (
      donnes => console.log(donnes), error => console.log(error)
    );
    this.chevalier = new Chevalier();
  }

  onSubmit() {
    this.envoi = true;
    this.save();
  }
}
