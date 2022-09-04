import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationJardinComponent } from './reclamation-jardin.component';

describe('ReclamationJardinComponent', () => {
  let component: ReclamationJardinComponent;
  let fixture: ComponentFixture<ReclamationJardinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationJardinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationJardinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
