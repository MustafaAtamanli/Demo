import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentalComponent } from './components/rental/rental.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';


import {ToastrModule} from 'ngx-toastr';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { PaymentComponent } from './components/payment/payment.component';
import { MainComponent } from './components/main/main.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandTableComponent } from './components/brand-table/brand-table.component';
import { ColorTableComponent } from './components/color-table/color-table.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { BrandUpdateComponent } from './components/brand-update/brand-update.component';
import { CarUpdateComponent } from './components/car-update/car-update.component';
import { ColorUpdateComponent } from './components/color-update/color-update.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    CarDetailComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe,
    CarTableComponent,
    CarFilterComponent,
    PaymentComponent,
    MainComponent,
    CarAddComponent,
    BrandAddComponent,
    BrandTableComponent,
    ColorTableComponent,
    ColorAddComponent,
    BrandUpdateComponent,
    CarUpdateComponent,
    ColorUpdateComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
