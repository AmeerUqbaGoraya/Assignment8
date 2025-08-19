# Contact Card Dashboard

A simple Angular Contact Card Dashboard demonstrating @Input, @Output, event/property binding, and lifecycle hooks.

## Features Implemented

✅ **Two-Panel Layout**: Left panel for filters and contact list, right panel for contact details
✅ **50 Mock Contacts**: All with id, name, phone, email, gender, address, and groups
✅ **Filter Buttons**: All, Favourites, Family, Friends, Classmates
✅ **Contact Selection**: Click any contact to view details
✅ **Group Management**: Add/Remove contacts from any group with immediate updates
✅ **Real-time Updates**: Changes reflect instantly in filtered lists
✅ **Lifecycle Hooks**: OnInit and OnDestroy implemented
✅ **No Text Inputs**: Button-only interface
✅ **State Management**: Parent component owns all data, children communicate via events

## Technical Requirements Met

- **Event Binding**: All user interactions use (click) events
- **Property Binding**: Visual states using [class.active] and [class.selected]
- **State Up, Data Down**: Single component manages all state
- **Lifecycle Hooks**: ngOnInit and ngOnDestroy demonstrated

## Running the Application

```bash
yarn install
yarn start
```

The application will be available at http://localhost:4200

## Usage

1. **Filter Contacts**: Click filter buttons to show contacts by group
2. **Select Contact**: Click any contact card to view full details
3. **Manage Groups**: Use toggle buttons in details panel to add/remove from groups
4. **See Updates**: Changes are immediately reflected in filtered lists
