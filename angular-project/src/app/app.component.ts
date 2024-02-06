import { Component, Injectable } from '@angular/core';
import { LoggerServiceComponent } from './logger-service/logger-service.component';
import { ProductServiceComponent } from './product-service/product-service.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggerServiceComponent, ProductServiceComponent]
})
export class AppComponent {
  title = 'angular-project';
}
