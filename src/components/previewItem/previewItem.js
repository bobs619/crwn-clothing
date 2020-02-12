import React from 'react';
import './previewItem.scss';

const PreviewItem = (props) => (
        <div className='collection-item'>
            <div 
                className='image'
                style={{
                    backgroundImage: `url(${props.imageUrl})`
                }}
            />

            <div className='collection-footer'>
                <span className='name'>{props.name}</span>
                <span className='price'>{props.price}</span>
            </div>
            
        </div>
    );
    



    

export default PreviewItem;