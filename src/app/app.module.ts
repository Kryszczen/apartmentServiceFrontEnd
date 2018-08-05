import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
// import { ApartmentsComponent } from './apartments/apartments.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { ApartmentNewComponent } from './apartment-new/apartment-new.component';
import { MessagesComponent } from './messages/messages.component';
import { ApartmentSearchComponent } from './apartment-search/apartment-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultPageComponent,
    ApartmentNewComponent,
    MessagesComponent,
    ApartmentSearchComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
