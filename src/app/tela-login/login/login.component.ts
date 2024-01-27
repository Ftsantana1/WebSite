import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: LoginService) {}

  usuario: string = '';
  senha: string = '';

  exibirModalCadastro = false;

  ngOnInit(): void {}

  login(usuario: string, senha: string): void {
    const usuarioAutenticado = this.service.login(usuario, senha);

    if (usuarioAutenticado) {
      //this.router.navigate(['/tela-principal']);
      this.router.navigate(['/tela-construcao']);
      
    } else {
      window.alert('Usuário ou senha incorretos');
      this.usuario = '';
      this.senha = ''; 
    }
  }

abrirCadastro(): void {
  this.exibirModalCadastro = true;
}

fecharCadastro(): void {
  this.exibirModalCadastro = false;
}
}