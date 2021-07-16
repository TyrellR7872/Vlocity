import { LightningElement, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';

export default class EditCases extends OmniscriptBaseMixin(LightningElement) {

   @api selectedCases;

   updatedCases = [];

   
    connectedCallback(){
        this.updatedCases= JSON.parse(JSON.stringify(this.selectedCases));

        //checking to see if cases have been selected, if not then skip to the next step
        if (!(Array.isArray(this.updatedCases) && this.updatedCases.length)){
            this.omniNextStep();
        } 
    }
   

   get priorityOptions() {
        return [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
        ];
    }

    get statusOptions() {
        return [
            { label: 'On Hold', value: 'On Hold' },
            { label: 'Escalated', value: 'Escalated' },
            { label: 'New', value: 'New' },
            { label: 'Closed', value: 'Closed' },
        ];
    }

    handleSubjectChange(event){

        var subjectValue = event.target.value;
        var caseId = event.target.dataset.caseItem;

        var caseToUpdate = this.updatedCases.find(theCase => theCase.CaseId === caseId)
        caseToUpdate["CaseSubject"] = subjectValue;

        var index = this.updatedCases.findIndex(theCase => theCase.CaseId === caseId);

        if (index === -1) {
            this.updatedCases.push(caseToUpdate);
        } else {
            this.updatedCases[index] = caseToUpdate;
        }

        this.omniApplyCallResp({
            ['updatedCases']: this.updatedCases
          });

    }


    handlePriorityChange(event){
        
        var priorityValue = event.target.value;
        var caseId = event.target.dataset.caseItem;

        var caseToUpdate = this.updatedCases.find(theCase => theCase.CaseId === caseId)
        caseToUpdate["CasePriority"] = priorityValue;

        var index = this.updatedCases.findIndex(theCase => theCase.CaseId === caseId);

        if (index === -1) {
            this.updatedCases.push(caseToUpdate);
        } else {
            this.updatedCases[index] = caseToUpdate;
        }

        this.omniApplyCallResp({
            ['updatedCases']: this.updatedCases
          });

    }


    handleStatusChange(event){
        
        var statusValue = event.target.value;
        var caseId = event.target.dataset.caseItem;

        var caseToUpdate = this.updatedCases.find(theCase => theCase.CaseId === caseId)
        caseToUpdate["CaseStatus"] = statusValue;

        var index = this.updatedCases.findIndex(theCase => theCase.CaseId === caseId);

        if (index === -1) {
            this.updatedCases.push(caseToUpdate);
        } else {
            this.updatedCases[index] = caseToUpdate;
        }

        this.omniApplyCallResp({
            ['updatedCases']: this.updatedCases
          });

    }
    


}