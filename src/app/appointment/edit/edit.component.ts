import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAppointment} from "../../models/appointment.model";
import {APPOINTMENTS} from "../../mock-data/appointment.data";
import {AppointmentService} from "../../services/appointment.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../shared/dialog/dialog.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public appointmentFormGroup: FormGroup;

  appointments!: Array<IAppointment>;

  public animals = APPOINTMENTS.map(appointment => appointment.animal);

  public uniqueAnimals = [...new Set(this.animals)];

  animal: string = '';

  confirmed = false;

  constructor(
    private appointmentService: AppointmentService, private router: Router) {
    this.appointmentFormGroup = new FormGroup({
      id: new FormControl(""),
      animal: new FormControl({value: '', disabled: this.confirmed}, [Validators.required]),
      dateTime: new FormControl("", [Validators.required]),
      doctorName: new FormControl({value: '', disabled: this.confirmed}, [Validators.required]),
      diagnosis: new FormControl(""),
      status: new FormControl("")
    })
  }

  private _appointment!: IAppointment;

  get appointment(): IAppointment {
    return this._appointment;
  }

  @Input()
  set appointment(appointment: IAppointment) {
    this._appointment = appointment;
    this.appointmentFormGroup.patchValue(appointment);
  }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
  }

  onSubmit() {
      this.appointmentService.updateAppointment(this.appointmentFormGroup.value);

  }

  statusIsConfirmed(appointment: IAppointment) {
    if(appointment.status === 'Confirmata') {
      this.confirmed = true;
      return true;
    }
    return false;
  }

}
