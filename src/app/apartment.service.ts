import { Injectable } from '@angular/core';
import { Apartment } from './apartments/apartment';
import { APARTMENTS } from './mock-apartments';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor() { }
  getApartments(): Observable<Apartment[]>{
    return of(APARTMENTS);
  }
}
