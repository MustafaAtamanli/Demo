import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  apiUrl="https://localhost:44399/api/";

  constructor(private httpClient: HttpClient) { }

  getCarDetail():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcarsdetails";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/GetCarsByColorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getcardetails?carId=" + carId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
}
