import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  year: string = "";

  @Output() yearChanged = new EventEmitter<string>();

  onYearChange(): void {
    this.yearChanged.emit(this.year.trim());
  }

  clearFilter(): void {
    this.year = '';
    this.yearChanged.emit('');
  }

}
