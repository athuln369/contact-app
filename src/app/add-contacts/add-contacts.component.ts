import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyContacts } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit{
groups:any = []
contact:MyContacts = {}
  constructor(private api:ApiService,private addContactRouter:Router){
    this.contact.groupId='choose a Group'

  }
  ngOnInit(): void {
    this.api.allGroups()
    .subscribe((result:any)=>{
      console.log(result);
      this.groups = result
      
    })
  }

  //add contact

  addContact(contact:any){
this.api.AddContact(contact)
.subscribe((data:any)=>{
  alert('New contact added')
  this.addContactRouter.navigateByUrl('')
})
  }
}
