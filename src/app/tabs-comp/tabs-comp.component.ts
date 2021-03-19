import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-comp',
  templateUrl: './tabs-comp.component.html',
  styleUrls: ['./tabs-comp.component.scss'],
})
export class TabsCompComponent implements OnInit {

  selectedTab = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedTab = this.populateSelectedTab(event);
      }
    });
    this.selectedTab = 'home';
  }

  ngOnInit() {}

  private populateSelectedTab(event: RouterEvent): string {
    let tabName:string = 'tab1';
    switch(event.url){
      case '/menu/home' : {
        tabName = 'home';
        break;
      }
      case '/menu/mytrips' : {
        tabName = 'mytrips';
        break;
      }
      case '/menu/offers' : {
        tabName = 'offers';
        break;
      }
    }
    return tabName;
  }

  goTo(url: string, tabName: string) {
    this.router.navigateByUrl(url);
    this.selectedTab = tabName;
  }

}
