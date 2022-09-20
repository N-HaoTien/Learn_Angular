import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeopleComponent } from './people/people.component';
import { TestComponent } from './test/test.component';


// thiết lập Các routing với nhau
//router-outlet

const routes: Routes = [
  {path:"test" , component : TestComponent}, // Test component
  {path:"home" , component : HomeComponent}, // Homecomponent
  {path:"people" , component : PeopleComponent},
  {path:"category" , component : CategoryComponent},
  {path:"account" , component : AccountComponent},
  {path:"login" , component : LoginComponent},
  {path:'' , component : LoginComponent},
  {path:"**" , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
