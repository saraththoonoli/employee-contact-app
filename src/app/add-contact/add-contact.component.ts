import { Component,OnInit } from '@angular/core';
import { contactSchema } from 'src/Models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
contact:contactSchema={}
groups:any=[]

constructor(private api:ApiService,private addContactRouter:Router){
  
}

ngOnInit(): void {
  this.api.getgroups().subscribe({
    next:(response:any)=>{
      console.log(response);
      this.groups=response
      
    },
    error:(err:any)=>{
      console.log(err.message);
      
    }
  })
}
create(groupId:any){
  console.log(groupId.Models);
}
addContact(contact:contactSchema){
  this.api.addContact(contact).subscribe({
    next:(response:any)=>{
      console.log(response);
      this.addContactRouter.navigateByUrl('')
      
    },
    error:(err:any)=>{
      console.log(err); 
    }
  })
}

}
