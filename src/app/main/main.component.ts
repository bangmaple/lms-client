import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {SidebarComponent} from "../layout/sidebar/sidebar.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'lms-client';
  items: MenuItem[];

  isSidebarToggled: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.innerWidth <= 640) {
      this.isSidebarToggled = false;
    }
    if (window.innerWidth >= 960) {
      this.isSidebarToggled = true;

    }
  }


  constructor(@Inject(SidebarComponent) public sidebarComp: SidebarComponent) {
    this.isSidebarToggled = true;
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
          {label: 'Open'},
          {label: 'Quit'}
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Delete', icon: 'pi pi-fw pi-trash'},
          {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
        ]
      }
    ];
  }

  ngOnInit(): void {

  }


  isSidebarShown(): boolean {
    return this.sidebarComp.visible;
  }


  toggleSidebar() {
    this.isSidebarToggled = !this.isSidebarToggled;
  }

}
