import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.scss']
})
export class BarreDeNavigationComponent implements OnInit {

  autorisation = false;

  constructor() { }

  ngOnInit(): void {
  }

}
