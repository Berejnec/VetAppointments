import {Injectable} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) {
  }

  getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.params[paramName];
  }

  openAppointment(id: string): Promise<boolean> {
    return this.router.navigate(['editeaza', id]);
  }

  openAppointments(): Promise<boolean> {
    return this.router.navigate(['vizualizare']);
  }

  openHomePage(): Promise<boolean> {
    return this.router.navigate(['acasa']);
  }

  openViewPage(): Promise<boolean> {
    return this.router.navigate(['vizualizare']);
  }

  openAddPage(): Promise<boolean> {
    return this.router.navigate(['adauga']);
  }

  openStatisticsPage() {
    return this.router.navigate(['statistici']);
  }
}
