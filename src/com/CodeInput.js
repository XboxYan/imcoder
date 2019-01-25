import React,{ PureComponent } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';


export default class extends PureComponent {
    render() {
        const {className,language} = this.props;
        return (
            <div className={className}>
                <CodeMirror
                    ref={node=>this.edit=node}
                    options={{
                        theme: 'neo',
                        placeholder:'请输入...',
                        keyMap: 'sublime',
                        lineNumbers: false,
                        dragDrop: true,
                        mode: language,
                    }}
                />
            </div>
        )
    }
}