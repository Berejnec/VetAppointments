import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IAppointment} from "../../models/appointment.model";
import {APPOINTMENTS} from "../../mock-data/appointment.data";
import {AppointmentService} from "../../services/appointment.service";
import {ActivatedRoute, Router} from "@angular/router";
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

  clicked = false;

  confirmed = false;
  statuses: string[] = ['Creata', 'Confirmata', 'Incheiata'];

  constructor(private appointmentService: AppointmentService) {
    this.appointmentFormGroup = new FormGroup({
      id: new FormControl(""),
      animal: new FormControl({value: '', disabled: this.confirmed}, [Validators.required]),
      dateTime: new FormControl([Validators.required]),
      doctorName: new FormControl({value: '', disabled: this.confirmed}, [Validators.required]),
      diagnosis: new FormControl(''),
      status: new FormControl("")
    })
  }


  public _appointment!: IAppointment;

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
    console.log(APPOINTMENTS);
  }

  onSubmit() {
      this.appointmentService.updateAppointment(this.appointmentFormGroup.value);
      this.clicked = true;
  }

  statusIsConfirmed(appointment: IAppointment) {
    if(appointment.status === 'Confirmata' || appointment.status === 'Incheiata') {
      this.confirmed = true;
      return true;
    }
    return false;
  }
}
