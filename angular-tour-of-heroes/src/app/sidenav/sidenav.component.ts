import { Component,  ViewEncapsulation , Input} from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SidenavComponent {
  showFiller = false;
  heroes = HEROES;
  
  
  selectedHero: Hero | undefined;

  

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  

  }
  @Input() hero?: Hero;

  updateHeroName(newName: string): void {
    if (this.hero) {
      this.hero.name = newName;
    }
  }
}

