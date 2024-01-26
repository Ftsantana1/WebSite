import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private registroData: any[] = [];

  registroDeUsuario(data: any): void {
    this.registroData.push(data);
  }

  recuperarRegistro(): any[] {
    return this.registroData;
  }
}
