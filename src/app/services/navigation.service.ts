import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IAppointment} from "../models/appointment.model";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {

  }

  getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.params[paramName];
  }

  openAppointment(id: string): Promise<boolean> {
    return this.router.navigate(['editeaza', id]);
  }

  openAppointments(): Promise<boolean> {
    return this.router.navigate(['vizualizare']);
  }

  goToHomePage(): Promise<boolean> {
    return this.router.navigate(['acasa']);
  }


}
