import React from 'react';
import styles from './style.module.scss'
import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi';
import {signIn,signOut, useSession} from 'next-auth/client';

export function SignInButton(){
  const [session] = useSession();
 /* if user is logged show option 1,
  else show button show option 2 */
  console.log(session);

  return session ? ( 
    <button type='button' className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color='#04d361'/>
      {session.user.name}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button type='button' className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color='#eba417'/>
      Sign in with Github
    </button>
  )
}
