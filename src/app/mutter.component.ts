import { Component } from "@angular/core";

@Component({
  selector: "app-mutter",
  template: `
    <div class="container">
      <div class="bs-docs-example">  <!--styles.css-->
        <h1>
          {{ title }}
        </h1>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MutterComponent {
  title: string;

  constructor() {
    this.title = "Hallo Welt!";
    setTimeout(() => {
      // Schreibweide: Innerhalb dieser Funktion soll das 'this' von aussen erhaten bleiben
      this.title = "2,5 Sekunden sind vorbei";
    }, 2500);
  }
}

// So wurde diese Componet erstellt
// ng g c mutter --flat -is -it --spec false
