import Head from 'next/head';
import { Add, Right } from '../utils/icons';
import styles from '../styles/Login.module.scss';
import Footer from '../components/Footer';

export default function Home(): React.ReactElement {

  return (
    <>
      <Head>
        <title>Netflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
      </Head>
      <div className={styles.navbar}>
        <li className={styles.logo}><img src='/assets/logo.png' alt='' width={90} height={30} /></li>
        <a className="btn btn-danger" href='/browse' style={{ marginRight: 25 }}>Sign In</a>

      </div>
      <div className={styles.main}>
        <div className={styles.area}>
          <h1>Unlimited movies, TV <br />shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <div className={styles.search}>
            <input type="text" className="form-control" placeholder="Email" />
            <a className={styles.try} href='/browse'>Try 30 days free <Right /></a>
          </div>
          <h4>Ready to watch? Enter your email to create or access your account</h4>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.text}>
          <h1>Enjoy on your TV.
          </h1>
          <p>
            Watchx on Smart TVs, Playstation, Xbox, <br />
            Chromecast, Apple TV, Blu-ray players, and<br />
            more.
          </p>
        </div>
        <div className={styles.image}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.image}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile.png" />
        </div>
        <div className={styles.text}>
          <h1>Download your shows to watch on the go.
          </h1>
          <p>
            Save your data and watch all your favorites offline.
          </p>
        </div>
      </div>

      <div className={styles.container1}>
        <div className={styles.text}>
          <h1>Watch everywhere.</h1>
          <p>Stream unlimited movies and TV shows on <br />your phone, tablet, laptop, and TV without paying more.</p>
        </div>
        <div className={styles.image}>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" />
        </div>
      </div>
      <div className={styles.question}>
        <h1>Frequently Asked Questions
        </h1>
        <div className={styles.quest}>
          <div className={styles.textbox}>What is Netflix?</div>
          <Add />
        </div>
        <div className={styles.quest}>
          <div className={styles.textbox}>How much does Netflix cost?</div>
          <Add />
        </div>
        <div className={styles.quest}>
          <div className={styles.textbox}>Where can I watch?</div>
          <Add />
        </div>
        <div className={styles.quest}>
          <div className={styles.textbox}>How do I cancel?</div>
          <Add />
        </div>
        <div className={styles.quest}>
          <div className={styles.textbox}>What can I watch on Netflix??</div>
          <Add />
        </div>
        <div className={styles.quest}>
          <div className={styles.textbox}>What is Netflix?</div>
          <Add />
        </div>
        <div className={styles.search1}>
          <input type="text" className="form-control" placeholder="Email" />
          <a className={styles.try1} href='/browse'>
            Try 30 days free <Right />
          </a>
        </div>
        <h4>Ready to watch? Enter your email to create or access your account
        </h4>
      </div>
      <Footer />
    </>
  );
}
