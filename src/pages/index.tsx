import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ig News</title>
      </Head>
      <main className={styles.contentcontainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publucations <br/>
            <span>for $9.99 month</span>
            <SubscribeButton/>
          </p>
        </section>
        <img src="/images/avatar.svg"/>
      </main>
      
    </>
  )
}
