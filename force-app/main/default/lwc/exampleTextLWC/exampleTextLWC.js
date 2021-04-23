import { LightningElement, api } from "lwc";
import template from './exampleTextLWC.html';
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";
import { fetchCustomLabels, getUserProfile } from "vlocity_cmt/utility"

export default class exampleTextLWC extends OmniscriptBaseMixin(
  LightningElement) {//your lwc code here for radio group as shown above

    @api optionsList;
    @api value = "en-US";
    @api exampleText;
    translations;
    accountTranslation;
    accordingTranslation;
    accommodateTranslation;
    labels = ["Account", "According","Accommodate"];
    status;
    errorM;
    selectedOption;

   

    handleChange(event){
        this.value = event.detail.value;
        this.getCustomLabels();
         
         
        
    }

    render() {

        return template;

    }

    getCustomLabels(){
        
        fetchCustomLabels(
            this.labels, this.value, this.labels)
            .then(
                data => {
                console.log(data); 
                this.translations = data;
                this.accountTranslation = this.translations[this.labels[0]];
                this.accordingTranslation = this.translations[this.labels[1]];
                this.accommodateTranslation = this.translations[this.labels[2]];

            })
            .then(() => this.status = "success")
            .then(() => {
                let myData = {
                    "value" : this.value,
                    "AccountTranslation" : this.accountTranslation,
                    "AccordingTranslation" : this.accordingTranslation,
                    "AccommodateTranslation": this.accommodateTranslation,
                    "Status": this.status
                  
                    
                 }
        
                 this.omniApplyCallResp(myData);
            })
            .catch(error => {
                this.status = error}) ;

        

    }

    connectedCallback(){
        getUserProfile()
        .then(result => {
            this.value = result.language;
            this.getCustomLabels();
        });
    }


    
 
}