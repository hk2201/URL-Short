import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgTinyUrlModule } from 'ng-tiny-url';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgTinyUrlModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
