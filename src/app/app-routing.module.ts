import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './tela-login/login/login.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal/tela-principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'tela-login', pathMatch: 'full' }, // Redirecionar para a página de login por padrão
  { path: 'tela-login', component: LoginComponent }, // Rota para a página de login
  { path: 'tela-principal', component: TelaPrincipalComponent }, // Rota para a tela principal após o login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
