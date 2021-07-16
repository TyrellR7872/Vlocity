import { LightningElement, api, wire, track } from 'lwc';
import template from './showBookingConfirmation.html';
import { getRecord } from 'lightning/uiRecordApi';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";

const FIELDS = [
    'Employee_Booking__c.Name',
    'Employee_Booking__c.Employee_Name__c',
    'Employee_Booking__c.Appointment_Time__c',
    'Employee_Booking__c.Booking_Email__c',
    'Employee_Booking__c.Booking_Phone_Number__c'
];

export default class ShowBookingConfirmation extends OmniscriptBaseMixin(LightningElement) {
    @api bookingId
    @track result;
    @track error;
    nameResult;
    resultArray;
    inputMap = {};
    inputMapString;

    @wire(getRecord, {recordId: '$bookingId', fields: FIELDS})
    wiredAccount({error, data}){
        if (data){
            this.result = data;
            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.result = undefined;
        }
    }

    get confirmationNumber(){
        return this.result.fields.Name.value;
    }

    get employeeName(){
        return this.result.fields.Employee_Name__c.value;
    }

    get appointmentTime(){
        return this.result.fields.Appointment_Time__c.value;
    }

    get email(){
        return this.result.fields.Booking_Email__c.value;
    }

    get phone(){
        return this.result.fields.Booking_Phone_Number__c.value;
    }

    render(){
        return template;
    }


    connectedCallback(){

      
        this.render();
    }


}