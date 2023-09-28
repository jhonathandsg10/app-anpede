import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditEquipamentoPage } from './add-edit-equipamento.page';

describe('AddEditEquipamentoPage', () => {
  let component: AddEditEquipamentoPage;
  let fixture: ComponentFixture<AddEditEquipamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
