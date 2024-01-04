import { Component } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent {
  nome: string = "";
  email: string = "";
  descrizione: string = "";
  inviaIdea: boolean = false

  inviaRichiesta() {
    let mailtoLink = `mailto:marcoalbertomazzotti@gmail.com?subject=Richiesta da ${this.nome}&body=${this.descrizione}`;
    window.location.href = mailtoLink;
    this.nome = ""
    this.email = ""
    this.descrizione = ""
    setTimeout(() => {
      this.inviaIdea = true;
    }, 3000);
    setTimeout(() => {
      this.inviaIdea = false;
    }, 10000);
  }
}
