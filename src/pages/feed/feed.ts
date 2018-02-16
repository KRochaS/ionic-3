import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  objeto_feed = {
    titulo: "Karine Rocha",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine",
    qtd_likes: 12,
    qtd_comments: 4,
    time_coment: "11h ago"
  }

  public listaFilmes = new Array<any>();

  nomeUsuario: string = "Karine Rocha Código";

  
  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private movieProvider: MovieProvider
    ) {
  }
  soma(n1: number, n2: number) {
    alert( n1+n2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
	// this.soma(1,2);
	this.movieProvider.getLatestMovies().subscribe(
		data => {
			const response = (data as any); // transformou a resposta em um objeto de qualquer tipo para pegar qualquer valor de dentro
			const objeto_retorno = JSON.parse(response._body); // transformou em JSON.parse  para transformar o que seria um texto em JSON.
			this.listaFilmes = objeto_retorno.results;
			console.log(objeto_retorno);
		}, error => {
			console.log(error);
		})
	}
}

