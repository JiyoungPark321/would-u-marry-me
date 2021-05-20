import React, { useEffect, useState } from 'react';
import styles from './modalContainer.module.css';

import InvitationStory1 from '../story/invitationStory1/invitationStory1';
import InvitationStory2 from '../story/invitationStory2/invitationStory2';
import InvitationStory3 from '../story/invitationStory3/invitationStory3';
import InvitationStory4 from '../story/invitationStory4/invitationStory4';
import InvitationStory5 from '../story/invitationStory5/invitationStory5';

import InvitationWedding1 from '../wedding/invitationWedding1/invitationWedding1';
import InvitationWedding2 from '../wedding/invitationWedding2/invitationWedding2';
import InvitationWedding3 from '../wedding/invitationWedding3/invitationWedding3';
import InvitationWedding4 from '../wedding/invitationWedding4/invitationWedding4';


const ModalContainer = ({ setModalState, invitationData, selectedStoryNumber }) => {
  
  const [modalData, setModalData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  useEffect(() => {
    console.log(selectedStoryNumber);
    console.log(invitationData);
    if (selectedStoryNumber === 5) {
      setModalData(invitationData.weddingCard);
      setSelectedTemplate(invitationData.weddingCard.template + 5);
    } else {
      setModalData(invitationData.stories[selectedStoryNumber]);
      setSelectedTemplate(invitationData.stories[selectedStoryNumber].template);
    }
  },[]);

  return (
    <> 
      { 
        selectedTemplate === 1
        ? <InvitationStory1 setModalState={setModalState} modalData={modalData} /> 
        : selectedTemplate === 2
        ? <InvitationStory2 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 3
        ? <InvitationStory3 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 4
        ? <InvitationStory4 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 5
        ? <InvitationStory5 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 6
        ? <InvitationWedding1 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 7
        ? <InvitationWedding2 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 8
        ? <InvitationWedding3 setModalState={setModalState} modalData={modalData} />
        : selectedTemplate === 9
        ? <InvitationWedding4 setModalState={setModalState} modalData={modalData} />
        : ''
      }
    </>
  );
};

export default ModalContainer;