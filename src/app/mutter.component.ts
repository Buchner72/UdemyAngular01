import { Component } from '@angular/core';

@Component({
  selector: 'app-mutter',
  template: `
   <h1>
    {{title}}
   </h1>
  `,
  styles: []
})
export class MutterComponent {
  title: string  ;

  constructor() {
    this.title = 'Hallo Welt!';
    setTimeout(() => {
     this.title = '123!';
    }, 2500);

  }
}

