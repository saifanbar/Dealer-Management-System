import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-table-list',
  templateUrl: './car-table-list.component.html',
  styleUrls: ['./car-table-list.component.css']
})
export class CarTableListComponent implements OnInit {

  cars: Car[];

  car: Car;
  
  constructor(private carService: CarService, private _route: ActivatedRoute,
              private _router: Router) { }
  
  ngOnInit() {
    
    

    this.getCarList();

    this.carService.refreshNeeded$
      .subscribe(() => {
        this.getCarList();
      }

      );

      this._route.paramMap.subscribe(parameterMap => {
        const id = +parameterMap.get('id');
        this.getCar(id);
      })
  }
  getCar(id: number) {
   
  }
  

  getCarList(){

    this.carService.getCarList().subscribe(
      data => {
        this.cars = data;
      }
    )

  }

  deleteCar(carObj: Car) {

    let id = carObj.id;
    
    this.carService.deleteCar(id).subscribe(
    () => console.log(`Car with Id = ${id} is deleted.`)

    );
  }

  

 

  editCar(carObj: Car){
    this._router.navigate(['/form', carObj.id]);
  
    this.carService.putCar(carObj);
    
  }

}
