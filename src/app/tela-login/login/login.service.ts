import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}
  
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    const user = Cliente.find(cliente => cliente.login === username && cliente.senha === password);

    if (user) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
