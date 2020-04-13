import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService ) { 

    this._activatedRoute.params.subscribe( params => {
        this.heroe = this._heroeService.getHeroe(params['id']-1);
        console.log('Listar heroe');
        console.log(this.heroe);
    })


  }

}
