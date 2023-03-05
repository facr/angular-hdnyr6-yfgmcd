import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSharingComponent } from './services-sharing.component';

describe('ServicesSharingComponent', () => {
  let component: ServicesSharingComponent;
  let fixture: ComponentFixture<ServicesSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
