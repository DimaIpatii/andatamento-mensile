import React from 'react'

/* Styles: */
import './Month.css';

const MonthView = ({handleEvent,id,name,docs,sum,selected,focused,range}) => {
   
    return (
        <article 
        onMouseDown={(event) => handleEvent(event,id)}
        onMouseUp={(event) => handleEvent(event,id)}
        onMouseOver={(e) => handleEvent(e,id)}
        id={id} 
        className={`month ${(selected && 'selected') || (focused && 'focused') || ''}`}>
            <h2 className="month__name" >{name}</h2>
            <div className="month__content" data-content="month-content">
                <p className="month__docs" >{docs}</p>
                <p className="month__income" >{sum + ' €'}</p>
                <div className="month__chart" style={{height : range + '%'}}></div>
            </div>      
        </article>
    )
}

export default MonthView
