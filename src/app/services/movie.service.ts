import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

constructor() { }

}


export interface MovieModel {
  name: string;
  author: string;
}
