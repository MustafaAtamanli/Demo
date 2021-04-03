import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { BrandTableComponent } from '../brand-table/brand-table.component';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css']
})
export class BrandUpdateComponent implements OnInit {

  brandProperty:BrandTableComponent;
  brandId:number;
  brandName:string;

 
  brandUpdateForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,private brandService:BrandService) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
  }

  createBrandUpdateForm(){

    this.brandUpdateForm=this.formBuilder.group({
      brandName:["",Validators.required],
      brandId:["",Validators.required]  
    })
  }

  update(){
    if(this.brandUpdateForm.valid){
      let brandModel=Object.assign({},this.brandUpdateForm.value)
      this.brandService.update(brandModel).subscribe(response=>{
        
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

}
