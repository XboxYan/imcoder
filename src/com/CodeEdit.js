import React,{ useRef } from 'react';
import ReactDOM from 'react-dom';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/material.css';

export default () => {
    const codeedit = useRef(null);
    const onSumbit = () => {
        const value = codeedit.current.editor.getValue();
        console.log(codeedit.current)
    }
    return ReactDOM.createPortal(
        <div className="code-edit">
            <CodeMirror
                ref={codeedit}
                onChange={onSumbit}
                options={{
                    theme: 'material',
                    keyMap: 'sublime',
                    dragDrop: true,
                    mode: 'jsx',
                }}
            />
        </div>,
        document.body,
      );
}