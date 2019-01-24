import React,{ useState } from 'react';
import {
    MdCode,
    MdTextFormat,
    MdSentimentSatisfied,
    MdSend
} from "react-icons/md";

import CodeInput from './CodeInput';

export default (props) => {

    const [codeMode, setcodeMode] = useState(false);

    const onPaste = (ev) => {
        ev.preventDefault();
        document.execCommand("insertText", false, ev.clipboardData.getData('text'));
    }

    const setMode = () => {
        setcodeMode(!codeMode);
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
        <div className="mes-input-con" data-code-mode={codeMode}>
            <div className="icon-float">
                <button className="icon-btn" onClick={setMode}>
                    {codeMode?<MdTextFormat />:<MdCode/>}
                </button>
            </div>
            <div className="mes-input-wrap mes-txt-input-wrap">
                <button className="icon-btn"><MdSentimentSatisfied /></button>
                <div className="mes-input" spellCheck={false} contentEditable={true} onKeyDown={onKeyDown} onPaste={onPaste} placeholder="输入内容" />
                <button className="icon-btn"><MdSend /></button>
                {
                    // <div className="icon-group">
                    //     <div className="icon-wrap">
                    //         <button className="icon-btn"><MdCode /></button>
                    //         <button className="icon-btn"><MdSend /></button>
                    //     </div>
                    // </div>
                }
            </div>
            <div className="mes-input-wrap mes-code-input-wrap">
                <button className="icon-btn"><span className="icon-lan">HTML</span></button>
                <CodeInput className="code-edit" />
                <div className="icon-group">
                    <div className="icon-wrap">
                        <button className="icon-btn"><MdCode /></button>
                        <button className="icon-btn"><MdSend /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}