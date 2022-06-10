import { Injectable } from '@angular/core';
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAppointments() {
    return of(APPOINTMENTS);
  }
}
