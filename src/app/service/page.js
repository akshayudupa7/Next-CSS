"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function Service() {

  return (
    <main >
      <div className={styles.home}>
        <div>
        <Image
            src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
            alt="computer"
            width={60}
            height={60}
          />
        </div>
        <div>
          <ul className={styles.list}>
            <li>
              {" "}
              <Link className={styles.sub_list} href="/">
                Home
              </Link>
            </li>
            <li className={styles.ordered_list}>
              {" "}
              <Link className={styles.sub_list} href="/about">
                About
              </Link>
            </li>
            <li className={styles.ordered_list}>
              {" "}
              <Link className={styles.sub_list} href="/service">
                Service
              </Link>
            </li>
            <li className={styles.ordered_list}>
              {" "}
              <Link className={styles.sub_list} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.master}>
        <h2 style={{ textAlign: "center" }}>OUR SERVICES</h2>
        <div className={styles.service}>
          <div className={styles.sub_service}>
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              alt="computer"
              width={200}
              height={200}
              style={{ margin: "auto" }}
            />
            <h2>SAP</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={styles.sub_service}>
            <Image
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="computer"
              width={200}
              height={200}
            />
            <h2>Web Development</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className={styles.sub_service}>
            <Image
              src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="computer"
              width={200}
              height={200}
            />
            <h2>App Development</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    
    </main>
  );
}
