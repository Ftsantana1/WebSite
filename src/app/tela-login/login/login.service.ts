import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroService } from 'src/app/registro.service';
import { Cliente } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private registro: RegistroService) {}
  
  private usuarioLogado = false;

  login(username: string, password: string): boolean {
    const registroDeUsuarios = this.registro.recuperarRegistro();
    const usuarioRegistro = registroDeUsuarios.find(usuario => usuario.login === username && usuario.senha === password);

    if (usuarioRegistro) {
      this.usuarioLogado = true;
      return true;
    } else {
      this.usuarioLogado = false;
      return false;
    }
  }
}
