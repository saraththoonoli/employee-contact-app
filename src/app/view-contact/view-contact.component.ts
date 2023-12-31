import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { group } from '@angular/animations';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact:any={}
  errorMsg:string=''
  group:string=''

  constructor(private api:ApiService, private viewRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.viewRouter.params.subscribe((data:any)=>{
      const {id} = data
      console.log(id);

      // call api for  get perticular id details
      this.api.Viewcontact(id).subscribe({
        next:(response:any)=>{
          console.log(response);
          const {groupId}=response
          this.api.getGroup(groupId).subscribe((data:any)=>{
            console.log(data);
            const{name}= data
            this.group =name
          })
          this.contact=response
          
        },
        error:(err:any)=>{
          console.log(err.message);
          this.errorMsg=err.message
        }
      })

     

    })
  }

}
