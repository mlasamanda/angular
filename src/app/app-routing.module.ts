import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';



const routes: Routes = [
  { path: "sigin", component: LogincompComponent },
  { path: "signup", component: RegistercompComponent },
];
@NgModule({

  imports: [
    CommonModule,
   RouterModule.forRoot(routes)],

   exports: [RouterModule],
})
export class AppRoutingModule { }
