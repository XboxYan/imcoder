import React from 'react';
import {
    MdAddCircleOutline,
    MdSentimentSatisfied,
    MdSend
} from "react-icons/md";

import CodeEdit from './CodeEdit';

export default (props) => {

    const onPaste = (ev) => {
        ev.preventDefault();
        document.execCommand("insertText", false, ev.clipboardData.getData('text'));
    }

    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            //enter
            if(ev.ctrlKey){
                // ctrl+enter
                document.execCommand("insertText",false,"\n");
            }else{
                // enter
                ev.preventDefault();
                props.onComfirm&&props.onComfirm(ev.target.innerText);
            }
            return false;
        }
        // if (ev.keyCode === 9) {
        //     ev.preventDefault();
        //     //tab
        //     if(ev.shiftKey){
        //         // ctrl+enter
        //         document.execCommand("outdent")
        //     }else{
        //         // enter
        //         document.execCommand("indent", false, null)
        //     }
        //     return false;
        // }
    }

    return (
        <div className="mes-input-con">
            <CodeEdit/>
            <button className="icon-btn"><MdSentimentSatisfied /></button>
            <div className="mes-input" spellCheck={false} contentEditable={true} onKeyDown={onKeyDown} onPaste={onPaste} placeholder="输入内容" />
            <button className="icon-btn"><MdSend /></button>
        </div>
    )
}