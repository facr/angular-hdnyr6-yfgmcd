import { Component, Input } from '@angular/core';
import { Service } from '../services';

@Component({
  selector: 'app-services-sharing',
  templateUrl: './services-sharing.component.html',
  styleUrls: ['./services-sharing.component.css']
})
export class ServicesSharingComponent {
 
  
  @Input() service!: Service;

}
