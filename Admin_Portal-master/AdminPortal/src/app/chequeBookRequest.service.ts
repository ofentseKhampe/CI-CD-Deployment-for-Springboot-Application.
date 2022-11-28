import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ChequeBookRequestService {

  constructor (private http:HttpClient){}

  getChequeBookRequestList() {
    let url = "http://localhost:3309/allcheques";
    return this.http.get(url);
  }

  confirmChequeBookRequest(id: number) {
    let url = "http://localhost:3309/admin/confirmchequetrue/"+id;
    return this.http.get(url);
  }

}
