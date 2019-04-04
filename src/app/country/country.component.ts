import { Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Component,Input} from '@angular/core';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public printValue:String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.printValue = this.route.snapshot.params.userIn;
  }

}
