import { Component, OnInit } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  standalone: true,
  imports: [MatButtonToggleModule]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
