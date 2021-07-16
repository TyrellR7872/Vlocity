import { LightningElement, api, wire} from 'lwc';
import template from './createEmployeeBooking.html';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = [
    'Employee_Booking__c.Is_Available__c'
];


export default class CreateEmployeeBooking extends OmniscriptBaseMixin(LightningElement) {
    

    result;

    employee;
    timeSlot;
    email;
    phone;

    bookingId;
    bookingCreated = false;

    inputMap;
    inputMapJson;
    isAvailable;
 

    render(){
        return template;
    }


    timeSlotsCheck(){
        const params = {
            input : '{}',
            sClassName: 'EmployeeBookingHelper',
            sMethodName: 'hasTimeSlots',
            options: '{}',
        };

        this.omniRemoteCall(params, true).then(response => {
            this.result = response.result.response;

        }).catch(error => {
            this.result = 'error';
        });
    }

    isTimeSlotAvailable(){
        return this.timeSlotRecord.data.fields.Is_Available__c.value;
    }

    handleEmployeeChange(evt){
        this.employee = evt.detail.value[0];


    }

    handleTimeChange(evt){
        this.timeSlot = evt.detail.value[0];

        

        
    }

    handleEmailChange(evt){
        this.email = evt.detail.value;

    }

    handlePhoneChange(evt){
        this.phone = evt.detail.value;
    }

    handleSuccess(event){
        
        this.bookingId = event.detail.id;
        this.bookingCreated = true;
        let myData = {
            'EmployeeField' : this.employee,
            'TimeSlotField' : this.timeSlot,
            'EmailField' : this.email,
            'PhoneField' : this.phone,
            ' t' : this.bookingId
            
        };
        this.omniApplyCallResp(myData);
        
        
        
    }

    nextButton(evt) {
        if (evt) {
            this.omniNextStep();
        }
    }



    

    connectedCallback(){
        this.timeSlotsCheck();
        this.render();
        
    }
}