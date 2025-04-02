import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';
import { Launch } from '../model/launch.model';


@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './missionlist.component.html',
  styleUrl: './missionlist.component.css'
})
export class MissionlistComponent implements OnInit {
  launchData: Launch[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches')
      .subscribe(data => {
        this.launchData = data;
      });
  }
}
