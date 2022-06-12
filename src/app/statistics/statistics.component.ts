import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {ChartComponent} from "ng-apexcharts";
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {NavigationService} from "../services/navigation.service";
import {ChartOptions, ChartOptions2, ChartOptions3} from "../models/chart.options.model";
import {animate} from "@angular/animations";
import {StatisticsService} from "../services/statistics.service";

export interface IDictionary {
  [index: string]: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  @ViewChild("chart2") chart2!: ChartComponent;
  public chartOptions2!: Partial<ChartOptions2> | any;

  @ViewChild("chart3") chart3!: ChartComponent;
  public chartOptions3!: Partial<ChartOptions3> | any;

  constructor(private appointmentService: AppointmentService,
              private navigationService: NavigationService,
              private statisticsService: StatisticsService) {
    this.chartOptions = {
      series: this.statisticsService.getAnimalsCount(),
      chart: {
        width: 380,
        type: "pie",
        fontFamily: 'Raleway, sans-serif',
        foreColor: 'white'
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "140px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold"
        }
      },
      legend: {
        fontSize: '17px',
        fontWeight: 500
      },
      labels: ['Caine', 'Pisica', 'Broasca Testoasa', 'Iepure', 'Hamster', 'Papagal'],
      title: {
        text: 'Distributia animalelor per programari',
        style: {
          fontSize: '20px',
          fontWeight: 'bold'
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
    };

    this.chartOptions2 = {
      series: [this.statisticsService.getDoneStatusesNumber(), this.statisticsService.getInProgressStatusesNumber()],
      chart: {
        width: "100%",
        type: "pie",
        fontFamily: 'Raleway, sans-serif',
        fontSize: '20px',
        foreColor: 'white'
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          fontFamily: 'Raleway, sans-serif',
          fontWeight: 'bold',
          height: 'auto'
        }
      },
      labels: [
        "Incheiate",
        "In progres",
      ],
      legend: {
        fontSize: '50px',
      },
      theme: {
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Statusul programarilor",
        style: {
          fontSize: '21px',
          fontWeight: 'bold'
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      fontFamily: `'Raleway', sans-serif`
    };

    this.chartOptions3 = {
      series: [3, 8, 3],
      chart: {
        width: 380,
        type: "donut",
        fontFamily: 'Raleway, sans-serif',
        fontWeight: 'bold',
        foreColor: 'white'
      },
      labels: ['Mai', 'Iunie', 'Iulie'],
      title: {
        text: 'Statistici progamari pe luni',
        style: {
          fontSize: '25px',
          fontWeight: 'bold'
        }
      },
      legend: {
        fontSize: '20px',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      fontFamily: `Raleway, sans-serif`
    };
  }

  ngOnInit(): void {
  }

  goToHomePage() {
    return this.navigationService.openHomePage();
  }
}
