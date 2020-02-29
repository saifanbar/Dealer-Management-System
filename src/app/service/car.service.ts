import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Car } from '../common/car';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  car: Car;
  private url: string = "http://localhost:8080/api/cars";

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();
  

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getCarList(): Observable<Car[]>{
    return this.http.get<GetResponse>(this.url).pipe(
      map(response => response._embedded.cars)
    );
    
  }

 

  postCar(carBody:Car): Observable<any> {
    return this.http.post(this.url, carBody);
  }

  putCar(carBody:Car): Observable<void> {
    return this.http.put<void>(`${this.url}/${carBody.id}`, carBody, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getCar(id: number): Observable<Car>{
    return this.http.get<Car>(`${this.url}/${id}`);
  }

  deleteCar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`).pipe(tap(() =>{
      this._refreshNeeded$.next();
    })
    
    );
  }
  

 
}
 interface GetResponse{
    _embedded: {
      cars: Car[];
    }
  }