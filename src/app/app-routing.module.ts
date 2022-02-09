import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessorioComponent } from './views/acessorio/acessorio.component';
import { GameComponent } from './views/game/game.component';
import { HomeComponent } from './views/home/home.component';
import { JogoComponent } from './views/jogo/jogo.component';
import { LancamentoComponent } from './views/lancamento/lancamento.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "acessorio", component: AcessorioComponent},
  { path: "lancamento", component: LancamentoComponent},
  { path: "game", component: GameComponent},
  { path: "jogo", component: JogoComponent},
  { path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
