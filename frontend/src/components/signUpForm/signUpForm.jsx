import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './signUpForm.module.css';
import api from '../../service/api';

const SignUpForm = () => {

  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [idDuplicateCheck, setIdDuplicateCheck] = useState(false);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [nickName, setNickName] = useState('');
  const [nickNameDuplicateCheck, setNickNameDuplicateCheck] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreementBox, setAgreementBox] = useState(false);


  const handleUserName = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]{2,7}/g, '');
    setUserName(value);
    setIdDuplicateCheck(false);
    e.target.value = value;
  }

  const doIdDuplicateCheck = (e) => {
    if ( 1 < userName.length && userName.length < 8 ) {
      api.post('/account/id', { userName })
        .then((res) => {
          setIdDuplicateCheck(true);
          console.log(res);
        })
        .catch((err) => {
          alert('이미 사용중인 Id 입니다.')
        })
    }
  };

  const handleNickName = (e) => {
    const value = e.target.value.replace(/[^A-Za-z0-9]{2,7}/g, '');
    setNickName(value);
    setNickNameDuplicateCheck(false);
    e.target.value = value;
  }

  const doNickNameDuplicateCheck = () => {
    if ( 1 < userName.length && userName.length < 8 ) {
      api.post('/account/nickname', { nickName })
        .then((res) => {
          setNickNameDuplicateCheck(true);
          console.log(res);
        })
        .catch((err) => {
          alert('이미 사용중인 닉네임 입니다.')
        })
    }
  }

  const phoneNumberHandler = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 11) {
      value = value.slice(0,11)
    } 
    setPhoneNumber(value);
    console.log(phoneNumber);
    e.target.value = value;
  }

  const onSignUp = () => {
    if (idDuplicateCheck === false) {
      alert('아이디 중복체크를 해주세요.')
      return;
    } 
    if (nickNameDuplicateCheck === false) {
      alert('닉네임 중복체크를 해주세요.')
      return;
    }
    if (idDuplicateCheck 
        && (password2 === password2) 
        && nickNameDuplicateCheck 
        && (phoneNumber.length === 11) 
        && agreementBox) {
      api.post('/account', {
        nickName,
        phoneNumber,
        userName,
        password: password1,
      })
        .then((res) => {
          console.log(res);
          history.push('/signin')
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };

  return (
    <div className={styles['sign-up']}>
      <div className={styles.title}>
        <button 
          className={styles['back-button']}
          onClick={() => {history.push('/signin')}}>
          <i className="fas fa-arrow-left"></i>
        </button>
        <p className={styles['sign-up-text']}>회원가입</p>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-id"
        >아이디</label>
        <div>
          <input 
            className={styles['input-field-style1']}
            id="sign-up-id"
            type="text" 
            placeholder="Id"
            onChange={handleUserName}
          />
          <button 
            className={`${styles['duplicate-check-button']} ${idDuplicateCheck && styles['completed-state']}`} 
            onClick={doIdDuplicateCheck}
          >중복체크</button>
          {
            userName.length < 2 | userName.length > 7
            ? <p className={styles['error-message']}>아이디는 2~7 자리 사용가능 합니다.</p>
            : <></>
          }
        </div>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-password"
        >비밀번호</label>
        <input 
          className={styles['input-field-style2']}
          id="sign-up-password"
          type="password" 
          placeholder="Password"
          onChange={(e) => {setPassword1(e.target.value);}}
        />
      </div>
      <div className={styles['password-check-container']}>
        <div>
          <label 
            className={styles['input-label']}
            htmlFor="sign-up-password-check"
          >비밀번호 확인</label>
          <input 
            className={styles['input-field-style2']}
            id="sign-up-password-check"
            type="password" 
            placeholder="Password Check"
            onChange={(e) => {setPassword2(e.target.value);}}
          />
        </div>
        { 
          password1 !== password2 && <p className={styles['error-message']}>비밀번호가 일치하지 않습니다.</p>
        }
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-nickname"
        >닉네임</label>
        <div>
          <input
            className={styles['input-field-style1']}
            id="sign-up-nickname"
            type="text"
            placeholder="Nickname"
            onChange={handleNickName}
        />
          <button 
            className={`${styles['duplicate-check-button']} ${nickNameDuplicateCheck && styles['completed-state']}`} 
            onClick={doNickNameDuplicateCheck}
          >중복체크</button>
          {
            nickName.length < 2 | nickName.length > 7
            ? <p className={styles['error-message']}>닉네임은 2~7 자리 사용가능 합니다.</p>
            : <></>
          }
        </div>
      </div>
      <div>
        <label 
          className={styles['input-label']}
          htmlFor="sign-up-phone-number"
        >전화번호</label>
        <input 
          className={styles['input-field-style2']}
          id="sign-up-phone-number"
          type="text"
          pattern="[0-9]+" 
          placeholder="PhoneNumber"
          onChange={phoneNumberHandler}
        />
      </div>
      <div className={styles['agreement-container']}>
        <input
          className={styles['agreement-checkbox']}
          type="checkbox" 
          id="sign-up-agreement" 
          name="agreement" 
          value="agreement"
          onClick={() => {setAgreementBox(!agreementBox)}}
        />
        <label
          className={styles['agreement-text']}
          htmlFor="sign-up-agreement"
        >
          가입에 동의 하시겠습니까?
        </label>
      </div>
      <button 
        className={styles['sign-up-button']}
        onClick={onSignUp}>
        회원가입하기
      </button>
    </div>
  );
};

export default SignUpForm;
