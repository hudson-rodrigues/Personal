import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  public body: any;
  public mode = false;

  ngOnInit(): void {
    this.body = true;
  }

  change() {
    const dark = document.querySelector('body');
    const mode = document.querySelector('mode-text');
    console.log('testando');
    console.log(dark);
    dark?.classList.add('dark');
  }

  toogle() {
    if(this.body) {
      this.body = false;
    } else {
      this.body = true;
    }
    console.log(this.body);
  }

}
