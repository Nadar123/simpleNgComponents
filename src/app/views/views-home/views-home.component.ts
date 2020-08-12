import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  data = [
    {label: 'Faves', value: 22},
    {label: 'Views', value: 31200},
    {label: 'Members' , value: 1285}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
