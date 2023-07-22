import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
// to hold 
  allContacts:any=[]
  isloading:boolean=true
  errorMsg:string=''
  todayDate:Date = new Date()
  searchKey:string=""
  
  constructor(private api:ApiService){
  }

  ngOnInit(): void {
   this.getallcontact()
  }
  // get all contact

  getallcontact(){
    this.api.getAllcontact().subscribe({
      next:(Response:any)=>{
        console.log(Response);
       setTimeout(()=>{
        this.allContacts=Response
        this.isloading=false
       },1000);
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errorMsg=err.message
        this.isloading=false 
      }
     })

  }

  deletecontact(id:any){

    return this.api.deleteContact(id).subscribe({
      next:(response:any)=>{
       this.getallcontact()
        
      }
    })

  }

}
