import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';

describe('AppComponent', () => {

  let fixture , app , compiled;
  let component : AppComponent


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuthComponent, DashboardComponent
      ],
      imports:[
        FormsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    
  }));

  it('Debe crear mi app', () => {
    expect(app).toBeTruthy();
  });

  


});
