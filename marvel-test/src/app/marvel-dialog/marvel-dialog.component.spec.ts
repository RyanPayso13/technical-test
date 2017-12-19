import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDialogComponent } from './marvel-dialog.component';

describe('MarvelDialogComponent', () => {
  let component: MarvelDialogComponent;
  let fixture: ComponentFixture<MarvelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
