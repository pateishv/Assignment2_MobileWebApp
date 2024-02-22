import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FlavourSelectionComponent } from './flavour-selection.component';

describe('FlavorSelectionComponent', () => {
  let component: FlavourSelectionComponent;
  let fixture: ComponentFixture<FlavourSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlavourSelectionComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '5' // assuming 5 as quantity for testing
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FlavourSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
