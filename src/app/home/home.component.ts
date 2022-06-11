import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppointmentService} from "../services/appointment.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageObject!: Array<{
    image: string,
    thumbImage: string
  }>;

  constructor(private router: Router, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getImageLinks().subscribe(links => this.imageObject = links);
  }

  goToViewPage() {
    return this.router.navigate(['vizualizare']);
  }

  goToAddPage() {
    return this.router.navigate(['adauga']);
  }

  goToStatisticsPage() {
    return this.router.navigate(['statistici']);
  }

}
