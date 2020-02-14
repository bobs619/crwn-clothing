import React from 'react';
import './preview.scss';
import PreviewItem from '../previewItem/previewItem';

const Preview = (props) => {

  return (
    <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>
          {props.items.filter((item, idx) => idx < 4).map(x=>(
            <PreviewItem key={x.id} item={x} />
          ))}  
        </div>
    </div>
  );
  


}


    

export default Preview;