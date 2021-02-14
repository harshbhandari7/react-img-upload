import React, { useState, useCallback } from 'react';
import { useDropzone }from 'react-dropzone'
import AvatarEditor from 'react-avatar-editor'
import sampleImg from './logo.svg';
import './App.css';

const ImgComponent1 = () => {
    const [img, setImg] = useState(sampleImg);
    
    const onDrop = useCallback(uploadedFile => {
        console.log('ax', uploadedFile);
        setImg(uploadedFile[0]);
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    

    return (
        <div>
            <AvatarEditor
                width={250}
                height={250} 
                image={img}
                border={0}
                className="img-cls" 
            />
            <input {...getInputProps()}  />
            <div>
                <button {...getRootProps()}>
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop file here, or click to select files</p>
                    }
                </button>
            </div>
        </div>
    );
};

export default ImgComponent1;
