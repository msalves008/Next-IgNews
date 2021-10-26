import Head from 'next/head'
import {GetStaticProps} from 'next'
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../stripe/stripe';
interface HomeProps{
  product:{
    priceId:string;
    amount:number;
  }
}

export default function Home({product}:HomeProps) {

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
            <span>for {product.amount} month</span>
            <SubscribeButton priceId={product.priceId}/>
          </p>
        </section>
        <img src="/images/avatar.svg"/>
      </main>
      
    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JoCQCIpXTwYqKDsmxLyFhow',{
    expand: ['product']
  })
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)

  }
  return {
    props: {
      product
    },
    revalidate: 60*60*24, //24 horas
  }
}
