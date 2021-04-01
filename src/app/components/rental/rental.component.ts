import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {


  rentals:Rental[];
  dataLoaded=false;
  rentDate: Date;
  returnDate: Date;
  car:Car;

  constructor(private rentalService:RentalService,private activatedRoute:ActivatedRoute,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getRentalDetail();
  }

  getRentalDetail(){
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentals=response.data;
      this.dataLoaded=true;
      
    });
  }

  createRental() {
    let MyRental: Rental = {
      id: this.car.id,
      brandName: this.car.brandName,
      modelYear: this.car.modelYear,
      dailyPrice: this.car.dailyPrice,
      description: this.car.description,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      companyName:null,
      firstName:null,
      lastName:null
      
    };
    if (MyRental.rentDate == undefined) {
      this.toastrService.error("Eksik bilgi girdiniz","Bilgilerinizi kontrol edin")
    } 
    
  }
}
