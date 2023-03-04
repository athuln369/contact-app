import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AllContactsComponent,
    ViewContactsComponent,
    EditContactsComponent,
    AddContactsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
