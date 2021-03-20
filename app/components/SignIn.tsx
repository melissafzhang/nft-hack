import { providers as getProviders, signIn } from 'next-auth/client'
import { AppProvider, DefaultProviders, Provider } from 'next-auth/providers'
import { useEffect, useState } from 'react';
import styles from "./SignIn.module.css";

export default function SignIn() {
  const [providers, setProviders] = useState<any>([]);

  useEffect(()=>{
    const fetchData = async () => {
      setProviders(await getProviders());
    }
    fetchData()
  }, [])

  return (
    <div className={styles.signinWrapper}>
    <div className={styles.signinContainer}>
      <p className={styles.signinLabel}>Sign in</p>
      <p>Sign in withyour Rally account to begin.</p>
      {Object.values(providers).map((provider: Provider) => (
        <div key={provider.name}>
          <button type="button" className={styles.signinButton} onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
        </div>
      ))}
      <a className={styles.createAccountLabel} href="https://rally.io/signup/" target="_blank">Create an account with Rally</a>
    </div>
    </div>
  )
}