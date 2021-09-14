import { Component, OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';
import { DynamicAsideMenuService } from 'cbs-lib';
import { Subscription } from 'rxjs';
import { DynamicAsideMenuConfig } from 'src/app/core/config/dynamic-aside-menu.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/


  constructor(
    private dynamicAsideMenuService: DynamicAsideMenuService,
    private router: Router
  ) {
    dynamicAsideMenuService.setDynamicAsideMenuConfig(DynamicAsideMenuConfig);
  }

  showOnlyContent ;
  ngOnInit(): void {
    const routerSubscription = this.router.events.subscribe((event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        console.log("event", event);
        console.log("parse", this.router.parseUrl(event.url));
        let parsedUrl = this.router.parseUrl(event.url);
        console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;")
        this.showOnlyContent = parsedUrl?.queryParams?.showOnlyContent == 'true';
        console.log("this.showOnlyContent" , this.showOnlyContent);

       if(this.showOnlyContent){
        setTimeout(() => {
          document.body.classList.add('show-only-content');
        }, 500);
       }
      }
    });
    this.unsubscribe.push(routerSubscription);
  }
}
