import { Apartment } from './apartments/apartment';

export const APARTMENTS: Apartment[] = [
  { id: 11, name: 'Nice', dateOfPOstage: new Date('July 21, 2018 01:15:00'), price: 200000, roomQuantity: 4, metersSquare: 45, voivodeship: 'łódzkie', city: 'Łódź', typeOfProperty: 'mieszkanie', seller:'właściciel' },
  { id: 12, name: 'Narco', dateOfPOstage: new Date('July 21, 2017 01:15:00'), price: 100000, roomQuantity: 6, metersSquare: 23, voivodeship: 'łódzkie', city: 'Pabianice', typeOfProperty: 'mieszkanie', seller:'właściciel' },
  { id: 13, name: 'Bombasto', dateOfPOstage: new Date('July 21, 1398 01:15:00'), price: 500000, roomQuantity: 6, metersSquare: 23, voivodeship: 'łódzkie', city: 'Pabianice', typeOfProperty: 'dom', seller:'agencja'},
  { id: 14, name: 'Celeritas', dateOfPOstage: new Date('July 21, 1983 01:15:00'), price: 1000000, roomQuantity: 6, metersSquare: 23, voivodeship: 'łódzkie', city: 'Pabianice', typeOfProperty: 'dom', seller:'agencja'},
  { id: 15, name: 'Magneta', dateOfPOstage: new Date('July 21, 1983 01:15:00'), price: 345198, roomQuantity: 6, metersSquare: 23, voivodeship: 'łódzkie', city: 'Pabianice', typeOfProperty: 'dom', seller:'agencja' },
];
