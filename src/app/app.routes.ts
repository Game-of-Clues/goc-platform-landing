import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {ReservationComponent} from "./components/reservation/reservation.component";
import { OptionsComponent } from './components/options/options.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'reservation', component: ReservationComponent },
];
