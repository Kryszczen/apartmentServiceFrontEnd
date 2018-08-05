import { Injectable } from '@angular/core';
import { Apartment } from './apartments/apartment';
import { APARTMENTS } from './mock-apartments';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  private apartmentsUrl = 'http://localhost:8080/all';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getApartments(): Observable<Apartment[]>{
    // TODO: send the message _after_fetching the apartments
    return this.http.get<Apartment[]>(this.apartmentsUrl)
    .pipe(
      tap(heroes => this.log('fetched apartments')),
      catchError(this.handleError('getApartments', []))
  );
  }

  private log(message: string) {
    this.messageService.add(`ApartmentService: ${message}`);
  }
  getApartment(id: number): Observable<Apartment> {
    const url = `${this.apartmentsUrl}/${id}`;
  return this.http.get<Apartment>(url).pipe(
    tap(_ => this.log(`fetched apartment id=${id}`)),
    catchError(this.handleError<Apartment>(`getApartment id=${id}`))
  );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  

  /* GET apartments whose name contains search term */
searchApartments(term: string): Observable<Apartment[]> {
  if (!term.trim()) {
    // if not search term, return empty apartment array.
    return of([]);
  }
  return this.http.get<Apartment[]>(`${this.apartmentsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found apartments matching "${term}"`)),
    catchError(this.handleError<Apartment[]>('searchApartments', []))
  );
}
}
