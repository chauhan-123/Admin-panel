import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  state: boolean;
  constructor(private layoutService: LayoutService) {
    this.sidemenuState();
   }

  ngOnInit() {
  }

  sidemenuState() {
    this.layoutService.menuState.subscribe(state => {
      this.state = state;
    })
  }

}
