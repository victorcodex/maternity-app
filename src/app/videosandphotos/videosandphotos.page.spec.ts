import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosandphotosPage } from './videosandphotos.page';

describe('VideosandphotosPage', () => {
  let component: VideosandphotosPage;
  let fixture: ComponentFixture<VideosandphotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosandphotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosandphotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
