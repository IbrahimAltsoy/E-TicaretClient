import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BaseComponent } from './base/base.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // BrowserDynamicTestingModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    HttpClientModule
  ],
  providers: [
    {provide: "baseUrl", useValue: "https://localhost:7238/api", multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
