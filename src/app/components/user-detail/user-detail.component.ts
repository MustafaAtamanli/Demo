import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User[];
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  userUpdateFrom:FormGroup;
  inputEmail:string;
  

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    
    this.createUserFrom();
    this.getUserByEmail();
    
    
  }

  getUserByEmail(){
    let email = this.localStorageService.get("email")
    this.userService.getByMail(email).subscribe(response=>{
      this.user=response.data;
      for (let i = 0; i < this.user.length; i++) {
        let data = this.user[i];
        
        this.firstName=data.firstName;
        this.lastName=data.lastName;
        this.email=data.email;
        
      }
      
    })
    
  }

  createUserFrom(){
    this.userUpdateFrom = this.formBuilder.group({
      
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required] 
    })
  }

  update(){
    if(this.userUpdateFrom.valid){
      let userModel = Object.assign({},this.userUpdateFrom.value)
      console.log(userModel)
      this.userService.update(userModel).subscribe(response=>{
        this.toastrService.success("Bilgileriniz Başarıyla Güncellendi")
      },responseError=>{
        this.toastrService.error("Hata!","Daha Sonra Tekrar Deneyiniz")
        console.log(responseError.error)
      })
    }
  }
  

  

}
