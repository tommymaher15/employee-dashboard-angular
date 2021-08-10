import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs'
import { pluck,   } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { EmployeeQuery } from '@razroo-fully-architected-dashboard/data-graphql';


@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  constructor(public apollo: Apollo,
  ) { }



  getEmployees( event?: any ): Observable<EmployeesService> {

    const query = EmployeeQuery

    const allEmployees = this.apollo.query({ 

       query: query,
      variables: {
       start: event ? event.pageIndex * event.pageSize: 0,
       limit:  event ? event.pageSize  : 10,
      }
     })
    console.log(allEmployees, 'employees')
    console.log( 'event:', event)
    return from(allEmployees).pipe(pluck('data', 'employees')
    )
}






}
