import React from 'react';
import Aux from './Auxilery'

const Layout = props => {
    return (
        <Aux>
            <main >
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;