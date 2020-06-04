import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { loadModule } from "./externals-utils";

@NgModule({
  declarations: [AppComponent, SecondComponent],
  imports: [
    CommonModule,
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
      path: 'myapp2',
      loadChildren: () => loadModule('assets/myapp2/bundles/flights-myapp2.umd.min.js')
          .then(g => {
            console.log('Loading myapp2');
            console.log(g.flights);
            return g.flights['myapp2'].AppModule;
          })    }
      ])
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
