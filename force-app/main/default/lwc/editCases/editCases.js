import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class EditCases extends OmniscriptBaseMixin(LightningElement) {

   //TO DO
   // Declare an @api variable that represents the accounts related cases passed from the Omniscript

   // Declare an empty array updatedCases that represents updated cases


    // TODO
    // Parse the selected cases passed from the Omniscript
    // Skips to next step if no cases are selected (omniNextStep)
    connectedCallback(){
       
    }
   
    // TODO
    // Returns an array of labels that represents the picklist values of the Case Priority field
   get priorityOptions() {

    }

     // TODO
    // Returns an array of labels that represents the picklist values of the Case Status field
    get statusOptions() {

    }

    // TODO
    // This function is invoked when the users chooses a picklist value for the Case Subject field
    // Adds the case associated with the change to the updatedCases if not already and updates tne
    // field to the new picklist value. Then passes the array back to the Omniscript

    handleSubjectChange(event){


    }


    // TODO
    // This function is invoked when the users chooses a picklist value for the Case Priority field
    // Adds the case associated with the change to the updatedCases if not already and updates tne
    // field to the new picklist value. Then passes the array back to the Omniscript
    handlePriorityChange(event){

    }


    // TODO
    // This function is invoked when the users chooses a picklist value for the Case Status field
    // Adds the case associated with the change to the updatedCases if not already and updates tne
    // field to the new picklist value. Then passes the array back to the Omniscript
    handleStatusChange(event){


    }
    


}