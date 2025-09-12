import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { App } from './app';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  // App
  ],
  // bootstrap: [App]
})
export class AppModule {}
