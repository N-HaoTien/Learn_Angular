import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestObservablesComponent } from './test-observables/test-observables.component';
import { TestComponent } from './test/test.component';


// thiết lập Các routing với nhau
//router-outlet

const routes: Routes = [
  {path:"test" , component : TestComponent}, // Test component
  {path:"home" , component : HomeComponent}, // Homecomponent
  {path:"test-observables" , component : TestObservablesComponent},

  {path:"**" , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
