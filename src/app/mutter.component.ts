import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mutter",
  template: `
    <div class="container">
      <div class="bs-docs-example">
        <!--styles.css-->
        <div class="alert alert-success" role="alert">
          <strong>mutter.component!</strong>
        </div>
        <h1>
          {{ title }}
        </h1>
        <div class="container">
          <div class="row">
            <div class="col-1">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Eltern
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">ledig</a>
                  <a class="dropdown-item" href="#">verheiratet</a>
                  <a class="dropdown-item" href="#">Lebensgemeinschaft</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Anzahl der Kinder
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">1</a>
                  <a class="dropdown-item" href="#">2</a>
                  <a class="dropdown-item" href="#">3</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <app-kind [aString]="'Kind 1'"></app-kind>
            </div>
            <div class="col-sm">
              <app-kind [aString]="'Kind 2'"></app-kind>
            </div>
            <div class="col-sm">
              <app-kind [aString]="'Kind 3'"></app-kind>
            </div>
            <div class="col-sm">
              <app-kind [aString]="'Kind 4'"></app-kind>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MutterComponent implements OnInit {
  aString = "Ich bin eine string [Property Binding]";
  title: string;

  constructor() {
    this.title = "Hallo Welt!";
    setTimeout(() => {
      // Schreibweide: Innerhalb dieser Funktion soll das 'this' von aussen erhaten bleiben
      this.title = "2,5 Sekunden sind vorbei";
    }, 2500);
  }
  ngOnInit() {}
}

// So wurde diese Componet erstellt
// ng g c mutter --flat -is -it --spec false
