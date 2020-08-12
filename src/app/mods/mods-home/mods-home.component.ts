import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'accordation title 1', content:'some exta content below'},
    {title: 'accordation title 2', content:'some exta content below'},
    {title: 'accordation title 3', content:'some exta content below'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  openModal() {
    this.modalOpen = !this.modalOpen;
  }

}
