/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeatTheLineComponent } from './beat-the-line.component';

describe('BeatTheLineComponent', () => {
  let component: BeatTheLineComponent;
  let fixture: ComponentFixture<BeatTheLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatTheLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatTheLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
