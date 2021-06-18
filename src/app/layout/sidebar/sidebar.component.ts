import {Component, Input, OnInit, Output, EventEmitter, HostListener} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input("isSidebarToggled")
  visible: boolean;

  @Output("isSidebarToggled")
  visibleEmitter = new EventEmitter<boolean>();

  items: MenuItem[] = [];



  constructor() {
  }

  hideSidebar() {
    this.visible = false;
    this.visibleEmitter.emit(false);
  }

  showSidebar() {
    this.visible = true;
    this.visibleEmitter.emit(true);

  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['/dashboard'],
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Magazines & Books',
        icon: 'pi pi-fw pi-bookmark',
        routerLink: ['/e-books'],
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: ['/orders'],
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Subscriptions',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: ['/subscriptions'],
        routerLinkActiveOptions: {exact: true},
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Admins',
            icon: 'pi pi-fw pi-user-plus',
            routerLink: ['/admins'],
            routerLinkActiveOptions: {exact: true},
          },
          {
            label: 'Editors',
            icon: 'pi pi-fw pi-user-edit',
            routerLink: ['/editors'],
            routerLinkActiveOptions: {exact: true},
          },
          {
            label: 'Customers',
            icon: 'pi pi-fw pi-users',
            routerLink: ['/customers'],
            routerLinkActiveOptions: {exact: true},
          }
        ]
      }
    ]
  }


}
