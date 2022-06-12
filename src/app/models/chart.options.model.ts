import {
  ApexChart,
  ApexDataLabels, ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  legend: ApexLegend;
  labels: any;
  fontFamily: any;
};

export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  fontFamily: any;
};

export type ChartOptions3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  fontFamily: any;
};
