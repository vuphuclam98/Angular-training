import { Component, Injectable } from '@angular/core';
import { LoggerServiceComponent } from '../logger-service/logger-service.component';

@Injectable()

@Component({
  selector: 'app-product-service',
  templateUrl: './product-service.component.html',
  styleUrls: ['./product-service.component.scss'],
  providers: [LoggerServiceComponent]
})
export class ProductServiceComponent {
  constructor(private loggerService: LoggerServiceComponent) {
      this.loggerService.log("Product Service Constructed");
  } 

  public getProducts() {
 
    this.loggerService.log("getProducts called2");

    return ['1','2', '3'];               
  }
}
