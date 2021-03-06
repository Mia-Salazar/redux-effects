import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/users`)
           .pipe(map(
             resp =>{
              return resp['data']
             }
           ))
  }
}
