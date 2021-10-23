import React from 'react';
import styles from './style.module.scss'
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
export function SignInButton(){
  
  const isUserLoogedIn = true;

 /* if user is logged show option 1,
  else show button show option 2 */

  return isUserLoogedIn ? ( 
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#04d361'/>
      Matheus Alves
      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
}
