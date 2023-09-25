"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";


export default function contact(){
  let handle = () => [alert("your form is successfully submitted")];
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
      <div>
        <h2 style={{ textAlign: "center" }}>Feel Free to contact Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0344762724812!2d78.37329000000001!3d17.458063900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d02669288b%3A0x469ff720ea33467b!2sWestern%20Pearl%2C%20Hitech%20City%20Rd%2C%20Kothaguda%2C%20Hyderabad%2C%20Telangana%20500084!5e0!3m2!1sen!2sin!4v1695328318191!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.contact}>
          <form className={styles.forms} onSubmit={handle}>
            <input
              type="text"
              placeholder="username"
              name="username"
              className={styles.inputs}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className={styles.inputs}
            />
              <input
              type="password"
              placeholder="password"
              name="password"
              className={styles.inputs}
            />
            <button className={styles.buttons} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      </main>
     )
}
