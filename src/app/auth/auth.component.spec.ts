import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router, RouterModule } from '@angular/router';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El boton se debe desabilitar si no hay email o contraseña', ()=>{
    component.userData.password = ""
    component.userData.email = ""
    fixture.detectChanges()
    let button = document.getElementById('btnSignIn')
    expect(button['disabled']).toBeTruthy()
  })

  it('El boton se debe habilitar existen el email y contraseña', ()=>{
    component.userData.password = "dsafasdsadsd"
    component.userData.email = "prueba@prueba.com"
    fixture.detectChanges()
    let button = document.getElementById('btnSignIn')
    expect(button['disabled']).toBeFalsy()
  })

  it('El evento click del boton debe llamar el metodo signIn()', ()=>{
    let spyButton = spyOn(component, 'signIn').and.callThrough()

    component.userData.password = "dsafasdsadsd"
    component.userData.email = "prueba@prueba.com"
    fixture.detectChanges()
    let button = document.getElementById('btnSignIn')
    button.click()

    expect(spyButton).toHaveBeenCalled()
  })
});
