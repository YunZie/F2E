import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'F2E';
  succdata;
  faildata;

  constructor(
  private appService: AppService
  ) {
        this.succdata = appService.getData([1,2]);
        this.faildata = appService.getData([3,4]);
    }
}
