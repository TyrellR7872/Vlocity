import { LightningElement, api} from 'lwc';
import template from './customCasesLWC.html';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";

const columns =  [
    {label: 'Case Number', fieldName: 'CaseNumber'},
    {label: 'Case Subject', fieldName: 'CaseSubject', editable: 'true'},
    {label: 'Case Description', fieldName: 'Description', editable: 'true'}
    


];

export default class CustomCasesLWC extends OmniscriptBaseMixin(LightningElement) {

    @api casesJson;
    columns = columns;
    selectedCaseId;


    data;
    render() {
        return template;
    }
    
    handleRowSelection(event){
        var selectedRows = event.detail.selectedRows;
        if (selectedRows.length > 1){
            var el = this.template.querySelector('lightning-datatable');
            selectedRows = el.selectedRows = el.selectedRows.slice(1);

            event.preventDefault();
            this.selectedCaseId = selectedRows[0].CaseId;

            
           
        }else if(selectedRows.length==0){
            selectedRows=el.selectedRows=this._selectedRowId;
            event.preventDefault();
            return;
        }   
                 this.selectedCaseId = selectedRows[0].CaseId;
            let myData = {
                'SelectedCaseId' : this.selectedCaseId
            };
            this.omniApplyCallResp(myData);

    }

    // handleSave(event) {
    //     this.saveDraftValues = event.detail.draftValues;
    //     let myData = {
    //         'DraftValues' : this.saveDraftValues
    //     };
    //     this.omniApplyCallResp(myData);
    // }



    connectedCallback(){
        var jsonData = JSON.parse(JSON.stringify(this.casesJson));
     
        if (jsonData != null){
            this.data = jsonData;
        }

        this.render();
    }
    
}