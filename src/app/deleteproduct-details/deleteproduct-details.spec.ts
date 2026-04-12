import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproductDetails } from './deleteproduct-details';

describe('DeleteproductDetails', () => {
  let component: DeleteproductDetails;
  let fixture: ComponentFixture<DeleteproductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteproductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteproductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
