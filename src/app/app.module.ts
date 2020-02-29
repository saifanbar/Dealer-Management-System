import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { CarTableListComponent } from './component/car-table-list/car-table-list.component';
import { CarService } from './service/car.service';
import { CarInfoFormComponent } from './forms/car-info-form/car-info-form.component';
import { DisplayCarListComponent } from './component/display-car-list/display-car-list.component';



const appRoutes: Routes = [

  { path: 'list', component: CarTableListComponent },
  { path: 'form/:i', component: CarInfoFormComponent },
  { path:'', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CarTableListComponent,
    CarInfoFormComponent,
    DisplayCarListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
