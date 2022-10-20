import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import data from "../data.json";

const Article: NextPage = ({
  extra,
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Brightsites seo test</title>
        <meta name="description" content="Brightsites seo test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Seo brightsites test</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public,  s-maxage=300, stale-while-revalidate=59"
  );
  context.res.setHeader("Content-Security-Policy", `frame-ancestors 'self';`);

  try {
    return {
      props: {
        ...data,
      },
    };
  } catch (err) {
    return { props: { data: "err" } };
  }
};
export default Article;
