import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './models/contact.model';
import { MOCK_CONTACTS } from './data/mock-contacts';
import { FilterPanelComponent } from './components/filter-panel.component';
import { ContactListComponent } from './components/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FilterPanelComponent, ContactListComponent, ContactDetailsComponent],
  template: `
    <div class="dashboard">
      <h1>Contact Card Dashboard</h1>
      <div class="panels">
        <div class="left-panel">
          <app-filter-panel
            [filters]="filters"
            [activeFilter]="activeFilter"
            (filterChange)="onFilterChange($event)">
          </app-filter-panel>
          <app-contact-list
            [contacts]="filteredContacts"
            [selectedContactId]="selectedContact?.id || null"
            (contactSelect)="onContactSelect($event)">
          </app-contact-list>
        </div>
        <div class="right-panel">
          <app-contact-details
            [contact]="selectedContact"
            [availableGroups]="availableGroups"
            (groupToggle)="onGroupToggle($event)">
          </app-contact-details>
        </div>
      </div>
    </div>
  `,
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  activeFilter: string = 'All';
  filters = ['All', 'Favourites', 'Family', 'Friends', 'Classmates'];
  availableGroups = ['Favourites', 'Family', 'Friends', 'Classmates'];

  ngOnInit() {
    this.contacts = [...MOCK_CONTACTS];
  }

  ngOnDestroy() {
  }

  get filteredContacts(): Contact[] {
    if (this.activeFilter === 'All') {
      return this.contacts;
    }
    return this.contacts.filter(contact => 
      contact.groups.includes(this.activeFilter)
    );
  }

  onFilterChange(filter: string) {
    this.activeFilter = filter;
    this.selectedContact = null;
  }

  onContactSelect(contact: Contact) {
    this.selectedContact = contact;
  }

  onGroupToggle(event: {contactId: number, group: string}) {
    const contact = this.contacts.find(c => c.id === event.contactId);
    if (contact) {
      const groupIndex = contact.groups.indexOf(event.group);
      if (groupIndex > -1) {
        contact.groups.splice(groupIndex, 1);
      } else {
        contact.groups.push(event.group);
      }
      if (this.selectedContact && this.selectedContact.id === event.contactId) {
        this.selectedContact = { ...contact };
      }
    }
  }
}
