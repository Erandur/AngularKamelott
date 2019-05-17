import { Component, OnInit, Input } from '@angular/core';
import { Chevalier } from '../model/chevalier.model';
import { ChevaliersService } from '../service/chevaliers-service.service';
import { ChevaliersComponent } from '../chevaliers/chevaliers.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chevalier-detail',
  templateUrl: './chevalier-detail.component.html',
  styleUrls: ['./chevalier-detail.component.css']
})
export class ChevalierDetailComponent implements OnInit {

  chevalier : any;

  constructor(private chevaliersService : ChevaliersService,
              private route: ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.getUnChevalier(this.route.snapshot.params['id']);
  }

  getUnChevalier (id) {
    this.chevaliersService.getUnChevalier(id).subscribe (
      donnees => {
        this.chevalier = donnees;
        console.log(this.chevalier);
      }
    );
  }

}
