import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'razroo-fully-architected-dashboard-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @HostBinding('class') class;

  constructor() { }

  ngOnInit(): void {
  }

}
