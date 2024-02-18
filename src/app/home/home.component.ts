import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { StyleClassModule } from 'primeng/styleclass';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StyleClassModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
