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

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  exibirModalCadastro = false;

  ngOnInit(): void {}

  login(username: string, password: string): void {
    const usuarioAuth = this.service.login(username, password);

    if (usuarioAuth) {
      this.router.navigate(['/tela-principal']);
    } else {
      window.alert('Usuário ou senha incorretos');
      this.username = '';
      this.password = ''; 
    }
  }

abrirCadastro(): void {
  this.exibirModalCadastro = true;
}

fecharCadastro(): void {
  this.exibirModalCadastro = false;
}
}