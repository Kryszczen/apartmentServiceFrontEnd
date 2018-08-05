import { Component, OnInit } from '@angular/core';
     
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Apartment } from '../apartments/apartment';
import { ApartmentService } from '../apartment.service';
 
@Component({
  selector: 'app-apartment-search',
  templateUrl: './apartment-search.component.html',
  styleUrls: [ './apartment-search.component.css' ]
})
export class ApartmentSearchComponent implements OnInit {
  apartments$: Observable<Apartment[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private apartmentService: ApartmentService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  
 
  ngOnInit(): void {
    this.apartments$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.apartmentService.searchApartments(term)),
    );
  }
}