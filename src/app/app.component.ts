import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test01';
}


// Nicht vergessen !
// Abbhängigleiten nach laden (dependency injection) nicht bergessen:
// 1. npm install;
// 2. npm install bootstrap jquery popper  -> für Bootstrap 4
