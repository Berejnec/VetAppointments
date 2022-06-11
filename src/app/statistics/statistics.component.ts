import {Component, OnInit, ViewChild} from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTheme,
  ApexTitleSubtitle,
  ChartComponent
} from "ng-apexcharts";
import {APPOINTMENTS} from "../mock-data/appointment.data";
import {IAppointment} from "../models/appointment.model";
import {NavigationService} from "../services/navigation.service";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: any;
  fontFamily: any;
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fontFamily: any;
};

export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  fontFamily: any;
};

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
  public chartOptions3!: Partial<ChartOptions2> | any;

  constructor(private appointmentService: AppointmentService, private navigationService: NavigationService) {
    this.chartOptions = {
      series: [3, 5, 6, 1],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ['Caine', 'Pisica', 'Iepure', 'Broasca Testoasa'],
      title: {
        text: 'Distributia animalelor per programari'
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

    this.chartOptions2 = {
      series: [5, 8, 2],
      chart: {
        width: "100%",
        type: "pie"
      },
      labels: [
        "Creata",
        "Confirmata",
        "Incheiata",
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      title: {
        text: "Statusul programarilor"
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
      series: [2, 7, 5, 1],
      chart: {
        width: 380,
        type: "donut"
      },
      labels: ['Mai', 'Iunie', 'Iulie', 'August'],
      title: {
        text: 'Statistici progamari pe luni'
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

  animals!: string[];

//     findOccurences(arr: Array<IAppointment>, key: string) {
//     let animalCounter = [];
//     this.appointmentService.getAppointments().subscribe(appointments => this.animals = appointments.map(appointment => appointment.animal));
//     this.animals.forEach((animal) => {
//       if(this.animals.some((val)=>{ return val[key] == animal[key] })){
//
//         // If yes! then increase the occurrence by 1
//         this.animals.forEach((k)=>{
//           if(k[key] === animal[key]){
//             animalCounter[animal]++;
//           }
//         })
//
//       }else{
//         // If not! Then create a new object initialize
//         // it with the present iteration key's value and
//         // set the occurrence to 1
//         let a = {}
//         a[key] = x[key]
//         a["occurrence"] = 1
//         arr2.push(a);
//       }
//   }
//
// }
  goToHomePage() {
    return this.navigationService.goToHomePage();
  }
}
