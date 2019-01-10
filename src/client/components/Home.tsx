import * as React from 'react';

export const Home = ({ ...props }: any) => {
    return (
        <div>
            <div>I'm the home component new</div>
            <button onClick={() => { console.log('Hi from the home component click22') }}>Click here</button>
        </div>
    );
}

