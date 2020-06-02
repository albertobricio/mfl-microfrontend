import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { loadModule } from './externals-utils';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'flights',
        loadChildren: () => loadModule('assets/flights-flight-lib.umd.min.js')
            .then(g => {
              console.log('Loading flights');
              return g.flights['flight-lib'].FlightLibModule;
            })
      },
      {
        path: 'myapp',
        loadChildren: () => loadModule('assets/flights-myapp.umd.min.js')
            .then(g => {
                console.log('Loading flights');
                console.log(g.flights);
              return g.flights['myapp'].AppModule;
            })
      },
    // {
    //     path: 'mylib',
    //     loadChildren: () => loadModule('assets/flights-mylibs.umd.min.js')
    //         .then(g => {
    //             console.log('Loading mylib');
    //             console.log(g.flights);
    //             return g.flights['mylibs'].MylibModule;
    //         })
    // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
