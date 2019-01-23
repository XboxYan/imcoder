import React from 'react';
import Highlight from 'react-highlight';
import Highlight2 from 'react-highlight/lib/optimized';
import 'highlight.js/styles/atom-one-dark.css';

export default (props) => {

    if(props.languages){
        return <Highlight2 className="mes-code" languages={['diff']}>{props.children}</Highlight2>
    }
    return <Highlight className="mes-code">{props.children}</Highlight>
}