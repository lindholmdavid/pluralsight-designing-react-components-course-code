import Menu from '../src/components/Menu/Menu';
import Header from '../src/components/Header/Header';
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar';
import Speakers from '../src/components/Speakers/Speakers';
import Footer from '../src/components/Footer/Footer';
import React from 'react';

import SpeakerContext from '../src/components/Speakers/SpeakerContext';

export default function Page() {
  const speakers = [
    {
        imageSrc: "speakers",
        name: 'All'
    },
];
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerContext.Provider value={speakers}>
        <SpeakerSearchBar />
        <Speakers />
      </SpeakerContext.Provider>
      <Footer />
    </div>
  );
}

