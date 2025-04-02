import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import { Router } from '@angular/router';
import { Launch } from '../model/launch.model';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';


@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HttpClientModule,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  launchData: Launch[] = [];
  launchYearData: Launch[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(data => {
        this.launchData = data;
        this.launchYearData = data;
      });
  }

  goToDetails(flightNumber: number): void {
    this.router.navigate(['/details', flightNumber]);
  }

  onYearChanged(year: string): void {
    if (!year) {
      this.launchYearData = this.launchData;
    } else {
      this.launchYearData = this.launchData.filter(m => m.launch_year === year);
    }
  }
}
