import React from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div className={styles.loginBody}>
      <div className={styles.container}>
        <div className={styles.containerForms}>
          <div className={styles.containerInfo}>
            <div className={styles.infoItem}>
              <div className={styles.table}>
                <div className={styles.tableCell}>
                  <p>Have an account?</p>
                  <button className={styles.infoBtn}>Log in</button>
                </div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.table}>
                <div className={styles.tableCell}>
                  <p>Don&apos;t have an account?</p>
                  <button className={styles.infoBtn}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerForm}>
            <div className={"form-item log-in"}>
              <div className={styles.table}>
                <div className={styles.tableCell}>
                  <input
                    className={styles.input}
                    name="Username"
                    placeholder="Username"
                    type="text"
                  />
                  <input
                    className={styles.input}
                    name="Password"
                    placeholder="Password"
                    type="Password"
                  />
                  <button className={styles.btn}>Log in</button>
                </div>
              </div>
            </div>
            <div className={"form-item sign-up"}>
              <div className={styles.table}>
                <div className={styles.tableCell}>
                  <input
                    className={styles.input}
                    name="email"
                    placeholder="Email"
                    type="text"
                  />
                  <input
                    className={styles.input}
                    name="fullName"
                    placeholder="Full Name"
                    type="text"
                  />
                  <input
                    className={styles.input}
                    name="Username"
                    placeholder="Username"
                    type="text"
                  />
                  <input
                    name="Password"
                    placeholder="Password"
                    type="Password"
                    className={styles.input}
                  />
                  <button className={styles.btn}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
