import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMain } from './shell-main';

describe('ShellMain', () => {
  let component: ShellMain;
  let fixture: ComponentFixture<ShellMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
