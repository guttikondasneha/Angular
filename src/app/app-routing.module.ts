import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { CountryComponent} from './country/country.component';
import { WeatherComponent} from './weather/weather.component';

@NgModule({
  imports: [
    CommonModule
  ],
   exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
