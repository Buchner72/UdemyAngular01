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

// Ich denke Bootstrap4 muss gar nicht seperat installiert werden, aber falls doch:
// 2. npm install bootstrap jquery popper  -> für Bootstrap 4 ()
