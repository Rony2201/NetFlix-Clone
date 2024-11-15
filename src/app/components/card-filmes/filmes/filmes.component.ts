import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit{

  @Input()
  imageCard:string = "";

  constructor () { }
  ngOnInit(): void {
    
  }

}
