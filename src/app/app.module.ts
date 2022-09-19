import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { OnSalePipe } from './on-sale.pipe';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TestObservablesComponent } from './test-observables/test-observables.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    OnSalePipe,
    HomeComponent,
    TestObservablesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[

  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
