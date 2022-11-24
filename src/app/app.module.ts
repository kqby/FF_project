import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from "@angular/common/http";
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
