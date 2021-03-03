import React, {useEffect,useReducer,useRef} from 'react';

/* Styles: */
import './Calendar.css';

/* Components */
import MonthView from '../Month/MonthView.js';

/* State Manager */
import {reducer} from '../../model/reducer.js';

/* API */
import {endpoint} from '../../api/endpoint.js';

const CalendarViewController = () => {
    const [months,dispatch] = useReducer(reducer,[]);
    const mouseDown = useRef(false);

    useEffect(() => {
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            dispatch({type : 'INITIALIZE', payload : data.mesi});
        });
    },[]);

    const handleEvent = (event,id) => {
       
        if(!event.target.closest('[data-content]')) return;
    
        switch(event.type){
            case 'mousedown':    
                mouseDown.current = true;
                return dispatch({type : 'FOCUS_ONE_MONTH', payload : id})            

            case 'mouseup':
                mouseDown.current = false;
                return dispatch({type : 'SELECT_MONTH', payload : months})

            case "mouseover":
                if(mouseDown.current === true){   
                    return dispatch({type : 'FOCUS_MYLTIPLE_MONTHS', payload : id});
                }
                break;
            default:
                return;
        };
    }

    return (
        <section id="calendar" className="calendar">
            {months.length > 0 && months.map(month => <MonthView 
            key={month.id}
            handleEvent={handleEvent}
            {...month} />
            ) }
        </section>
    );
};

export default CalendarViewController;