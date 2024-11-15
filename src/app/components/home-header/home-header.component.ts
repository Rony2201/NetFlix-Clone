import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit{

  @Input()
  imgProfile: string = "assets/img.svg";
  @Input()
  logoHeader:string = "assets/Vector.svg";
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
