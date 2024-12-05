import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { HeaderComponent } from './header/header.component';


import { BarChartComponent } from './bar-chart/bar-chart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RolesComponent, HeaderComponent,BarChartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected property name
})
export class AppComponent {
  title = 'Welcome to DAP';
}
