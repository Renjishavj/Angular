import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDemoComponentComponent } from './binding-demo-component.component';

describe('BindingDemoComponentComponent', () => {
  let component: BindingDemoComponentComponent;
  let fixture: ComponentFixture<BindingDemoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingDemoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingDemoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
