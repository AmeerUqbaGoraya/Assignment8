import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="filter-buttons">
      <button 
        *ngFor="let filter of filters" 
        [class.active]="filter === activeFilter"
        (click)="onFilterClick(filter)">
        {{ filter }}
      </button>
    </div>
  `,
  styles: [`
    .filter-buttons {
      margin-bottom: 20px;
    }

    .filter-buttons button {
      margin-right: 10px;
      padding: 10px 15px;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;
      border-radius: 4px;
    }

    .filter-buttons button.active {
      background: #007bff;
      color: white;
    }
  `]
})
export class FilterPanelComponent implements OnInit, OnChanges {
  @Input() filters: string[] = [];
  @Input() activeFilter: string = '';
  @Output() filterChange = new EventEmitter<string>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onFilterClick(filter: string) {
    this.filterChange.emit(filter);
  }
}
