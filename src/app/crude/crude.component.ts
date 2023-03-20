import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-crude',
  templateUrl: './crude.component.html',
  styleUrls: ['./crude.component.css']
})
export class CrudeComponent extends NavbarComponent implements OnInit{
  constructor( public router:Router){
  super();
  }
ngOnInit():void{

}
}
