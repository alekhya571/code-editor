import React, { useState } from 'react';
import 'prismjs/themes/prism.css';
import './CodeEditor.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeEditor = () => {
    const [code, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="editor-container">
            <textarea
                value={code}
                onChange={handleChange}
                className="code-input"
                spellCheck="false"
            />
            <div className="code-output">
                <SyntaxHighlighter language="javascript" style={vs}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeEditor;

