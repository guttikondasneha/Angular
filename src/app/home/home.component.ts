import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userIn:String;
  constructor() { }

  ngOnInit() {
  }

}
