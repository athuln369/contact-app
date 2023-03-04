import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
allcontacts:any =[]
contacts:any =[]
searchKey:string=''
constructor(private api:ApiService){
  
}
  ngOnInit(): void {
    this.getAllContact()
  }
  getAllContact() { this.api.allContacts()
    .subscribe((result:any)=>{
      console.log(result);
      this.allcontacts = result
    })}
  deleteContact(contactId:any){
    this.api.deleteContact(contactId)
    .subscribe((data:any)=>{
      this.getAllContact()
    })
  }
}
