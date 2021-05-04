import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Jaehyuk from './pages/jaehyuk';
import Jiyoung from './pages/jiyoung';
import Sungjoon from './pages/sungjoon';

import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';
import StoryBoard from './pages/storyBoard/storyBoard';


const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/jiyoung" component={Jiyoung} exact />
        <Route path="/jaehyuk" component={Jaehyuk} exact />
        <Route path="/sungjoon" component={Sungjoon} exact />
        
        <Route path="/signup" component={SignUp} exact />
        <Route path="/signin" component={SignIn} exact />

        {/* 아이디 수정 */}
        <Route path="/:id/storyboard" component={StoryBoard} exact />
        {/* <Route path="/:id/storyboard" component={localStorage.getItem('id') ? StoryBoard : SignIn} exact /> */}

      </Switch>

    </div>
  );
}

export default App;
