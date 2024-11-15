import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-main',
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit{

  paragraph:string = "Over more than a decade, Jeffrey Dahmer slaughtered 17 teenage boys and young men before he was charged.How did he evade law enforcement for so long?"
  paragraphContent:string = "#1 in TV Shows Today"
  textSubtitle: string = " #1 in TV Shows Today"


  constructor() { }
  ngOnInit(): void {
    
  }
}
