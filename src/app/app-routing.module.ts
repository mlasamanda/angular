import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
  { path: 'login', component: LogincompComponent },
  { path: 'signup', component: RegistercompComponent },
  { path:'navbar',component:NavbarComponent }
];
@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponent=[LogincompComponent,RegistercompComponent,NavbarComponent]