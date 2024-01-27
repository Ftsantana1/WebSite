import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tela-login/login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal/tela-principal.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaConstrucaoComponent } from './tela-construcao/tela-construcao.component';
import { TelaConstrucao2Component } from './tela-construcao/tela-construcao2';

const routes: Routes = [
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' }, // Redirecionar para a página de login por padrão
  { path: 'tela-login', component: LoginComponent }, // Rota para a página de login
  { path: 'tela-principal', component: TelaPrincipalComponent }, // Rota para a tela principal após o login
  { path: 'tela-cadastro', component: TelaCadastroComponent }, // Rota para a tela de cadastro
  { path: 'tela-construcao', component: TelaConstrucaoComponent }, // Rota para a tela de loading após o login
  { path: 'tela-construcao2', component: TelaConstrucao2Component }, // Rota para a tela de manutenção após o login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
