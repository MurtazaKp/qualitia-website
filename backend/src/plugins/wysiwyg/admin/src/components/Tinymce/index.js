// /src/plugins/wysiwyg/admin/src/components/Tinymce/index.js

import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';
const TinyEditor = ({ onChange, name, value, disabled }) => {
    const onChangeRef = useRef(onChange);
    function onBlur(ev, editor) {
        const content = editor.getContent();
        onChangeRef.current({ target: { name, value: content, type: 'wysiwyg' } });
    }
    return (
        <>
            <Editor
                apiKey={'94dh4qnv8vdr6hvck7b39uym4ukxv1eermmjvwl6iqhb5bqq'}
                value={value}
                tagName={name}
                onEditorChange={(editorContent) => {
                    onChange({ target: { name, value: editorContent } });
                }}
                outputFormat='html'
                init={{
                    selector: 'textarea',
                    language: "en",
                    height: 500,
                    menubar: true,
                    // extended_valid_elements: "span, img, small",
                    forced_root_block: "",
                    convert_urls: true,
                    entity_encoding: "raw",
                    plugins:
                        "advlist autolink lists link image charmap preview anchor \
                    searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                    insertdatetime media table code help wordcount textcolor",
                    toolbar:
                        "undo redo | styles | bold italic forecolor backcolor | lineheight | removeformat | alignleft aligncenter alignright alignjustify \
                    table emoticons visualblocks code| blockquote |\
                    nonbreaking bullist numlist outdent indent | link image | fullscreen",
                    line_height_formats: '1 1.1 1.2 1.3 1.4 1.5 1.7 2',
                    style_formats: [
                        {
                            title: "Headings",
                            items: [
                                { title: "h1", block: "h1" },
                                { title: "h2", block: "h2" },
                                { title: "h3", block: "h3" },
                                { title: "h4", block: "h4" },
                                { title: "h5", block: "h5" },
                                { title: "h6", block: "h6" },
                            ],
                        },
                        {
                            title: "Text",
                            items: [
                                { title: "Paragraph", block: "p", classes: ['paragraph'] },
                                { title: "Paragraph 1", block: "p", classes: ['paragraph_p1'] },
                                { title: "Paragraph 2", block: "p", classes: ['paragraph_p2'] },
                            ],
                        },
                        {
                            title: "Font weights",
                            items: [
                                { title: "Normal", inline: 'strong', classes: ['font_normal'] },
                                { title: "Medium", inline: 'strong', classes: ['font_medium'] },
                                { title: "Semibold", inline: 'strong', classes: ['font_semibold'] },
                                { title: "Bold", inline: 'strong', classes: ['font_bold'] },
                            ],
                        },
                    ],
                    content_style: `
                    body {
                        max-width: 720px;
                        margin: 0 auto;
                    }
                    .paragraph {
                        font-size: 16px;
                    }
                    .paragraph_p1 {
                        font-size: 18px;
                    }
                    .paragraph_p2 {
                        font-size: 20px;
                    }
                    .font_normal { 
                        font-weight: 400;
                    }
                    .font_medium { 
                        font-weight: 500;
                    }
                    .font_semibold {
                        font-weight: 600;
                    }
                    .font_bold {
                        font-weight: 700;
                    }
                    body ul li p {
                     margin-top: 0px;
                     margin-bottom: 0.75ex;
                    }
                    body ol li p {
                     margin-top: 0px;
                     margin-bottom: 0.75ex;
                    }
                    body table th p {
                     margin-block: 0px;
                    }
                    body ul li a {
                     word-break: break-all;
                    }
                    `,
                }}
            />
        </>
    );
}
TinyEditor.defaultProps = {
    value: '',
};
TinyEditor.propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
};
export default TinyEditor;