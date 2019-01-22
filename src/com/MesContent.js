import React from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export default (props) => {

    if(props.type === 1){
        return <Highlight className="mes-code">{props.message}</Highlight>
    }
    return <p className="mes-txt">{props.message}</p>
}