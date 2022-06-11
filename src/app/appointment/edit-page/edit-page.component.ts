import { Component, OnInit } from '@angular/core';
import {IAppointment} from "../../models/appointment.model";
import {AppointmentService} from "../../services/appointment.service";
import {NavigationService} from "../../services/navigation.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  public appointment!: IAppointment;

  constructor(private appointmentService: AppointmentService,
              private navigationService: NavigationService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentService.getAppointment(this.navigationService.getParam(this.activatedRoute, 'id'))
      .subscribe(appointment => {
        this.appointment = appointment;
        this.appointment.dateTime = appointment.dateTime;
      });
  }

  goBack() {
    this.navigationService.openAppointments().then();
  }
}
