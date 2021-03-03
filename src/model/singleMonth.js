export class Month {
    constructor(){
        this.docs = '';
        this.sum = '';
        this.selected = false;
        this.focused = false;
        this.id = '';
        this.name = '';
        this.range = 0;
    }
    define(index,imports,docs,percVal){
        const months = ['Gennaio', 'Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
        this.name = months[index];
        this.id = months[index];

        // Convert docs:
        this.docs = String(docs) + ' doc.';

        // Convert imports:
        this.sum = String(imports).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.");

        // Set Range
        this.range = percVal;
    }
};