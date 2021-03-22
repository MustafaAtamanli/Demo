import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
