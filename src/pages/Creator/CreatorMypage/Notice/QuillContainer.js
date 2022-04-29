import React, { useState } from 'react';
import Quill from 'quill';
import ReactQuill from 'react-quill';
import ImageResize from '@looop/quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

Quill.register('modules/ImageResize', ImageResize);
function QuillContainer() {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: {
      container: [
        ['clean', 'bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ header: [1, 2, 3, false] }],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        ['link', 'image'],
      ],
    },
    ImageResize: { modules: ['Resize'] },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'size',
    'color',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
  ];

  const onChangeValue = e => {
    setValue(e);
  };

  return (
    <div>
      <Editor
        value={value}
        modules={modules}
        formats={formats}
        onChangeValue={onChangeValue}
      />
    </div>
  );
}

export default QuillContainer;

const Editor = styled(ReactQuill)`
  .ql-container {
    height: 360px;
  }
`;
