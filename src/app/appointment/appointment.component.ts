import { Component, OnInit } from '@angular/core';
import {IAppointment} from "../models/appointment.model";
import {AppointmentService} from "../services/appointment.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogComponent} from "../shared/dialog/dialog.component";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  public appointmentFormGroup: FormGroup;

  appointments!: Array<IAppointment>;

  public animals = APPOINTMENTS.map(appointment => appointment.animal);

  public uniqueAnimals = [...new Set(this.animals)];

  public doctors = APPOINTMENTS.map(appointment => appointment.doctorName);
  randomDoctor: string = this.doctors[Math.floor(Math.random() * this.doctors.length)];

  randomID: number = Math.floor(Math.random() * 101);

  animal: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    public dialog: MatDialog,
    private navigationService: NavigationService
  ) {
    this.appointmentFormGroup = new FormGroup({
      id: new FormControl(this.randomID),
      animal: new FormControl("", [Validators.required]),
      dateTime: new FormControl("", [Validators.required]),
      doctorName: new FormControl(this.randomDoctor, [Validators.required]),
      diagnosis: new FormControl(""),
      status: new FormControl("Creata")
    })
  }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.appointments = appointments);
  }

  onSubmit() {
    console.log(this.appointmentFormGroup.value);
    // APPOINTMENTS.push(this.appointmentFormGroup.value);
    this.appointmentService.addAppointment(this.appointmentFormGroup.value);
    setTimeout(() => {
      this.router.navigate(['vizualizare']);
    }, 2000);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  checkSelectedAnimal(animal: string) {
    return this.animals.includes(this.animal);
  }

  goToHomePage() {
    this.navigationService.goToHomePage().then();
  }
}
