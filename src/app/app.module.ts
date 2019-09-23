import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';

import { mainStoreReducer } from  './state/reducers/reducers';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  StoreModule.forRoot({mainStoreReducer})  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
