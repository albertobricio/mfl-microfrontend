import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import { MylibModule, MylibComponent } from "../../../../libs/mylib/src";

@NgModule({
  declarations: [AppComponent, MylibComponent],
  imports: [
    CommonModule,
    MylibModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AppComponent,
      }
    ])
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
