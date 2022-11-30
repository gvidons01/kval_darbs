import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, public router: Router) { }

  //register a new user
  register(fname: string, lname: string, email: string, password: string, phone_no: string): Observable<any>{
    return this.http.post(this.baseUrl+'/register', 
    {fname: fname, lname: lname, email: email, password: password, phone_no: phone_no});
  }

  //login into the system
  login(email: string, password: string): Observable<boolean>{
    return this.http.post<{token: string}>(this.baseUrl+'/login', {email: email, password: password})
    .pipe(
      map(result=>{
        localStorage.setItem('access_token', result.token);
        return true;
      })
    );
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  //logout of the system
  logout(){
    let removeToken = localStorage.removeItem('access_token');

    if(removeToken == null){
      this.router.navigate(['login']);
    }
    return this.http.post(this.baseUrl+'/logout', {}, httpOptions);
  }

  public get isLoggedIn(): boolean {
    //TODO: Check token expiry and other security checks
    return (localStorage.getItem('access_token') !== null);
  }
  
}
