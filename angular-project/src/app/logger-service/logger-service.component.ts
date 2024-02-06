import { Component, Injectable } from '@angular/core';

@Injectable()  

@Component({
  selector: 'app-logger-service',
  templateUrl: './logger-service.component.html',
  styleUrls: ['./logger-service.component.scss']
})

export class LoggerServiceComponent {
  log(message:any) {
    console.log(message);
  }
}
