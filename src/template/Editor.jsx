import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ handleValue, i, data }) => {
    const quillRef = useRef(null);
    const [text, setText] = useState(data || '');

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'], // Inline Styles
            [{ list: 'ordered' }, { list: 'bullet' }], // Lists
            [{ indent: '-1' }, { indent: '+1' }], // Indentation
            [{ align: [] }], // Alignment
            ['link', 'image', 'video'], // Media
            ['clean'], // Clean formatting
            ['code-block'], // Code block
            ['blockquote', 'code-block'], // Blocks
            ['formula'], // Math Formula
            ['script', 'sub', 'super'], // Script and Superscript
            ['color', 'background'], // Color and Background
            ['font', 'size'], // Font and Size
            ['header', 'align', 'direction'], // Header, Align, Direction
            ['strike', 'underline', 'blockquote'], // Additional formatting
            ['clean'], // Additional options
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'align',
        'direction',
        'code-block',
        'link',
        'image',
        'video',
        'color',
        'background',
        'script',
        'sub',
        'super',
        'clean',
        'formula',

    ];

    const handleChange = (value) => {
        setText(value);
        handleValue(value, i, '')
    };
    useEffect(() => {
        const quill = quillRef.current.getEditor();

        const handleTextChange = (delta, oldDelta, source) => {
            // Handle text change here
            //console.log('Text changed:', delta, oldDelta, source);
        };

        // Listen for the 'text-change' event
        quill.on('text-change', handleTextChange);

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            quill.off('text-change', handleTextChange);
        };
    }, []);
    return (
        <div key={i}>
            <div className="text-editor">
                <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    onChange={handleChange}
                    value={text}
                />
            </div>
        </div>
    );
};

export default Editor;
