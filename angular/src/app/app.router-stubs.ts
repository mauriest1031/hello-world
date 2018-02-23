export { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

import { Component, Directive, Injectable, Input, HostListener, Host } from '@angular/core';

// #docregion router-link
@Directive({
    selector: '[routerLink]',
})

export class RouterLinkStubDirective {
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;
    @HostListener('click') onclick() {
        this.navigatedTo = this.linkParams;
    }
}

//#enddocregion router-link
@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {

}

@Injectable()
export class ActivatedRouteStub {

}