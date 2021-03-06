import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kind',
  template: `
    <div class="container">
      <div class="bs-docs-example">
        <!--styles.css-->
        <div class="alert alert-success" role="alert">
          <strong>kind.component!</strong>
          <h2>Ein Erwachsener mit:</h2>
          <div class="card" style="width: 18rem;">
            <img
              class="card-img-top"
              src="assets/img/muki-FamilyPlus-578x384.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{aString}}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class KindComponent implements OnInit {
  @Input()  aString: string;
  kind = 'Kind 1';
  constructor() {
  }

  ngOnInit() {}
}
