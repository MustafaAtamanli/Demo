import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  user: User[];
  findex: any;
  dataLoaded = false;

  constructor(
    private router: Router,
    private carService: CarService,
    private userService: UserService,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
      }
    });

    this.getUser();
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.car = response.data[0];
      this.dataLoaded = true;
    });
  }

  getUser() {
    let mail = this.localStorageService.get('email');
    this.userService
      .getByMail(String(this.localStorageService.get('email')))
      .subscribe((response) => {
        this.user = response.data;

        let array: unknown = Object.values(this.user);

        if (array[6] < this.car.findexScore) {
          this.toastrService.error('Findex Puanı Yetersiz');
          this.router.navigate(['carList']);
        }
      });
  }
}
