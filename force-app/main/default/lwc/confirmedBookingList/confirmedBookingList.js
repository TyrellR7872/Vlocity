import { LightningElement, wire, api, track } from 'lwc';
import template from './confirmedBookingList.html';

const columns = [
        {label: 'Booking Confirmation Number', fieldName: 'ConfirmationNumber', sortable: true},
        {label: 'Employee Name', fieldName: 'EmployeeName', sortable: true},
        {label: 'Appointment Time', fieldName: 'AppointmentTime'}
        


    ];


export default class ConfirmedBookingList extends LightningElement {
    @track sortBy;
    @track sortDirection;
   @api bookingList;
   @track data;


   columns = columns;


   handleSortdata(event) {
    // field name
    this.sortBy = event.detail.fieldName;

    // sort direction
    this.sortDirection = event.detail.sortDirection;

    // calling sortdata function to sort the data based on direction and selected field
    this.sortData(event.detail.fieldName, event.detail.sortDirection);
}

    sortData(fieldname, direction) {
    // serialize the data before calling sort function
    let parseData = JSON.parse(JSON.stringify(this.data));

    // Return the value stored in the field
    let keyValue = (a) => {
        return a[fieldname];
    };

    // cheking reverse direction 
    let isReverse = direction === 'asc' ? 1: -1;

    // sorting data 
    parseData.sort((x, y) => {
        x = keyValue(x) ? keyValue(x) : ''; // handling null values
        y = keyValue(y) ? keyValue(y) : '';

        // sorting values based on direction
        return isReverse * ((x > y) - (y > x));
    });

    // set the sorted data to data table data
    this.data = parseData;
}
   
   

    connectedCallback(){
        var jsonData = JSON.parse(JSON.stringify(this.bookingList));
     
        if (jsonData != null){
            this.data = jsonData;
            
        }

      
    }
}