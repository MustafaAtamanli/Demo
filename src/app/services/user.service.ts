import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  apiUrl = 'https://localhost:44399/api/';

  constructor(private httpClient: HttpClient) { }

  getByMail(email: string):Observable<ListResponseModel<User>> {
    return this.httpClient.get<ListResponseModel<User>>(
      this.apiUrl + 'users/getbymail?email=' + email
    );
  }

  getUserByUserId(userId: number): Observable<SingleResponseModel<User>> {
    return this.httpClient.get<SingleResponseModel<User>>(
      this.apiUrl + 'users/getbyuserid?id=' + userId
    );
  }

  update(user: User): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'users/update',
      user
    );
  }

}
