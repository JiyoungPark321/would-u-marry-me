import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './signInForm.module.css';
import api from '../../service/api';

const SignInForm = () => {

  const history = useHistory()

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handlerUserName = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]/g, '');
    setUserName(value);
    e.target.value = value;
  }

  const onSignIn = () => {
    if ((userName !== '') && (password !== '')) {
      api.post('/login', {
        userName,
        password
      })
        .then((res) => {
          localStorage.setItem("jwt", res.headers.authorization);
          const userNameData = JSON.parse(atob(res.headers.authorization.split('.')[1]));
          return userNameData;
        })
        .then(({ sub }) => {
          console.log(sub);
          const Authorization = localStorage.getItem("jwt");
          api.post('/account/search/account', {
            userName: sub
          },
          {
            headers: { Authorization }
          })
            .then((res) => {
              console.log(res);
              localStorage.setItem("userId", res.data.data.id);
              localStorage.setItem("nickName", res.data.data.nickName);
              localStorage.setItem("phoneNumber", res.data.data.phoneNumber);
              localStorage.setItem("userName", res.data.data.userName);
              history.push(`/${sub}/storyboard`);
            })
            .catch((err) => {
              console.error(err);
            })
        })
        .catch((err) => {
          console.error(err);
          alert('id 와 password 를 확인해주세요')
        })
    }
  }

  const goSignUp = () => {
    history.push('/signup');
  }

  
  return (
    <div className={styles['sign-in']}>
      <p className={styles['sign-in-text']}>로그인</p>
      <div>
        <div className={styles['id-container']}>
          <label 
            className={styles['input-label']}
            htmlFor="sign-in-id"
          >아이디</label>
          <div>
            <input 
              className={styles['input-field-style2']}
              id="sign-in-id" 
              type="text"
              minLength="2"
              maxLength="7"
              placeholder="Id"
              onChange={handlerUserName} 
            />
          </div>
        </div>
        <div>
          <label 
            className={styles['input-label']}
            htmlFor="sign-in-password"
          >비밀번호</label>
          <input 
            className={styles['input-field-style2']}
            id="sign-in-password" 
            type="password"
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value);}} 
          />
        </div>
      </div>
      <div>
        <button 
          className={`${styles['button-common-styles']} ${styles['sign-in-button']}`}
          onClick={onSignIn}>
          로그인
        </button>
        <div className={styles['buttons-container']}>
          <button 
            className={`${styles['button-common-styles']} ${styles['sign-up-button']}`}
            onClick={goSignUp}
          >
            회원가입하기
          </button>
          <button className={`${styles['button-common-styles']} ${styles['find-password-button']}`}>
            비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;