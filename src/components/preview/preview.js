import React from 'react';

import PreviewItem from '../previewItem/previewItem';

import { PreviewContainer, CollectionPreviewContainer, TitleContainer } from './previewStyle';

const Preview = (props) => {

  return (
    <CollectionPreviewContainer>
        <TitleContainer>{props.title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
          {props.items.filter((item, idx) => idx < 4).map(x=>(
            <PreviewItem key={x.id} item={x} />
          ))}  
        </PreviewContainer>
    </CollectionPreviewContainer>
  );
  


}


    

export default Preview;