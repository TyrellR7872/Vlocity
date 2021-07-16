import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';


const columns = [
    {label: 'Case Number', fieldName: 'CaseNumber'},
    {label: 'Subject', fieldName: 'CaseSubject'},
    {label: 'Priority', fieldName: 'CasePriority'},
    {label: 'Status', fieldName: 'CaseStatus'},
];


export default class SelectCases extends OmniscriptBaseMixin(LightningElement) {

    @api allCases;
    columns = columns;

    connectedCallback(){

        var allCases = JSON.parse(JSON.stringify(this.allCases));

        if (!(Array.isArray(allCases) && allCases.length)){
            this.omniNextStep();
        } 

    }

    getSelected() {
        var selectedCases = this.template.querySelector('lightning-datatable').getSelectedRows();
        this.omniApplyCallResp({
            ['selectedCases']: selectedCases
          });
    }
    

}