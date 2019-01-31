import React,{ useState,useRef,useEffect } from 'react';
import {
    MdCode,
    MdTextFormat,
    MdSentimentSatisfied,
    MdSend
} from "react-icons/md";

import CodeInput from './CodeInput';

const languages = ["APL","PGP","ASN.1","Asterisk","Brainfuck","C","C++","Cobol","C#","Clojure","ClojureScript","CMake","CoffeeScript","Common Lisp","Cypher","Cython","Crystal","CSS","CQL","D","Dart","diff","Django","Dockerfile","DTD","Dylan","EBNF","ECL","edn","Eiffel","Elm","Embedded Javascript","Embedded Ruby","Erlang","Esper","Factor","FCL","Forth","Fortran","F#","Gas","Gherkin","Go","Groovy","HAML","Haskell","Haxe","HXML","ASP.NET","HTML","HTTP","IDL","Pug","Java","Java Server Pages","JavaScript","JSON","JSX","Julia","Kotlin","LESS","LiveScript","Lua","Markdown","mIRC","MariaDB SQL","Mathematica","Modelica","MUMPS","MS SQL","mbox","MySQL","Nginx","NSIS","NTriples","Objective-C","OCaml","Octave","Oz","Pascal","PEG.js","Perl","PHP","Pig","Plain Text","PLSQL","PowerShell","Properties files","ProtoBuf","Python","Puppet","Q","R","reStructuredText","RPM Changes","RPM Spec","Ruby","Rust","SAS","Sass","Scala","Scheme","SCSS","Shell","Sieve","Slim","Smalltalk","Smarty","Solr","SML","Soy","SPARQL","Spreadsheet","SQL","SQLite","Squirrel","Stylus","Swift","sTeX","LaTeX","SystemVerilog","Tcl","Textile","TiddlyWiki ","Tiki wiki","TOML","Tornado","troff","TTCN","TTCN_CFG","Turtle","TypeScript","Twig","Web IDL","VB.NET","VBScript","Velocity","Verilog","VHDL","Vue.js Component","XML","XQuery","Yacas","YAML","Z80","mscgen","xu","msgenny"]

const ModelSelect = (props) => {

    const [languagesList, filterlanguagesList] = useState(languages);

    const onSelect = (d) => (ev) => {
        props.setShow(false);
        props.onSelect && props.onSelect(d);
    }

    const filter = (ev) => {
        const value = ev.target.value;
        if(value){
            filterlanguagesList(languages.filter(d=>d.toUpperCase().includes(value.toUpperCase())));
        }else{
            filterlanguagesList(languages);
        }
    }

    return (
        <div className="model-con" data-show={props.show}>
            <div className="model-list">
                {
                    languagesList.map(d=>(<button key={d} data-current={props.language===d} onClick={onSelect(d)}>{d}</button>))
                }
            </div>
            <input className="model-search" onChange={filter} type="text" />
        </div>
    )
}

export default (props) => {

    const codeEdit = useRef(null);

    const textEdit = useRef(null);

    const [codeMode, setcodeMode] = useState(false);

    const [show, setShow] = useState(false);

    const [language, setlanguage] = useState('JavaScript');

    const onPaste = (ev) => {
        ev.preventDefault();
        document.execCommand("insertText", false, ev.clipboardData.getData('text'));
    }

    const setMode = () => {
        setcodeMode(!codeMode);
    }

    const selectModle = () => {
        setShow(!show);
    }

    const send = () => {
        let value = ''
        if(codeMode){
            value = codeEdit.current.edit.editor.getValue();
        }else{
            value = textEdit.current.innerText;
        }
        props.onComfirm&&props.onComfirm({
            message:value,
            type:codeMode?1:0,
            language:language
        });
    }

    useEffect(()=>{
        if(props.msg.id){
            const {language,type,message} = props.msg;
            setlanguage(language);
            if(type===1){
                setcodeMode(true);
                codeEdit.current.edit.editor.setValue(message);
            }else{
                setcodeMode(false);
                textEdit.current.innerText = message;
            }
        }
    },[props.msg])

    const onKeyDown = (ev) => {
        if (ev.keyCode === 13) {
            //enter
            if(ev.ctrlKey){
                // ctrl+enter
                document.execCommand("insertText",false,"\n");
            }else{
                // enter
                ev.preventDefault();
                send(ev.target.innerText);
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
                <div className="mes-input" ref={textEdit} spellCheck={false} contentEditable={true} onKeyDown={onKeyDown} onPaste={onPaste} placeholder="输入内容" />
                <button className="icon-btn" onClick={send}><MdSend /></button>
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
                <ModelSelect onSelect={setlanguage} show={show} setShow={setShow} language={language} />
                <button className="icon-btn" onClick={selectModle}><span className="icon-lan">{language}</span></button>
                <CodeInput className="code-edit" language={language} ref={codeEdit} />
                <div className="icon-group">
                    <div className="icon-wrap">
                        <button className="icon-btn"><MdCode /></button>
                        <button className="icon-btn" onClick={send}><MdSend /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}