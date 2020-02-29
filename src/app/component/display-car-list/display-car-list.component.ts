import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-display-car-list',
  templateUrl: './display-car-list.component.html',
  styleUrls: ['./display-car-list.component.css']
})
export class DisplayCarListComponent implements OnInit {

  carExists: boolean = false;

  cars: Car[];
  @Input('car') car: Car;
  

  constructor(private carService: CarService) {  }

  ngOnInit() {

    

  }

  ngOnChanges() {
    // if(changes['car'].currentValue){
    //   this.car = this.car;
    // }

    if(this.car){
      this.useData(this.car);
    }
  }

  getCarList(){

    this.carService.getCarList().subscribe(
      data => {
        this.cars = data;
      }
    )

  }

  useData(car: Car) {
    this.carExists = true;
  }

}
