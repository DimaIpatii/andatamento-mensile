import {Month} from './singleMonth.js';

export const reducer = (months,action) => {
    switch(action.type){

        case 'INITIALIZE':
            /* Get values and find the biggest value as the refference,
             for the future calculations */
            const values = action.payload.map(val => val.importo);
            const theBigestVal = Math.max(...values);

            /* Initialize Mounths components based on Month Class */
            const monthsList = action.payload.map((data,index) => {
                // define percentage value:
                const percVal = data.importo / theBigestVal * 100;

                const month = new Month();
                month.define(index,data.importo, data.documenti, percVal);
                return {...month};
            });

            return [...monthsList];

        case 'SELECT_MONTH':{
            
            const selected = months.map(month => {
                if(month.focused === true){
                    month.selected = true;
                    month.focused = false;
                    return month;
                }
                return month;
            });

            return [...selected];
        }

        case 'FOCUS_ONE_MONTH':{
            const id = action.payload;

            const focused = months.map(month => {
                if(month.id === id && month.focused === false){
                    month.focused = true;
                    return month;
                }
                month.selected = false;
                return month;
            });

            return [...focused];
        }

        case 'FOCUS_MYLTIPLE_MONTHS': {
            const id = action.payload;
            const focused = months.map(month => {
                        
                if(month.id === id ){
                    month.focused = true;
                }
                return month;
            });
            return [...focused];
        }

        default:
            return months;
    }
};
