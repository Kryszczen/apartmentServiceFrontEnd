import { Component, OnInit } from '@angular/core';
import {Apartment} from "./apartment";
import { APARTMENTS } from '../mock-apartments';
@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {
  
  // apartments = APARTMENTS;

  // selectedApartment: Apartment;

  
  constructor() { }

  ngOnInit() {
  }

  onSelect(apartment: Apartment): void {
    // this.selectedApartment = apartment;
  }

}
