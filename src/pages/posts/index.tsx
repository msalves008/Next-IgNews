import { GetStaticProps } from "next";
import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";
import Prismic from '@prismicio/client'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>09 de janeiro de 2022</time>
            <strong>How to create Your Blog in 5 minutes!!!</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              animi sequi quaerat sunt, velit expedita eveniet placeat provident
              modi, repudiandae consequuntur explicabo quo libero mollitia
              sapiente eos culpa? Temporibus, in
            </p>
          </a>
          <a href='#'>
            <time>09 de janeiro de 2022</time>
            <strong>How to create Your Blog in 5 minutes!!!</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              animi sequi quaerat sunt, velit expedita eveniet placeat provident
              modi, repudiandae consequuntur explicabo quo libero mollitia
              sapiente eos culpa? Temporibus, in
            </p>
          </a>
          <a href='#'>
            <time>09 de janeiro de 2022</time>
            <strong>How to create Your Blog in 5 minutes!!!</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              animi sequi quaerat sunt, velit expedita eveniet placeat provident
              modi, repudiandae consequuntur explicabo quo libero mollitia
              sapiente eos culpa? Temporibus, in
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () =>{
  const prismic =  getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'publication')],{
      fetch:['publication.title', 'publication.content'],
      pageSize: 100,
    }
  )
  console.log(response)
  return { 
    props: {

    }
  }
}