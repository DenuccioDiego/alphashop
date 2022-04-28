import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  constructor(private route: ActivatedRoute) { }  //code injection 

  //metodo chiamato appena si inizializza il componente
  ngOnInit(): void {

    this.utente = this.route.snapshot.params['userid']; // passo alla varibiale utente il paramentro userid
  }

}
