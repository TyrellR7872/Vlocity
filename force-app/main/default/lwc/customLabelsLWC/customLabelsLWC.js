import { LightningElement, api } from "lwc";
import template from './customLabelsLWC.html';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";
import { fetchCustomLabels, getUserProfile } from "vlocity_cmt/utility"

export default class customLabelLWC extends OmniscriptBaseMixin(
  LightningElement) {//your lwc code here for radio group as shown above

  
    @api labelList;
    allTranslations = [];
    status;
    labelValues = [];


    render() {

        return template;

    }

    getCustomLabels(){
        fetchCustomLabels(
            this.labelValues, this.value, this.labelValues)
            .then(
                data => {
                    const translations = [];
                    for (var i = 0; i < this.labelValues.length; i++){
                        let translation = {
                            "key" :this.labelValues[i],
                            "value": data[this.labelValues[i]]
                      
                        }
                        translations.push(translation);
                }
                this.allTranslations = translations;
            })
            .then(() => this.status = "success")
            .catch(error => {
                this.status = error}) ;

        

    }



    connectedCallback(){
        
    
        for (var i = 0; i < this.labelList.length; i++){
            this.labelValues.push(this.labelList[i]);
        }
        getUserProfile()
        .then(result => {
            this.value = result.language;
            this.getCustomLabels();
        });
        
        this.render();
    }


    
 
}