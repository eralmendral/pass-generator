import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';

  length = 0;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onChangeLength(length: string): void {
    this.length = Number(length);
  }

  onChangeLetters(): void {
    this.useLetters = !this.useLetters;
  }

  onChangeNumbers(): void {
    this.useNumbers = !this.useNumbers;
  }

  onChangeSymbols(): void {
    this.useSymbols = !this.useSymbols;
  }

  generatePass(): void {
    if (length > 15) {
      length = 15;
    }

    const numbers = '12345677890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.useLetters) {
      validChars += letters;
    }

    if (this.useNumbers) {
      validChars += numbers;
    }

    if (this.useSymbols) {
      validChars += symbols;
    }

    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index]
    }

    this.password = generatePassword;
  }

}
