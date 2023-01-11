import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  newList = [];
  @ViewChild('list')
  list!: ElementRef;

  pokemons: any[] = [];

  /**
   * 
   * @param dataService 
   * @param viewContainer 
   * @param elementRef 
   */
  constructor(
    private dataService: DataService,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  ) {
    console.log(viewContainer);
  }

  /**
   * 
   */
  ngOnInit(): void {
    this.dataService.getPokemon().subscribe((data: any) => {
      data.results.forEach((pokemon: any) => {
        this.dataService
          .getPokemonDetails(pokemon.name)
          .subscribe((data: any) => {
            this.pokemons.push(data);

            this.list.nativeElement.style.backgroundColor = 'red';
            this.elementRef.nativeElement.style.backgroundColor = 'blue';
            console.log(this.list);
            console.log(this.newList);
            console.log(this.elementRef);

            console.log(this.viewContainer);
          });
      });
    });
  }
}
