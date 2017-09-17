import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StopwatchComponent } from './stopwatch.component';

@NgModule({
  declarations: [
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [StopwatchComponent]
})
export class AppModule { }
