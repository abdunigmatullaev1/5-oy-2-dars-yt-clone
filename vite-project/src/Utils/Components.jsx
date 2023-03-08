import React from 'react';

const LinkSidebar = ({ linkIcon, text, link}) => {
    return (
        <div className="sidebar__category">
        <i className="material-icons">library_add_check</i>
        <span>Library</span>
        </div>
    );
}

export {LinkSidebar};
