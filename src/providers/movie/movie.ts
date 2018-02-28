import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import 'rxjs/add/operator/map';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3/"

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
/**
 * Busca os últimos filmes da api
 * @param page 
 */
  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `movie/popular?page=${page}&api_key=` + this.getApiKey());
  }
  
/**
 * busca o id para retornar o detalhe do filme
 * 
 * @param filmeid id do filme
 */
  getMovieDetails(filmeid) {
    return this.http.get(this.baseApiPath + `movie/${filmeid}?api_key=` + this.getApiKey());
  }


  getApiKey(): string{

    return "5e16d09ddb84044ffd8a8649ffbb611c";

  }
}
