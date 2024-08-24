import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogoConfirmacaoComponent } from './dialogo-confirmacao.component';

describe('DialogoConfirmacaoComponent', () => {
  let component: DialogoConfirmacaoComponent;
  let fixture: ComponentFixture<DialogoConfirmacaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoConfirmacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
