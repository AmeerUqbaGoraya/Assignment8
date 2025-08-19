import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contacts">
      <div 
        *ngFor="let contact of contacts" 
        class="contact-card"
        [class.selected]="contact.id === selectedContactId"
        (click)="onContactClick(contact)">
        <h3>{{ contact.name }}</h3>
        <p>{{ contact.phone }}</p>
        <div class="groups">
          <span *ngFor="let group of contact.groups" class="group-badge">{{ group }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .contact-card {
      padding: 15px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 4px;
      background: white;
    }

    .contact-card:hover {
      background: #f8f9fa;
    }

    .contact-card.selected {
      background: #e3f2fd;
      border-color: #2196f3;
    }

    .group-badge {
      background: #e9ecef;
      padding: 2px 6px;
      margin-right: 5px;
      border-radius: 3px;
      font-size: 12px;
      display: inline-block;
    }

    .contact-card h3 {
      margin: 0 0 5px 0;
    }

    .contact-card p {
      margin: 0 0 10px 0;
      color: #666;
    }
  `]
})
export class ContactListComponent implements OnInit, OnChanges {
  @Input() contacts: Contact[] = [];
  @Input() selectedContactId: number | null = null;
  @Output() contactSelect = new EventEmitter<Contact>();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onContactClick(contact: Contact) {
    this.contactSelect.emit(contact);
  }
}
