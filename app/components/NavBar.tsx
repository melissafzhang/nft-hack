import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  const { query } = router;

  return (
    <div className={styles.navBar}>
      <Link href={`/${query.id}/earn`} passHref>
        <NavButton name="Earn"></NavButton>
      </Link>
      <Link href={`/${query.id}/rewards`} passHref>
        <NavButton name="Rewards"></NavButton>
      </Link>
    </div>
  );
}

const NavButton = forwardRef(
  ({ href, name }: { href: string; name: string }, ref) => {
    const router = useRouter();
    const { asPath } = router;

    return (
      <a
        ref={ref}
        href={href}
        className={
          asPath === href ? styles.navButtonActive : styles.navButtonInactive
        }
      >
        {name}
      </a>
    );
  }
);
