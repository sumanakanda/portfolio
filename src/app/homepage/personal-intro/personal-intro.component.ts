import {Component} from '@angular/core';

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrl: './personal-intro.component.scss'
})
export class PersonalIntroComponent{
  constructor() {
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/Suman.pdf';
    link.download = 'Suman_Akanda.pdf';
    link.click();
  }
}
