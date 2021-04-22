import { LightningElement, api } from "lwc";
import template from './exampleTextLWC.html';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";

export default class exampleTextLWC extends OmniscriptBaseMixin(
  LightningElement) {//your lwc code here for radio group as shown above

    @api optionsList;
    @api value;
    @api exampleText;
    
   

    handleChange(event){
        this.value = event.detail.value;

        let myData = {
            "value" : this.value
            
         }

         this.omniApplyCallResp(myData);
        
    }

    render() {

        return template;

    }
}