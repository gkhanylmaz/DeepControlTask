import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'context/authContext';

const LoginPage = () => {
  const { login } = useAuthContext();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage_center}>
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <div className={styles.loginPage_txt_field}>
            <input
              type="e-mail"
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
              value={password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <span></span>
            <label>Password</label>
          </div>
          <div className={styles.loginPage_pass}>Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className={styles.signUpLink}>
            Not a member? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
