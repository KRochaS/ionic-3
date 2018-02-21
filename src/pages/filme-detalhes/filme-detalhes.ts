import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [MovieProvider]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public MovieProvider: MovieProvider
  ) {
  }
  ionViewDidEnter() {
    this.filmeid = this.navParams.get("id"); // navParams pega todos os parametros que foram enviadas para página
    this.MovieProvider.getMovieDetails(this.filmeid).subscribe(data => {
      let retorno = (data as any)._body; // transforma o data em qualquer coisa para poder pegar o conteúdo
      this.filme = JSON.parse(retorno); // converter para Json para funcionar na página
    }, error => {
        console.log(error)
    })
   
  }
  
  
}
