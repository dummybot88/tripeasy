import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedPath = '';

  pages = [
    {
      title: 'Settings',
      url: '/menu/settings',
      src: 'cog-outline'
    },
    {
      title: 'Notification',
      url: '/menu/notify',
      src: 'notifications-outline'
    }
  ]

}
