import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { contactSchema } from 'src/Models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url="https://employee-contact-details.onrender.com"

  constructor(private http:HttpClient) { }

  handleError(error:HttpErrorResponse){
   let errorMsg:String=''
    if(error.error){
      errorMsg =  `error:${error.error.message}`
    }else{
      errorMsg =`status: ${error.status} \n error:${error.message}`
    }
    return throwError(()=>errorMsg)

  }

  // get all contact
  getAllcontact(){
    // apicall url get req
   return this.http.get(`${this.base_url}/contacts`)
  }
  // get view contact
   Viewcontact(id:any){
   return this.http.get(`${this.base_url}/contacts/${id}`)
   }
  //  getgroup
  getGroup(id:any){
   return this.http.get( `${this.base_url}/groups/${id}`)
  }
  getgroups(){
  return  this.http.get(`${this.base_url}/groups`)
  }

  addContact(contact:contactSchema){
    return this.http.post(`${this.base_url}/contacts`,contact)
  }

  deleteContact(id:any){
    return this.http.delete(`${this.base_url}/contacts/${id}`)
  }

  editContact(id:any,contact:contactSchema){
    return this.http.put(`${this.base_url}/contacts/${id}`,contact)
  }


  
}
