import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kind',
  template: `
  <div class="container">
  <div class="bs-docs-example">
    <!--styles.css-->
    <div class="alert alert-success" role="alert">
      <strong>kind.component!</strong>
    </div> 
  </div>
</div>
  `,
  styles: []
})
export class KindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
