import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


function HeaderContainer() {
    return (
        <div className="hContainer">
            <ImageThumbnail />
            <div class="hInnerContainer">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </div>
    )
} 

export default HeaderContainer;
