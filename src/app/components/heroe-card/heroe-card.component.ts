import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  verHeroe(id: number){
    console.log(id);
  }

}
