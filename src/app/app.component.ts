import { Component } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'app-angular';
}
