import Head from "next/head";
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
        <h4 className={styles.title}>Subscribe</h4>
        <p>50 $MATT for joining</p>
        <form onSubmit={registerUser}>
          <label htmlFor="Email">Email</label>
          <input id="email" name="email" type="text" autoComplete="email" required />
          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
}
