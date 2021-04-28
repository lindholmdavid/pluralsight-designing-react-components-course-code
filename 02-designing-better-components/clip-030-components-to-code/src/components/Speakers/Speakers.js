import React, {useContext} from 'react';
import { SpeakerContext } from '../../../pages/speakers';

const Speakers = () => {
    const speakers = useContext(SpeakerContext);
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
