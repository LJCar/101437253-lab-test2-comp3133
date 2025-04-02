import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Launch } from '../model/launch.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrl: './missiondetails.component.css'
})
export class MissiondetailsComponent implements OnInit {
  mission: Launch | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');

    if (flightNumber) {
      this.http
        .get<Launch>(`https://api.spacexdata.com/v3/launches/${flightNumber}`)
        .subscribe((data) => {
          this.mission = data;
        });
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
