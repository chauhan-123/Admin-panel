import { Component, OnInit , OnDestroy} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  subscription: Subscription;
  
  constructor( public router:Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
  });
   }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
