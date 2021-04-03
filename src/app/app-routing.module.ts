import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandTableComponent } from './components/brand-table/brand-table.component';

import { BrandComponent } from './components/brand/brand.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarComponent } from './components/car/car.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { MainComponent } from './components/main/main.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  /* {path:"cars",component:CarComponent}, */
  {path:"filter/:brandId",component:CarComponent},
  {path:"filter/:colorId",component:CarComponent},
  {path:"cars/car-detail/:carId",component:CarDetailComponent},
  {path:"carList",component:CarTableComponent},
  {path:"filter/:brandId/:colorId",component:CarComponent},
  {path:"brandList",component:BrandTableComponent},
  {path:"colorList",component:ColorTableComponent}
  
  
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }