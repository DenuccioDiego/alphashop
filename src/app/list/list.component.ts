import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: IArticoli[] = [
    { id: 1, price: 15, description: 'acqua e limone1', qty: 2, available: true, data: new Date() },
    { id: 2, price: 12, description: 'acqua e limone2', qty: 3, available: false, data: new Date() },
    { id: 3, price: 157, description: 'acqua e limone3', qty: 6, available: false, data: new Date() },
    { id: 4, price: 11, description: 'acqua e limone4', qty: 15, available: false, data: new Date() },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
