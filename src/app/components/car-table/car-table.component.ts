import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarTableService } from 'src/app/services/car-table.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {


  cars:Car[];
  filterText="";

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail(){
    this.carService.getCarDetail().subscribe(response=>{
      this.cars=response.data;
      
    });
  }

}
