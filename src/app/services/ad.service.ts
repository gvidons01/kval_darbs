import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdService {

 private url = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  listGroups(){
    return this.http.get<any>(this.url+`/groups`)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('error: something went wrong with retrieving groups!');
      }));
  }

  listCategories(){
    return this.http.get<any>(this.url+`/group/:id`)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('error: something went wrong with retrieving categories!');
      }));
  }

  listAds(){
    return this.http.get<any>(this.url+`/ads`)
    .pipe(catchError(
      (error) => {
        console.log(error);
        return throwError('Error: shit hit the fan!');
      }));
  }
}
