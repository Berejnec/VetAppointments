import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ViewComponent} from "./appointment/view/view.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {EditComponent} from "./appointment/edit/edit.component";
import {HomeComponent} from "./home/home.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {EditPageComponent} from "./appointment/edit-page/edit-page.component";

const routes: Routes = [
  {path: 'acasa', component: HomeComponent},
  {path: 'vizualizare', component: ViewComponent},
  {path: 'adauga', component: AppointmentComponent},
  {path: 'editeaza', component: EditComponent},
  {path: 'editeaza/:id', component: EditPageComponent},
  {path: 'statistici', component: StatisticsComponent},
  {path: '', redirectTo: '/acasa', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
