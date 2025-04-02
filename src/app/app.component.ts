import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MissionlistComponent} from './missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101437253-lab-test2-comp3133';
}
