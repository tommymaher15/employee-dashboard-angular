import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEmployees from './+state/employees.reducer';
import { EmployeesEffects } from './+state/employees.effects';
import { EmployeesFacade } from './+state/employees.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromEmployees.EMPLOYEES_FEATURE_KEY,
      fromEmployees.reducer
    ),
    EffectsModule.forFeature([EmployeesEffects]),
  ],
  providers: [EmployeesFacade],
})
export class DataAccessModule {}
