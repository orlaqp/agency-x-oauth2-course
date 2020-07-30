import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'agency-x-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {
    menuItems = [
        // { id: 'add', icon: 'add', text: 'Add', route: '/add/item' },
        { id: 'dashboard', icon: 'dashboard', text: 'Dash', route: '/home/dashboard' },
        { id: 'people', icon: 'people', text: 'Clients', route: '/home/clients' },
        { id: 'calendar', icon: 'insert_invitation', text: 'Calendar', route: '/home/calendar' },
        { id: 'payments', icon: 'attach_money', text: 'Payments', route: '/home/payments' },
        { id: 'settings', icon: 'settings_input_component', text: 'Settings', route: '/home/settings' }
    ]

    profileItem = { id: 'profile', icon: 'portrait', text: 'Profile', route: '/home/profile' };

    addActions = [
        { id: 'addCustomer', icon: 'people', text: 'Client', route: '/home/clients/add' },
        { id: 'addPayment', icon: 'attach_money', text: 'Payment', route: '/home/payments/add' },
        { id: 'addAppointment', icon: 'insert_invitation', text: 'Appointment', route: '/home/calendar/add' }
    ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(item) {
    // this.router.navigateByUrl(item.route);
  }

}
