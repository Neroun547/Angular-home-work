import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterializeButtonModule } from 'materialize-angular';

import { AppComponent } from './app.component';
import { SlaiderFirstComponent } from './slaider-first/slaider-first.component';
import { SlaiderSecondComponent } from './slaider-second/slaider-second.component';
import { SlaiderThirdComponent } from './slaider-third/slaider-third.component';
@NgModule({
  declarations: [
    AppComponent,
    SlaiderFirstComponent,
    SlaiderSecondComponent,
    SlaiderThirdComponent
  ],
  imports: [
    BrowserModule,
    MaterializeButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
