import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HumoTerminalContractService {



  constructor(private  httpClient:HttpClient) {
  }

  editContract(id :string){
    this.httpClient.get('url/'+id);
  }

}
