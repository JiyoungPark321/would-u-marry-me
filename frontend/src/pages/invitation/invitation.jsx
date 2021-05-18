import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styles from './invitation.module.css';

import MusicInfo from '../../components/musicInfo/musicInfo';
import api from '../../service/api';


const Invitation = () => {
  const { id } = useParams();
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    api.get(`/storyboard/${id}`, {
      headers: {
        Authorization: localStorage.getItem("jwt")
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
  },[]);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})`}}
    >
      <MusicInfo />
      
    </div>
  );
};

export default Invitation;