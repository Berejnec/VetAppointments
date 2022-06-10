import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHomePage() {
    return this.router.navigate(['acasa']);
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
