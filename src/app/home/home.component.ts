import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppointmentService} from "../services/appointment.service";
import {NavigationService} from "../services/navigation.service";
import {imageObject} from "../models/image.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images!: Array<imageObject>;

  constructor(private router: Router,
              private appointmentService: AppointmentService,
              private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.appointmentService.getImageLinks().subscribe(links => this.images = links);
  }

  goToViewPage() {
    return this.navigationService.openViewPage();
  }

  goToAddPage() {
    return this.navigationService.openAddPage();
  }

  goToStatisticsPage() {
    return this.navigationService.openStatisticsPage();
  }

}
