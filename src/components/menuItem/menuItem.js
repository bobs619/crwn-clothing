import React from 'react';
import { ContentContainer, MenuItemContainer, BackgroundImageContainer, ContentSubtitle, ContentTitle } from './menuItemStyles';
import { withRouter } from 'react-router-dom';


const MenuItem = (props) => (
    <MenuItemContainer className={`${props.size}`} onClick={()=>props.history.push(`${props.match.url}${props.linkUrl}`)}>
        <BackgroundImageContainer
            className='backgroundImage'
            imageUrl={props.imageUrl}
        />
        <ContentContainer>
            <ContentTitle>{props.title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);