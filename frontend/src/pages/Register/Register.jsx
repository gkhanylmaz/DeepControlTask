import { useAuthContext } from 'context/authContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';

const Register = () => {
  const { register } = useAuthContext();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const { name, email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    register(formData);
  };

  return (
    <div>
      <div className={styles.loginPage}>
        {/* <Image src={logo} alt="Logo"  className={styles.loginPage_logo} /> */}
        <div className={styles.loginPage_center}>
          <h1>Sign Up</h1>
          <form method="post" onSubmit={handleSubmit}>
            <div className={styles.loginPage_txt_field}>
              <input
                type="fullname"
                required
                value={name}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
              />
              <span></span>
              <label>FullName</label>
            </div>
            <div className={styles.loginPage_txt_field}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <span></span>
              <label>E-mail</label>
            </div>
            <div className={styles.loginPage_txt_field}>
              <input
                type="password"
                required
                alue={password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <span></span>
              <label>Password</label>
            </div>
            <input type="submit" value="Signup" />
            <div className={styles.signUpLink}>
              Are you a member?
              <Link className="form-other" to="/login">
                Login Here!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
