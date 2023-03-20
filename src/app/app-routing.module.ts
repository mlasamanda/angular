import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrudeComponent } from './crude/crude.component';
import { BodyComponent } from './body/body.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: LogincompComponent },
  { path: 'signup', component: RegistercompComponent },
  { path:'navbar',component:NavbarComponent },
  {path : 'crude',component:CrudeComponent},
  { path:'body',component:BodyComponent},
  { path :'library.index' ,component:IndexComponent}
];
@NgModule({

  imports: [CommonModule,RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponent=[LogincompComponent,RegistercompComponent,
  NavbarComponent,CrudeComponent,BodyComponent]