import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective, RouterOutletStubComponent } from './app.router-stubs';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog.component';



describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let links;
  let linkDes;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        BlogComponent,
        NgbCollapse,
        RouterLinkStubDirective, 
        RouterOutletStubComponent
      ]
    })

      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    // trigger initial data binding
    fixture.detectChanges();

    // find debug elemtns with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement
      .queryAll(By.directive(RouterLinkStubDirective));

    // get the attacjed link directive instances using the DebugElement injectors
    links = linkDes
      .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize', () => {
    component.ngOnInit();
  });

});
