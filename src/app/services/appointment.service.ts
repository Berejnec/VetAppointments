import { Injectable } from '@angular/core';
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {Observable, of, Observer} from "rxjs";
import {IAppointment} from "../models/appointment.model";
import {imageLinks} from "../mock-data/image.links";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  addAppointment(appointment: IAppointment) {
    APPOINTMENTS.push(appointment);
  }

  getAppointments(): Observable<Array<IAppointment>> {
    // return of(APPOINTMENTS);
    return Observable.create((observer: { next: (arg0: IAppointment[]) => void; complete: () => void; }) => {
      observer.next(APPOINTMENTS);
      observer.complete();
    })
  }

  getAppointment(id: string): Observable<IAppointment> {
    return Observable.create((observer: { next: (arg0: IAppointment | undefined) => void; complete: () => void; }) => {
      observer.next(APPOINTMENTS.find(appointment => appointment.id === id));
      observer.complete();
    });
  }

  getAppointmentById(id: string) {
    return APPOINTMENTS.find(appointment => appointment.id === id);
  }

  updateAppointment(appointment: IAppointment) {
    let appointmentIndex = APPOINTMENTS.findIndex((obj) => obj.id == appointment.id);
    APPOINTMENTS[appointmentIndex] = appointment;
  }

  getImageLinks() {
    return of(imageLinks);
  }
}
