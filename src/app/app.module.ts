import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MutterComponent } from './mutter.component';
import { KindComponent } from './kind.component';

@NgModule({
  declarations: [
    AppComponent,
    MutterComponent,
    KindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
