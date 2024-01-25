import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent {
  @Output() fechar = new EventEmitter<void>(); // Adiciona este evento de saída

  constructor() {}

  ngOnInit(): void {}

  fecharModal(): void {
    this.fechar.emit();
  }
}
