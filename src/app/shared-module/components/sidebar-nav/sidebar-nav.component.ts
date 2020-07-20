import { ContentComponent } from './../content/content.component';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css']
})
export class SidebarNavComponent implements OnInit {

  @ViewChild(ContentComponent) ContentComponent: ContentComponent;

  constructor() { }

  ngOnInit(): void {
  }
  changeContent(data) {
    console.log(data);
    this.ContentComponent.ChangeComponent(data);
  }

}
