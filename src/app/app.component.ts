import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {SidebarComponent} from "./layout/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SidebarComponent]
})
export class AppComponent implements OnInit {


    ngOnInit(): void {
    }

}
