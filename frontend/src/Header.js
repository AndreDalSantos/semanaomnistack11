import React from 'react';

function Header(props) {
    return (
        <header>
            {/* <h1>{props.title}</h1> */}  {/*title*/}
            <h1>{props.children}</h1>
        </header>
    );
}

export default Header;