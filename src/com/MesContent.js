import React from 'react';
import SyntaxHighlighter  from 'react-syntax-highlighter';
import diff from '../util/diff';
import {
    MdContentCopy,
    MdReply,
    MdRateReview
} from "react-icons/md";
//import { atomOneDark } from 'react-syntax-highlighter/dist/styles/hljs';
import 'highlight.js/styles/atom-one-dark.css';

export default (props) => {

    const onCopy = () => {
        props.onSetMsg(props.data,1);
    }

    const onReview = () => {
        props.onSetMsg(props.data,3);
    }

    if(props.data.type === 1){
        const differ = props.data.diff;
        const result = differ? diff(differ,props.data.message):props.data.message;
        return (
            <div className="mes-inner">
                <SyntaxHighlighter 
                    //style={atomOneDark} 
                    useInlineStyles={false}
                    wrapLines={true}
                    //lineProps ={markLine}
                    language={differ?'diff':props.data.language}
                    //showLineNumbers={true}
                >
                    {result}
                </SyntaxHighlighter>
                <div className="mes-action" >
                    <i className="mes-action-btn" onClick={onCopy}><MdContentCopy /></i>
                    <i className="mes-action-btn"><MdReply /></i>
                    <i className="mes-action-btn" onClick={onReview}><MdRateReview /></i>
                </div>
            </div>
       )    
    }
    return <p className="mes-txt">{props.data.message}</p>
}