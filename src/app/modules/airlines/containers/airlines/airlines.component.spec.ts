import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as fromRootReducer from '../../../../ngrx-store/reducers/index';
import * as fromAirlineReducer from '../../state/reducers/airline.reducer';
import * as DataActions from '../../state/actions/airline.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AirlinesComponent } from './airlines.component';


describe('My Component', () => {
  let component: AirlinesComponent;
  let fixture: ComponentFixture<AirlinesComponent>
  let store: Store<fromAirlineReducer.AirlinesState>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRootReducer.reducers,
          feature: combineReducers(fromAirlineReducer.reducer),
        }),
        // other imports
      ],
      declarations: [
        AirlinesComponent,
        // other declarations
      ],
      providers: [
        // other providers
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should dispatch an action to load data when created', () => {
    const action = new DataActions.LoadAirlines();
    //component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });


});
