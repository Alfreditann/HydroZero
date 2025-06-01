"use client";
import Link from "next/link";
import Cart  from "../cart";
import styles from "../page.module.css";
export default function Test() {
 
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <Cart title="Alfred"></Cart>
        <Link href="/">
          <h3>Gå til Forsiden </h3>
        </Link>
      </main>
    </div>
  );
}
