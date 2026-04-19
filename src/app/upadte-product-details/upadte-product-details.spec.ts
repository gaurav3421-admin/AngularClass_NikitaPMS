import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteProductDetails } from './upadte-product-details';

describe('UpadteProductDetails', () => {
  let component: UpadteProductDetails;
  let fixture: ComponentFixture<UpadteProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpadteProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadteProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
