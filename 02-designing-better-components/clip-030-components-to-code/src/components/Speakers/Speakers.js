import React from 'react';

const Speakers = () => {
    const speakers = [
        {
            imageSrc: "speakers",
            name: 'All'
        },
    ];

    return (
        <div>
            {speakers.map((speaker) => {
                const { imageSrc, name } = speaker;
                return <img src={`/images/${imageSrc}.png`}
                    alt={name}
                    key={imageSrc}></img>
            })}
        </div>
    );
};
    
export default Speakers;
