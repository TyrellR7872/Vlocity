import { LightningElement, api } from "lwc";
import { OmniscriptBaseMixin } from "vlocity_cmt/omniscriptBaseMixin";

export default class RadioGroup extends OmniscriptBaseMixin(
  LightningElement) {//your lwc code here for radio group as shown above

    @api optionsList;
    @api value;
    @api exampleText;


    render() {

        return template;

    }
}