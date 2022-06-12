import { Injectable } from '@angular/core';
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {IDictionary} from "../statistics/statistics.component";
import {AppointmentService} from "./appointment.service";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private appointmentService: AppointmentService) { }

  monthsDictionary = {} as IDictionary;
  animalsDictionary = {} as IDictionary;

  getStatuses() {
    return this.appointmentService.getAppointmentsStatic().map(function (appointment) {
      return appointment.status;
    });
  }

  getDates() {
    return this.appointmentService.getAppointmentsStatic().map(function (appointment) {
      return appointment.dateTime;
    })
  }

  getAnimals() {
    return this.appointmentService.getAppointmentsStatic().map(function (appointment) {
      return appointment.animal;
    })
  }

  statuses: Array<string> = this.getStatuses();
  dates: Array<string> = this.getDates();
  animals: Array<string> = this.getAnimals();

  getDoneStatusesNumber() {
    let statusCounter = 0;
    this.statuses.forEach(status => {
      if(status === 'Incheiata') {
        statusCounter++;
      }
    });
    return statusCounter;
  }

  getInProgressStatusesNumber() {
    return (this.appointmentService.getAppointmentsStatic().length - this.getDoneStatusesNumber());
  }

  getMonthsCount() {
    this.dates.forEach(date => {
      this.monthsDictionary[date.substring(3,5)] = (this.monthsDictionary[date.substring(3,5)] || 0) + 1;
    });
    return Object.values(this.monthsDictionary);
  }

  getAnimalsCount() {
    this.animals.forEach(animal => {
      this.animalsDictionary[animal] = (this.animalsDictionary[animal] || 0) + 1;
    });
    return Object.values(this.animalsDictionary);
  }
}
