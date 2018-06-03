import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StackedProgressBarComponent} from './stacked-progress-bar/stacked-progress-bar.component'
@NgModule({
  declarations: [
    AppComponent,
    StackedProgressBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
