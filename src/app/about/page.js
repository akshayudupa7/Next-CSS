"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function about(){
     return(
      <main>
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
      <div className={styles.main}>
        <div>
          <p style={{"color":"grey"}}>Hi I am </p>
          <h1 >AKSHAY UDUPA</h1>
          <p style={{"color":"grey"}}>I am software engineer working in xyz company</p>
          <button className={styles.buttons}>View More</button>
        </div>
        <div className={styles.main_image}>
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="computer"
            width={200}
            height={200}
            style={{  borderRadius:"40px"}}
          />
        </div>
      </div>
      </main>
     )
}
