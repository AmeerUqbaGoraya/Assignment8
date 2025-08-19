import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="contact; else noSelection" class="contact-details">
      <h2>{{ contact.name }}</h2>
      <p><strong>Phone:</strong> {{ contact.phone }}</p>
      <p><strong>Email:</strong> {{ contact.email }}</p>
      <p><strong>Gender:</strong> {{ contact.gender }}</p>
      <p><strong>Address:</strong> {{ contact.address }}</p>
      
      <h3>Groups</h3>
      <div class="group-toggles">
        <button 
          *ngFor="let group of availableGroups"
          [class.active]="isInGroup(group)"
          (click)="onToggleGroup(group)">
          {{ isInGroup(group) ? 'Remove from' : 'Add to' }} {{ group }}
        </button>
      </div>
      
      <h4>Current Groups:</h4>
      <span *ngFor="let group of contact.groups" class="group-badge">{{ group }}</span>
      <span *ngIf="contact.groups.length === 0" class="no-groups">No groups assigned</span>
    </div>
    <ng-template #noSelection>
      <div class="no-selection">
        <p>Select a contact to view details</p>
      </div>
    </ng-template>
  `,
  styles: [`
    .contact-details h2 {
      margin-bottom: 20px;
      color: #333;
    }

    .contact-details p {
      margin-bottom: 10px;
      font-size: 16px;
    }

    .group-toggles {
      margin: 20px 0;
    }

    .group-toggles button {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 10px 15px;
      border: 1px solid #ddd;
      background: #dc3545;
      color: white;
      cursor: pointer;
      border-radius: 4px;
    }

    .group-toggles button.active {
      background: #28a745;
      color: white;
    }

    .contact-details .group-badge {
      background: #007bff;
      color: white;
      padding: 5px 10px;
      margin-right: 10px;
      border-radius: 4px;
      font-size: 14px;
    }

    .no-groups {
      color: #666;
      font-style: italic;
    }

    .no-selection {
      text-align: center;
      color: #666;
      margin-top: 50px;
    }
  `]
})
export class ContactDetailsComponent implements OnInit, OnChanges {
  @Input() contact: Contact | null = null;
  @Input() availableGroups: string[] = [];
  @Output() groupToggle = new EventEmitter<{contactId: number, group: string}>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  isInGroup(group: string): boolean {
    return this.contact ? this.contact.groups.includes(group) : false;
  }

  onToggleGroup(group: string) {
    if (this.contact) {
      this.groupToggle.emit({
        contactId: this.contact.id,
        group: group
      });
    }
  }
}
