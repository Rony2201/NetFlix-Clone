import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filmes',
  templateUrl: './card-filmes.component.html',
  styleUrls: ['./card-filmes.component.css']
})
export class CardFilmesComponent implements OnInit {

  @Input()
  titleCards:string = "";

  constructor() { }
  ngOnInit(): void {
    
  }

}
