import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTileComponent } from './input-tile.component';

describe('InputTileComponent', () => {
  let component: InputTileComponent;
  let fixture: ComponentFixture<InputTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
