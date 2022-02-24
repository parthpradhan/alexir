import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  return (
    <div className="second">
      <h2 className='upload-text'>Upload Artwork</h2>
      <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span className='plus'>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <div className='prog'><ProgressBar file={file} setFile={setFile} /></div> }
      </div>
    </form>
    </div>
  );
}

export default UploadForm;