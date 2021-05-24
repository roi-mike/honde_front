import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barre-de-navigation',
  templateUrl: './barre-de-navigation.component.html',
  styleUrls: ['./barre-de-navigation.component.scss']
})
export class BarreDeNavigationComponent implements OnInit {


  autorisation = true; /* detection de connexion */
  compassclick = false; /* detection de connexion */
  hearclick = false; /* detection de connexion */
  imgpersonneclick = false; /* detection de connexion */

  constructor() { }

  onclickcompass(): void{
    this.compassclick = true ;
  }
  onclickhear(): void{
    if (this.imgpersonneclick){
      this.imgpersonneclick = false;
    }
    this.hearclick = !this.hearclick ;
    console.log(this.hearclick);
  }

  onclickimgpersonne(): void{
    if (this.hearclick){
      this.hearclick = false;
    }
    this.imgpersonneclick = !this.imgpersonneclick;
  }

  ngOnInit(): void {
  }

}
