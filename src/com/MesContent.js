import React from 'react';
import SyntaxHighlighter  from 'react-syntax-highlighter';
import diff from '../util/diff'
//import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs';
import 'highlight.js/styles/atom-one-dark.css';

var one = 
`<div>
    <div>1</div>
    <div>1</div>
    <div>3</div>
    <div>4</div>
    <div>
        <span>4444</span>
        <p>4444</p>
    </div> 
</div>`;
var other = 
`<div>
    <div>1w</div>
    <div>1</div>
    <div>3ss</div>
    <div>4</div>
    <div>
        <span>4444</span>
        <span>1</span>
    </div> 
</div>`;

// var diff = Diff.diffLines(one, other);
// const a = diff(one, other)
// console.log(a)

// var newer = '';

// diff.forEach(function(part){
//     var pre = (part.added&&'+') || (part.removed&&'-') || ' ';
//     var value = part.value.replace(/[^\n]+/g,function(matches, $1){
//         return pre + matches
//     })
//     newer+= value
// });

// console.log(newer)

// var s = ' '+newer.replace(/\n/g,'\n ').replace(/\n \+/g,'\n\+').replace(/\n \-/g,'\n\-')

// console.log(s)


const markLine = (lineNumber) => {
    return ({
        style:{
            display:'block',
            backgroundColor:'red'
        }
    })
}

export default (props) => {

    if(props.data.type === 1){
        return (
            <SyntaxHighlighter 
                //style={atomOneDark} 
                useInlineStyles={false}
                children="div"
                wrapLines={true}
                //lineProps ={markLine}
                language={props.data.language}
                //showLineNumbers={true}
            >
                {props.data.message}
            </SyntaxHighlighter>
       )    
    }
    return <p className="mes-txt">{props.data.message}</p>
}