import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { MylibModule } from "../libs/mylib/src/index";

@NgModule({
  declarations: [AppComponent, SecondComponent],
  imports: [
    CommonModule,
    MylibModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: AppComponent,
    },
    {
      path: 'al',
      component: SecondComponent,
    },
    {
      path: 'mylib',
      loadChildren: () => import('../libs/mylib/src/index').then(m => m.MylibModule)
    }
      ])
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
