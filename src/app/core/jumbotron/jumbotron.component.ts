import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input()
  Titolo: string = "";
  @Input()
  Sottotitolo: string = "";
  @Input()
  show: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
