import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactsComponent } from './edit-contacts/edit-contacts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewContactsComponent } from './view-contacts/view-contacts.component';

const routes: Routes = [
  { path: '', component: AllContactsComponent },
  { path: 'add-contact', component: AddContactsComponent },
  { path: 'edit-contact/:id', component: EditContactsComponent },
  { path: 'view-contact/:id', component: ViewContactsComponent },
  { path: "**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
