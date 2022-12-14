import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class UserService {

  constructor (private http:HttpClient){}
  // http://localhost:3309/admin/getallusers
  getUsers() {
    let url = "http://localhost:3309/admin/getallusers";
    return this.http.get(url);
  }

   getPrimaryTransactionList(userAcc: any) {
     let url = "http://localhost:3309/admin/transactions/"+userAcc;
    return this.http.get(url);
   }

   getSavingsTransactionList(userAcc: any) {
     let url = "http://localhost:3309/admin/transactions/"+userAcc;
    return this.http.get(url);
   }

   enableUser (username: string) {
     let url = "http://localhost:3309/api/user/"+username+"/enable";
     return this.http.get(url, { withCredentials: true });
   }

   disableUser (username:number) {
     let url = "http://localhost:3309/admin/admin/deleteuser/"+username;
     return this.http.delete(url);
   }

}
