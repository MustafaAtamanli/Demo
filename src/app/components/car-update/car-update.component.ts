import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  carUpdateForm:FormGroup;
  brands:Brand[];
  colors:Color[];

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private carService:CarService,private colorService:ColorService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.createCarUpdateForm();
    this.getBrands();
    this.getColors();
    
    
  }

  createCarUpdateForm(){
    this.carUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      modelYear:["",Validators.required],
      dailyPrice:["",Validators.required],
      description:["",Validators.required]
    })
  }

  update(){
    if(this.carUpdateForm.valid){
      let carModel=Object.assign({},this.carUpdateForm.value)
      this.carService.update(carModel).subscribe(response=>{
        
        this.toastrService.success(response.message,"Başarılı");
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i < responseError.error.Errors.length; i++) {

            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            
          }
          
        }
        
      })
      
    }
    else{
      this.toastrService.error("Eksik Veya Yanlış Girilmiş Bilgiler Var","Hata!")
    }
    
  }


  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    });
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
    });
  }


}
