import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  standalone: true,
   imports: [MatIconModule]
})
export class PageNotFoundComponent {
  constructor() { }
}
