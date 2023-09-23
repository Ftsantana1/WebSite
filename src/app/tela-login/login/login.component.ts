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

  ngOnInit(): void {}

  onLogin(username: string, password: string): void {
    const isAuthenticated = this.service.login(username, password);

    if (isAuthenticated) {
      this.router.navigate(['/tela-principal']);
    } else {
      window.alert('Usuário ou senha incorretos');
      this.username = '';
      this.password = ''; 
    }
  }
}
