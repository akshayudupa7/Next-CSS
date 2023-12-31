"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  let handle = () => [alert("your form is successfully submitted")];
  return (
    <main className={roboto.className}>
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
          <p style={{ color: "grey" }}>Hi I am </p>
          <h1>AKSHAY UDUPA</h1>
          <p style={{ color: "grey" }}>
            I am software engineer working in xyz company
          </p>
          <button className={styles.buttons}>View More</button>
        </div>
        <div className={styles.main_image}>
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="computer"
            width={200}
            height={200}
            style={{ borderRadius: "40px" }}
          />
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
  );
}
