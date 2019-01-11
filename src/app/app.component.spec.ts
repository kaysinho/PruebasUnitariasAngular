import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let fixture , app , compiled;
  let component : AppComponent


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        FormsModule
      ]
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
