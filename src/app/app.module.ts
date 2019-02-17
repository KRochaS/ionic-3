import { PerfilPageModule } from "./../pages/perfil/perfil.module";
import { SobrePageModule } from "./../pages/sobre/sobre.module";
import { ConfiguracoesPageModule } from "./../pages/configuracoes/configuracoes.module";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { FeedPage } from "./../pages/feed/feed";
import { FeedPageModule } from "../pages/feed/feed.module";
import { IntroPageModule } from "../pages/intro/intro.module";

import { StatusBarOriginal } from "@ionic-native/status-bar";
import { SplashScreenOriginal } from "@ionic-native/splash-screen";
import { MovieProvider } from "../providers/movie/movie";
import { LoginPageModule } from "../pages/login/login.module";
import { FilmeDetalhesPageModule } from "../pages/filme-detalhes/filme-detalhes.module";

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedPageModule,
    IntroPageModule,
    HttpModule,
    LoginPageModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage
  ],
  providers: [
    StatusBarOriginal,
    SplashScreenOriginal,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider
  ]
})
export class AppModule {}
