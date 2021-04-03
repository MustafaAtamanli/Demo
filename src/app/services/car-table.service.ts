import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarTableService {

  apiUrl="https://localhost:44399/api/";

  constructor(private httpClient:HttpClient) {}

 /*  getCarDetail():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  } */
}
