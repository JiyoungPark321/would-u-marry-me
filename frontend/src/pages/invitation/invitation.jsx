import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './invitation.module.css';

import MusicInfo from '../../components/musicInfo/musicInfo';
import api from '../../service/api';
import Characters from '../../components/characters/characters';
import Spots from '../../components/spots/spots';
import InvitationStory1 from '../../components/invitationTemplate/story/invitationStory1/invitationStory1';
import InvitationStory2 from '../../components/invitationTemplate/story/invitationStory2/invitationStory2';
import InvitationStory3 from '../../components/invitationTemplate/story/invitationStory3/invitationStory3';
import InvitationStory4 from '../../components/invitationTemplate/story/invitationStory4/invitationStory4';
import InvitationStory5 from '../../components/invitationTemplate/story/invitationStory5/invitationStory5';
import InvitationWedding1 from '../../components/invitationTemplate/wedding/invitationWedding1/invitationWedding1';


const Invitation = () => {
  const { id } = useParams();

  const [invitationData, setInvitationData] = useState(null);
  const [x, setX] = useState(0);

  const [modalState, setModalState] = useState(false);

  
  useEffect(() => {
    api.get(`/storyboard/${id}`, {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    })
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
        />
        <Characters 
          charactersData={invitationData.character} 
          x={x}
          setX={setX}
        />
      </div>
      <div className={styles.test}>
        {/* <InvitationStory1 /> */}
        {/* <InvitationStory2 /> */}
        {/* <InvitationStory3 /> */}
        {/* <InvitationStory4 /> */}
        {/* <InvitationStory5 /> */}
        <InvitationWedding1 />


      </div>
    </div>
    :
    <div>완성된 청첩장이 없습니다.</div>
  );
};

export default Invitation;