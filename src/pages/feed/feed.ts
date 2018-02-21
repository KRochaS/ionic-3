import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public page = 1;

  nomeUsuario: string = "Karine Rocha Código";
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
    ) {
  }

  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  soma(n1: number, n2: number) {
    alert( n1+n2);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;
    this.carregarFilmes();


    
  }

    ionViewDidEnter() { // didEnter sempre que ele entra na página
      this.carregarFilmes();
    }

    abrirDetalhes(filme) {
      console.log(filme);
      this.navCtrl.push(FilmeDetalhesPage, {id: filme.id}); // na função .push é possível usar dois parametros
      // 1º Página, 2º um objeto que manda os dados para pagina
    }

    doInfinite(infiniteScroll) {
      this.page++; // adiciona mais uma página
      this.infiniteScroll = infiniteScroll;
      this.carregarFilmes(true);

    }

    carregarFilmes(newpage: boolean = false) {
      this.abreCarregando();
      console.log('ionViewDidLoad FeedPage');
    // this.soma(1,2);
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any); // transformou a resposta em um objeto de qualquer tipo para pegar qualquer valor de dentro
        const objeto_retorno = JSON.parse(response._body); // transformou em JSON.parse  para transformar o que seria um texto em JSON.


        // carregando infinite scroll dos filmes no feed
        if(newpage) {
          this.listaFilmes = this.listaFilmes.concat(objeto_retorno.results);
          this.infiniteScroll.complete();
        } else {
          this.listaFilmes = objeto_retorno.results;
        }

        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}

