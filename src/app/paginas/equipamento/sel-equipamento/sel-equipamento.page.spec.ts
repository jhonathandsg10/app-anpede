import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelEquipamentoPage } from './sel-equipamento.page';

describe('SelEquipamentoPage', () => {
  let component: SelEquipamentoPage;
  let fixture: ComponentFixture<SelEquipamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
