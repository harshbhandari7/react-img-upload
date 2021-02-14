import React from 'react';
import AvatarEditor from 'react-avatar-editor'
import sampleImg from './logo.svg';
import './App.css';

const ImgComponent2 = () => {
    const a = 10;
    return (
        <div>
            <AvatarEditor
                image={sampleImg}
                width={150}
                height={150}
                border={0}
                // borderRadius={100}
                // color={[255,255,255,1]} // RGBA
                // scale={1.2}
                // rotate={0}
                className="img-cls"
            />
        </div>
    );
};

export default ImgComponent2;
