import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MylibComponent} from "./mylib/mylib.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'inner',
        component: MylibComponent,
      }
    ])
  ],
  declarations: []
})
export class MylibModule {}
