import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {APPOINTMENTS} from "../../mock-data/appointment.data";
import {Router} from "@angular/router";
import {IAppointment} from "../../models/appointment.model";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {MatSort, MatSortable} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {formatDate} from "@angular/common";
import {NavigationService} from "../../services/navigation.service";
import {of} from "rxjs";
import {AppointmentService} from "../../services/appointment.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'animal', 'dateTime', 'doctorName', 'diagnosis', 'status', 'edit'];
  // dataSource = new MatTableDataSource(APPOINTMENTS);
  dataSource!: MatTableDataSource<IAppointment>;

  changeDate(date: Date) {
    return formatDate(date.toDateString(), 'dd-MM-yyyy', '+0430')
  }

  @ViewChild(MatTable) table!: MatTable<IAppointment>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router,
              private navigationService: NavigationService,
              private appointmentService: AppointmentService) {
  }


  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => this.dataSource = new MatTableDataSource<IAppointment>(appointments));
  }

  goToAdd() {
    return this.router.navigate(['adauga']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.sort.sort(({ id: 'dateTime', start: 'desc'}) as MatSortable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'dateTime': return new Date(item.dateTime).getTime();
        default: return item[property as keyof IAppointment] as string;
      }
    };
  }

  goToEditPage() {
    return this.router.navigate(['editeaza']);
  }

  goToHomePage() {
    this.navigationService.goToHomePage().then();
  }

  gotToAppointment(appointment: IAppointment): Promise<boolean> {
    return this.navigationService.openCustomer(appointment.id);
  }

  refresh() {
    this.appointmentService.getAppointments().subscribe((appointments: IAppointment[]) => {
      this.dataSource.data = appointments;
    })
  }
}
