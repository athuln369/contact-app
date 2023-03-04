import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContacts } from 'src/models/myContact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.component.html',
  styleUrls: ['./edit-contacts.component.css']
})
export class EditContactsComponent implements OnInit{
  contactId:string=''
  contact:MyContacts={}
  allGroups: any=[]
  editContactRouter: any;
  
  
  constructor(private editContactActivatedRoute:ActivatedRoute,private api:ApiService ,private editRouter:Router){

  }
ngOnInit(): void {
  //to get path parameter fro url
  this.editContactActivatedRoute.params.subscribe((data:any)=>{
  this.contactId = data.id
      
  })
    
  //to get get details of particular contact
  this.api.viewContact(this.contactId).subscribe((result:any)=>{
  this.contact = result    
  })
//get all groups from api
this.api.allGroups().
subscribe((groups:any)=>{
console.log(groups);
this.allGroups=groups

})
}


//edit contact(contact)
editContact(contact:MyContacts){
  this.api.updateContact(this.contactId,contact).subscribe((result:any)=>{
    alert('Contact Updated Successfully')
    this.editRouter.navigateByUrl('')
  })

}
}