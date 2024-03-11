import React from 'react';

const page = ({params}) => {
    return (
        <div>
           <p className='text-center text-5xl'>This is dynamic {params.dynamicId}</p> 
        </div>
    );
};

export default page;