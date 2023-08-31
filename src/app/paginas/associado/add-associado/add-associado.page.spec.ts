import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAssociadoPage } from './add-associado.page';

describe('AddAssociadoPage', () => {
  let component: AddAssociadoPage;
  let fixture: ComponentFixture<AddAssociadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAssociadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
