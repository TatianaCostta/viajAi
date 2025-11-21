import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarPost } from './modal-criar-post';

describe('ModalCriarPost', () => {
  let component: ModalCriarPost;
  let fixture: ComponentFixture<ModalCriarPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarPost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
