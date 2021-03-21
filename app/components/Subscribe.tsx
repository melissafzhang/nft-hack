import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import Body from "./Body";
import ContainerStyles from "./LightModule.module.css";
import HSpace from "./HSpace";
import VSpace from "./VSpace";
import CreatorCoinIcon from "./CreatorCoinIcon";


export default function Subscribe() {

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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <HSpace size="sm" />
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Body size="body" type="onBackground">
            ✨
          </Body>
          <VSpace size="xs" />
          <CreatorCoinIcon size="small" hasShadow />
          <VSpace size="xs" />

        </div>
        <HSpace size="sm" />
        <div className={ContainerStyles.container}>

          <h4 style={{ color: 'white' }}>Subscribe</h4>
          <p style={{ color: 'white' }}>50 $MATT for subscribing</p>
          <div className = "earn-card">
          <form onSubmit={registerUser}>
            <label style={{ color: 'white' }} htmlFor="Email">Email </label><br/>
            <br/>
            <input id="email" name="email" type="text" autoComplete="email" required />
            <button type="submit">Subscribe</button>
          </form>
          </div>
        </div>
      </div>
    );
}
