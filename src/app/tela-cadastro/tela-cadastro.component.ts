import { Component, EventEmitter, Output } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent {
  @Output() fechar = new EventEmitter<void>(); // Adiciona este evento de saída

  constructor(private registro: RegistroService) {}

  nome = '';
  senha = '';
  hide = true;

  registrarUsuario(): void {
    const dadosRegistro = { login: this.nome, senha: this.senha };
    console.log('Chegou aqui?');
    console.log('Oque ta passando aqui?',dadosRegistro);
    this.registro.registroDeUsuario(dadosRegistro);
    this.fecharModal();
  }

  fecharModal(): void {
    this.fechar.emit();
  }
}
