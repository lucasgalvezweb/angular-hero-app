import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {

  heroesBusq: Heroe[] = [];
  terminoBusq: string;

  constructor( private _heroService: HeroesService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.terminoBusq = params['termino'];
      this.heroesBusq = this._heroService.buscarHeroes( params['termino'] );
      console.log(this.heroesBusq);
    })
  }

  verHeroe(id: number){
    this._router.navigate(['/heroe', id]);
  }

}
