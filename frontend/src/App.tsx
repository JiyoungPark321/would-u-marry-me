import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';

import Jaehyuk from './pages/jaehyuk';
import Jiyoung from './pages/jiyoung';
import Jiyoung2 from './pages/jiyoung2';
import Sungjoon from './pages/sungjoon';

import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';
import myStoryBoard from './pages/myStoryBoard/myStoryBoard';
import StoryBoard from './pages/storyBoard/storyBoard';


const App = () => {
  return (
    <div className={styles.container}>
      <Switch>
        <Route path="/jiyoung" component={Jiyoung} exact />
        <Route path="/jiyoung2" component={Jiyoung2} exact />
        <Route path="/jaehyuk" component={Jaehyuk} exact />
        <Route path="/sungjoon" component={Sungjoon} exact />
        
        <Route path="/" component={SignIn} exact />
        
        <Route path="/signup" component={SignUp} exact />
        <Route path="/signin" component={SignIn} exact />

        {/* 다른 사람 페이지에 못들아가게 처리하는 방법? 추가해야함 */}
        <Route path="/:userName/storyboard" component={localStorage.getItem('userId') ? myStoryBoard : SignIn} exact />
        
        <Route path="/:userName/storyboard/:id" component={localStorage.getItem('userId') ? StoryBoard : SignIn} exact />


      </Switch>

    </div>
  );
}

export default App;
