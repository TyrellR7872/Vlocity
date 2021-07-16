import { LightningElement, wire, api, track } from 'lwc';

import getBookingList from '@salesforce/apex/BookingHelper.getBookingList';



export default class EmployeeBookingList extends LightningElement {

   @track error;
   @track bookingList;


    @track columns =  [
        {label: 'Id', fieldName: 'Id'},
        {label: 'Booking Confirmation Number', fieldName: 'Name'},
        {label: 'Employee Name', fieldName: 'Employee_Name__c'},
        {label: 'Appointment Time', fieldName: 'Appointment_Time__c'}
        


    ];

    @wire(getBookingList)
    parameters;
}