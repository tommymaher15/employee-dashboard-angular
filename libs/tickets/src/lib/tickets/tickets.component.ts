import { Component, OnInit } from '@angular/core';
import { TableColumn } from '@razroo-fully-architected-dashboard/ui/common';

const ELEMENT_DATA = [
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},
  {employeeName: 'Charlie Greenman', projectName: 'Razroo Angular Dashboard',
    shortDescription: 'Test short description', ticketNumber: 'test permission',
    ticketLink: 'no one', reporterName: 'Jay Zee', designLink: 'test link goes here'},

];

@Component({
  selector: 'razroo-fully-architected-dashboard-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  elementData;
  ticketsTableColumns: TableColumn[];

  constructor() { }

  ngOnInit(): void {
    this.elementData = ELEMENT_DATA;

    this.ticketsTableColumns = [
      {
        name: 'Employee Name',
        dataKey: 'employeeName',
        isSortable: true,
      },
      {
        name: 'Project Name',
        dataKey: 'projectName',
        isSortable: true,
      },
      {
        name: 'Short Description',
        dataKey: 'shortDescription',
        isSortable: true,
      },
      {
        name: 'Ticket Number',
        dataKey: 'ticketNumber',
        isSortable: true,
      },
      {
        name: 'Ticket Link',
        dataKey: 'ticketLink',
        isSortable: true,
      },
      {
        name: 'Reporter Name',
        dataKey: 'reporterName',
        isSortable: true,
      },
      {
        name: 'Design Link',
        dataKey: 'designLink',
        isSortable: true,
      }
    ];
  }

}
