import { Component, OnInit, Input } from '@angular/core';
import {Apartment} from "../apartments/apartment";
import { APARTMENTS } from '../mock-apartments';



@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  @Input() apartment: Apartment;
  apartments = APARTMENTS;

  selectedApartment: Apartment;

  constructor() { }

  ngOnInit() {
  }

}


