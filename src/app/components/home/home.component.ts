import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";

@Component({
  selector: 'app-home',
  imports: [AboutStartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
