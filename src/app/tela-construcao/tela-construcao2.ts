import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-tela-construcao',
    templateUrl: './tela-construcao2.html',
    styleUrls:[ './tela-cosntrucao2.scss']
  })
  export class TelaConstrucao2Component {
    constructor(private router: Router) {}

    botaoVoltar(): void {
      this.router.navigate(['/tela-login']);
    }
  }