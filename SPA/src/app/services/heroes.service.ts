import { Injectable } from '@angular/core';
import { HeroesArray } from 'assets/array/heroes.array';

@Injectable()
export class HeroesService {
  private heroes:Heroe[] = HeroesArray
  constructor() {
    console.log('Servicio listo para usar!!!');
  }

  getHeroes():Heroe[]{
    return this.heroes;
  }
}
export interface Heroe{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  casa:string;
}