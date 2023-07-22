import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { contactSchema } from 'src/Models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
contact:contactSchema={}
groups:any=[]

  constructor(private editactivatedRoute:ActivatedRoute,private api:ApiService,private editrouter:Router){

  }
  ngOnInit(): void {
    this.editactivatedRoute.params.subscribe({
      next:(pathparameter:any)=>{
        const {id} =pathparameter
        console.log(id);
        // call view contact
        this.api.Viewcontact(id).subscribe({
          next:(response:any)=>{
            console.log(response);
            this.contact=response
          }
        })
        
      }
    })

    // get all groups
    this.api.getgroups().subscribe({
      next:(allgroup:any)=>{
        this.groups=allgroup
        console.log(this.groups);
        
      }
    })
  }
  editcontact(id:any){
    this.api.editContact(id,this.contact).subscribe({
      next:(response:any)=>{
        this.editrouter.navigateByUrl("")
      }
    })
  }


}
