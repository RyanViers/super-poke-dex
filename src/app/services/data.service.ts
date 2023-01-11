import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  /**
   * 
   * @returns 
   */
  getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=811');
  }

  /**
   * 
   * @param name 
   * @returns 
   */
   getPokemonDetails(name: string) {
     return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
   }
}
