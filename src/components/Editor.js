import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

function FileEditor(props) {
    const [content, setContent] = useState('')

    return (
        <div className="editor">
            <Editor
                value={content}
                onValueChange={code => setContent(code)}
                highlight={code => highlight(code, languages.js)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    border: '1px solid black'
                }}
            />
        </div>
    )
}

export default FileEditor