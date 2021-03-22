import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarTableService } from 'src/app/services/car-table.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {


  cars:Car[];
  filterText="";

  constructor(private carTable:CarTableService) { }

  ngOnInit(): void {
    this.getCarDetail();
  }

  getCarDetail(){
    this.carTable.getCarDetail().subscribe(response=>{
      this.cars=response.data;
      
    });
  }

}
