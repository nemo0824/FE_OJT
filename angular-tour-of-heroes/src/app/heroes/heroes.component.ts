import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  // selectedHero?: Hero;
  @Input() selectedHero: Hero | undefined;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  

  }
}
