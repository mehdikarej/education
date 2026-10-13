import { Component } from '@angular/core';
import { AboutStartComponent } from "../about-start/about-start.component";
import { UsersTableComponent } from "../users-table/users-table.component";
import { CoursesTableComponent } from "../courses-table/courses-table.component";
import { ClasseTableComponent } from '../classe-table/classe-table.component';

@Component({
  selector: 'app-admin',
  imports: [AboutStartComponent, UsersTableComponent, CoursesTableComponent,ClasseTableComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
