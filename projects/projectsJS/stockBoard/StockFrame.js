import React from 'react';

const Iframe = ({ source }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;     
    return (
        // basic bootstrap classes. you can change with yours.
        
            <div>
                <iframe src={src} height="1000" width="98%"></iframe>
            </div>
       
    );
};

export default Iframe;