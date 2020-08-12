import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'Dan', age: 29, job: 'Dancer'},
    {name: 'Ran', age: 39, job: 'teacher'},
    {name: 'Gal', age: 49, job: 'Designer'}
  ];
  headers = [
    {key: ' Name', label: 'Name'},
    {key: 'Age', label: 'Age'},
    {key: 'Job', label:'  Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
