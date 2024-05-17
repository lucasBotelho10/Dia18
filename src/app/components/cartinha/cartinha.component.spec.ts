import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartinhaComponent } from './cartinha.component';

describe('CartinhaComponent', () => {
  let component: CartinhaComponent;
  let fixture: ComponentFixture<CartinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartinhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
