import {Injectable} from '@angular/core';
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {Observable, of} from "rxjs";
import {IAppointment} from "../models/appointment.model";
import {imageLinks} from "../mock-data/image.links";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() {
  }

  addAppointment(appointment: IAppointment) {
    of(APPOINTMENTS).subscribe(map => APPOINTMENTS.push(appointment));
  }

  getAppointments(): Observable<Array<IAppointment>> {
    return Observable.create((observer: { next: (arg0: IAppointment[]) => void; complete: () => void; }) => {
      observer.next(APPOINTMENTS);
      observer.complete();
    })
  }

  getAppointmentsStatic() {
    return APPOINTMENTS;
  }

  getAppointment(id: string): Observable<IAppointment> {
    return Observable.create((observer: { next: (arg0: IAppointment | undefined) => void; complete: () => void; }) => {
      observer.next(APPOINTMENTS.find(appointment => appointment.id === id));
      observer.complete();
    });
  }

  getAppointmentManual(id: string) {
    return APPOINTMENTS!.find(app => app.id === id);
  }

  getAppointmentByName(name: string): Observable<IAppointment> {
    return Observable.create((observer: { next: (arg0: IAppointment | undefined) => void; complete: () => void; }) => {
      observer.next(APPOINTMENTS.find(appointment => appointment.animal === name));
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
