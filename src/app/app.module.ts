import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChequeslistComponent } from './chequeslist/chequeslist.component';
import { AppRoutingModule } from './/app-routing.module';
import { CountryComponent } from './country/country.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { WeatherComponent} from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from "./apixu.service";

const appRoutes: Routes = [
  { path: 'cheques', component: ChequeslistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'country' component: CountryComponent},
  { path: 'country/:userIn', component: CountryComponent },
  { path: 'weather', component: WeatherComponent }
];
//

@NgModule({
  declarations: [
    AppComponent,
    ChequeslistComponent,
    CountryComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
