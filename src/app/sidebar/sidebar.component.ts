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
    const dark: any = document.querySelector('body');
    const mode: any = document.querySelector('.mode-text');

    if(dark?.classList.contains('dark')){
      mode.innerHTML = "Dark mode";
      dark?.classList.remove('dark');
    }
    else {
      mode.innerHTML = "Light mode";
      dark?.classList.add('dark');
    }
  }

  toogle() {
    if(this.body) {
      this.body = false;
    } else {
      this.body = true;
    }
  }

}
