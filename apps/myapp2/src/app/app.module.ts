import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
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