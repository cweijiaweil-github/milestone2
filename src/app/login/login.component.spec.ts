import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from '../app-routing.module';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
      ],
      providers: [
        LoginService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('form should be invalid', async(() => {
    component.email.setValue("dddd");
    // component.loginForm.controls['email'].setValue('');
    // component.loginForm.controls['password'].setValue('');
    // component.email.value("d");
    // expect(component.loginForm.valid).toBeFalsy();
    expect(component.email.valid).toBeFalsy();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
