import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'search-heroe/:termino', component: SearchHeroComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
