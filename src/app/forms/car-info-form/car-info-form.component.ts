import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Car } from 'src/app/common/car';
import { CarService } from 'src/app/service/car.service';
import { NgForm, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car-info-form',
  templateUrl: './car-info-form.component.html',
  styleUrls: ['./car-info-form.component.css']
})


export class CarInfoFormComponent implements OnInit {

  carObject: Car = new Car();
  displayCar: Car;

  id: number;
  year: number;
  make: string;
  model: string;
  color: string;
  vin: string;
  status: string;
  

  car: Car;


  constructor(private carService: CarService, private _route: ActivatedRoute) { }



  ngOnInit() {
    

    
  }


  postCar() {

      this.carService.postCar(this.carBody())
      .subscribe(
        data => {
          this.displayCar = data;
        }
      )

        
  }

 

 

  carBody(): Car {

    this.carObject.id = this.id;
    this.carObject.year = this.year;
    this.carObject.make = this.make;
    this.carObject.model = this.model;
    this.carObject.color = this.color;
    this.carObject.vin = this.vin;
    this.carObject.status = this.status;

    return this.carObject;
  }

  resetForm(carForm: NgForm) {
    carForm.resetForm();
  }

}
