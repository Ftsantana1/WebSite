import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  darkMode = false;
  ngOnInit(): void {}

  botaoParaTrocaTemaDeFundo(): void {
    this.darkMode = !this.darkMode;
  }
}
