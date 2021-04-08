import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: User[];
  id:number;
  
  constructor( private authService: AuthService,
    private userService: UserService, 
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService) { }



  ngOnInit(): void {
    this.isAuthenticated();
    this.getByUserId();
  }

  Authenticated: boolean;

  isAuthenticated() {
    if (this.authService.isAuthehticated()) {
      this.Authenticated = true;
    } else {
      this.Authenticated = false;
    }
  }

  getByUserId() {
     

       this.userService.getByMail(String(this.localStorageService.get('email'))).subscribe(response=>{
        this.user=response.data;
        
      })

      

      


  }

  logOut() {
    this.localStorageService.clear();
    this.toastrService.info('Çıkış Yapıldı', 'Bilgi');
    setTimeout(function () {
      location.reload();
    }, 400);
  }

}
