import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TelaPrincipalComponent {
  constructor(private router: Router) {}
  botaoVoltar():void {
    this.router.navigate(['/tela-login']);
  }
}
