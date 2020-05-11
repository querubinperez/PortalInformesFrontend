import {Component} from '@angular/core';
import {routes} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal-Informes-FrontEnd';
  routes = routes;
}
