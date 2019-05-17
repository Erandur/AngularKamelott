import { Component, OnInit, Input } from '@angular/core';
import { Chevalier } from '../model/chevalier.model';

@Component({
  selector: 'app-chevalier-modifier',
  templateUrl: './chevalier-modifier.component.html',
  styleUrls: ['./chevalier-modifier.component.css']
})
export class ChevalierModifierComponent implements OnInit {

  @Input () chevalier : Chevalier;

  constructor() { }

  ngOnInit() {
  }

}
