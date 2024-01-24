import { api, LightningElement } from 'lwc';

export default class ExtendaModal extends LightningElement {

    active
    data = []
    is = 'modal'

    @api header
    @api trigger
    @api value
    /**
     * @description {Boolean} if set as an attribute, the modal is auto opened on connectedCallback
     */
    @api isActive;
    /**
     * @description {Boolean} if set as an attribute, the modal will only use the view slot; No lightning card, header, footer, etc.
     */
    @api empty;
    /**
     * @description {String} small | medium | large
     */
    @api variant

    @api open(){
        this.active = true;
    }

    @api close(){
        this.active = false
        this.dispatch('close')
    }

    @api isOpen(){
        return this.active ? true : false;
    }

    
    get modalClassList(){

        if(this.variant === 'large'){
            return 'slds-modal slds-fade-in-open slds-modal_large'
        }
        else if(this.variant === 'small')      {
            return 'slds-modal slds-fade-in-open slds-modal_small'
        }

        return 'slds-modal slds-fade-in-open slds-modal_medium'
    }

    connectedCallback(){
        this.active = this.isActive;
    }
}