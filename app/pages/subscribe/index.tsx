import Head from "next/head";
import Image from 'next/image';
import styles from "../../styles/Home.module.css";
import Link from "next/link";


export default function Home() {

    const registerUser = async event => {
      event.preventDefault()

      const res = await fetch(
        '/api/subscribe',
        {
          body: JSON.stringify({
            Email: event.target.email.value,
            Subscibe: "2",
            userid: "7",
            creatorid: "7",
            referralcode: "12345"
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )

      const result = await res.json();
      console.log(result);
    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h5>Subscribe</h5>
        <p>50 $MATT for subscribing</p>
        <div className = "earn-card">
        <form onSubmit={registerUser}>
          <label htmlFor="Email">Email</label>
          <input id="email" name="email" type="text" autoComplete="email" required />
          <button type="submit">Subscribe</button>
        </form>
        </div>


        <br/>
        <h5>Refer a friend</h5>
        <p>50 $MATT for joining</p>
        <div className = "earn-card">
          <label htmlFor="refurl">referral url: </label>
          <input value= 'https://refer-matt.com' id="refurl" name="refurl" type="text" autoComplete="refurl" required />
          <h6>Or share via..</h6>
          <div class="centered">

            <section class="cards">

                <img src = '/public/images/email.svg'/>
                <img src = '/public/images/twitter.svg'/>
                <img src = '/public/images/whatsApp.svg'/>
                <img src = '/public/images/sms.svg'/>

            </section>
</div>
        </div>
      </main>
    </div>
  );
}
