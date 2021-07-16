import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';




export default class SelectCases extends OmniscriptBaseMixin(LightningElement) {
   //TO DO
   // Declare an @api variable that represents the accounts related cases passed from the Omniscript

    // TODO
    // Declare a constant columns, an array that represents the columns labels

    //TODO
    // Parse the cases passed from the Omniscript and set it equal to the api variable.
    // If there are no cases,move to the next step ( this.omniNextStep() )
    connectedCallback(){

    }

    // TODO
    // This function is invoked when the user selects a row in the datatable.
    // Gets the selected rows from the datatable and passes it back to the Omniscript using omniApplyCallResp
    // omniApplyCallResp({
    //      ['name']: value
    // });
    getSelected() {

    }
    

}