import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeSvgComponent } from './icone-svg.component';

describe('IconeSvgComponent', () => {
  let component: IconeSvgComponent;
  let fixture: ComponentFixture<IconeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconeSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
