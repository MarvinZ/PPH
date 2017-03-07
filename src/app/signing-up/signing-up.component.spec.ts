/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SigningUpComponent } from './signing-up.component';

describe('SigningUpComponent', () => {
  let component: SigningUpComponent;
  let fixture: ComponentFixture<SigningUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigningUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
