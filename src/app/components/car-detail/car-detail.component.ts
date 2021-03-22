import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {


  car:Car;
  dataLoaded=false;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
    })
  }


  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response => {
      this.car=response.data[0];
      this.dataLoaded=true;
    })
  }

}
