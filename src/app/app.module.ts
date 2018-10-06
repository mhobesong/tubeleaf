import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {TopnavModule} from './topnav/topnav.module';

const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  	TopnavModule,
  	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
