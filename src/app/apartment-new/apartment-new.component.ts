import { Component, OnInit } from '@angular/core';
import {Apartment} from "../apartments/apartment";
import {ApartmentService} from '../apartment.service';
import { APARTMENTS } from '../mock-apartments';
@Component({
  selector: 'app-apartment-new',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {

   apartments: Apartment[];

  selectedApartment: Apartment;

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.getApartments();
  }

  onSelect(apartment: Apartment): void {
    this.selectedApartment = apartment;
    console.log(this.selectedApartment);
  }

  getApartments(): void{
    this.apartmentService.getApartments()  .subscribe(apartments => this.apartments = apartments);
  }

}
