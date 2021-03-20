import React from "react";
import styles from "./Layout.module.css";
import NavBar from "./NavBar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.layout}>{children}</div>
    </div>
  );
}
