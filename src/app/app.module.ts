import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ApartmentsComponent } from './apartments/apartments.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ApartmentNewComponent } from './apartment-new/apartment-new.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    ApartmentNewComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
