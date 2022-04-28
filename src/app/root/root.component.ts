import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})

export class RootComponent implements OnInit {

  titolo: string = "Questo è il titolo";
  sottotitolo: string = "Questo è il sottotitolo";

  constructor() { }

  ngOnInit(): void {
  }

}
