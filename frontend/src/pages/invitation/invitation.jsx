import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import styles from './invitation.module.css';

import MusicInfo from '../../components/musicInfo/musicInfo';
import api from '../../service/api';
import Characters from '../../components/characters/characters';
import Spots from '../../components/spots/spots';
import ModalContainer from '../../components/invitationTemplate/modalContainer/modalContainer';


const Invitation = () => {
  
  const history = useHistory()

  const { userName, id } = useParams();

  const [invitationData, setInvitationData] = useState(null);
  const [x, setX] = useState(0);

  const [modalState, setModalState] = useState(false);
  const [selectedStoryNumber, setSelectedStoryNumber] = useState(0);

  
  useEffect(() => {
    api.get(`/storyboard/guest/${id}`)
      .then((res) => {
        setInvitationData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);


  return (
    invitationData 
    ?
    <div
      style={{ backgroundImage: `url(${invitationData.background.backgroundImgUrl})`}}
      className={styles['invitation-container']}
    >
      <div className={styles.top}>
        <MusicInfo musicData={invitationData.music} color="white" />
        <img 
          src="/images/icon3.png" 
          alt="" 
          className={styles['logo3-img']}
          onClick={() => {history.push(`/${userName}/storyboard`);}}
        />
        <img 
          src="/images/letter1.png" 
          alt="" 
          className={styles['letter1-img']}
        />
      </div>
      <div className={styles.middle}>
        <Spots 
          storiesData={invitationData.stories} 
          weddingData={invitationData.weddingCard}
          x={x}
          setX={setX}
          setModalState={setModalState}
          modalState={modalState}
          setSelectedStoryNumber={setSelectedStoryNumber}
        />
        <Characters 
          charactersData={invitationData.character} 
          x={x}
          setX={setX}
        />
      </div>
      {
        modalState
        &&
        <div className={styles['modal-container']}>
          <ModalContainer 
            setModalState={setModalState}
            invitationData={invitationData}
            selectedStoryNumber={selectedStoryNumber}
          />
        </div>
      }
    </div>
    :
    <div>완성된 청첩장이 없습니다.</div>
  );
};

export default Invitation;