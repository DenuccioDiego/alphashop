import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* Dichiaro e assegno le variabili */
  userID: string = "Nicola";
  password: string = "";

  autenticationNo: boolean = false;
  errorMsg: string = "Spiacenti la password/UserdID è sbagliata";

  /* aggiungere al costruttore varibile private di tipo Router (code injection) */
  constructor(private route: Router) { }

  // metodo che viene chiamato quando si inizializza il componente
  ngOnInit(): void {
  }

  /* Determino il metodo gestAuth. Non restituisce niente e non gli viene passato nessun valore*/
  gestAuth = (): void => {
    console.log(this.userID);

    if (this.userID === "Nicola" && this.password === "1234") {
      this.route.navigate(['home', this.userID]) //passare il parametro userID 
      this.autenticationNo = false;
    } else {
      this.autenticationNo = true;
    }

  }

}
