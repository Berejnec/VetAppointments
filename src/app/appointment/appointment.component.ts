import { Component, OnInit } from '@angular/core';
import {IAppointment} from "../models/appointment.model";
import {AppointmentService} from "../services/appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments!: Array<IAppointment>;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
  }

}
