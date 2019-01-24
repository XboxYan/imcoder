import React,{ useRef } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';


export default (props) => {
    const codeedit = useRef(null);
    const onChange = (ev) => {
        //const value = codeedit.current.editor.getValue();
        console.log(ev.getValue())
    }
    return (
        <div className={props.className}>
            <CodeMirror
                ref={codeedit}
                onChange={onChange}
                options={{
                    theme: 'neo',
                    placeholder:'请输入...',
                    keyMap: 'sublime',
                    lineNumbers: false,
                    dragDrop: true,
                    mode: 'jsx',
                }}
            />
        </div>
    )
}