import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownSample } from './markdown-sample';

describe('MarkdownSample', () => {
  let component: MarkdownSample;
  let fixture: ComponentFixture<MarkdownSample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownSample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownSample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
