import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}
  
  private usuarioLogado = false;

  login(username: string, password: string): boolean {
    const usuario = Cliente.find(cliente => cliente.login === username && cliente.senha === password);

    if (usuario) {
      this.usuarioLogado = true;
      return true;
    } else {
      this.usuarioLogado = false;
      return false;
    }
  }
}
