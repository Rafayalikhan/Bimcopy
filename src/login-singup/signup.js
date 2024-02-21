

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { HiMail } from 'react-icons/hi';
import { FaKey } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../Redux/authSlice';
import CryptoJS from 'crypto-js';
import { Link } from 'react-router-dom';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      setLoading(true);

      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setResultMessage('Invalid email address');
        return;
      }


      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
      if (!passwordRegex.test(password)) {
        setResultMessage('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one digit.');
        return;
      }
      // Basic password validation
      // if (password.length < 6) {
      //   setResultMessage('Password must be at least 6 characters long');
      //   return;
      // }

      // Your sign-up logic here
      const hashedPassword = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);


      const result = await dispatch(signUpUser({ email, password:hashedPassword }));
       
      // Check if the sign-up was successful
      if (result.error) {
        // Check if the error is due to an existing user
        if (result.error.includes('User with this email already exists')) {
          setResultMessage('User with this email already exists');
        } else {
          setResultMessage(result.error);
        }
      } else {
        // Clear the input fields
        setEmail('');
        setPassword('');

        // Update result message to show success message
        setResultMessage('Successfully registered!');

        // Redirect to login page after a brief delay
        setTimeout(() => {
          navigate('/');
        }, 2000); // Redirect after 2 seconds (adjust the delay as needed)
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
      setResultMessage('User with this email already exists');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1>Sign up</h1>
          <div>Stay updated on your professional world</div>
        </div>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.icon}>
              <HiMail size={24} />
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.inputGroup}>
            <div className={styles.icon}>
              <FaKey size={22} />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {resultMessage && (
            <div style={{ marginTop: '10px', color: resultMessage.includes('Success') ? 'green' : 'red' }}>
              {resultMessage}
            </div>
          )}

          {loading ? (
            <div style={{ width: '30px', height: '30px' }} className="loader"></div>
          ) : (
            <button className={styles.btn} onClick={handleSignUp}>
              Create Account
            </button>
          )}

<div
  style={{ marginTop: '10px', cursor: 'pointer', color: 'var(--primary)' }}
>
  <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
    Go to Login
  </Link>
</div>

          <div className="btn-linkedin">
            <a href="#" title="LinkedIn" className="btn btn-linkedin btn-lg">
              <i className="fa fa-linkedin fa-fw"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;





















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import styles from './login.module.css';
// import { HiMail } from 'react-icons/hi';
// import { FaKey } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
// import { signUpUser } from '../Redux/authSlice';

// const SignUp = (props) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate(); // Use useNavigate for navigation

//   const handleSignUp = async () => {
//     try {
//       setLoading(true);

//       // Basic email validation
//       if (!email.trim() || !email.includes('@')) {
//         setError('Invalid email address');
//         return;
//       }

//       // Basic password validation
//       if (password.length < 6) {
//         setError('Password must be at least 6 characters long');
//         return;
//       }

//       // Your sign-up logic here
//      const result = await dispatch(signUpUser({ email, password }));

//       if (result.error) {
//         // Check if the error is due to an existing user
//         if (result.error.includes('User with this email already exists')) {
//           setError('User with this email already exists');
//         } else {
//           setError(result.error);
//         }
//       } else {
//         // Redirect to login page after successful sign-up
//         setEmail('');
//         setPassword('');
//         navigate('/login');
//       }
//     }

//       // Redirect to login page after successful sign-up
     
//     catch (error) {
//       console.error('Sign-up failed:', error);
//       setError('User with this email already exists');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.main}>
//         <div className={styles.header}>
//           <h1>Sign up</h1>
//           <div>Stay updated on your professional world</div>
//         </div>
//         <div className={styles.form}>
//           <div className={styles.inputGroup}>
//             <div className={styles.icon}>
//               <HiMail size={24} />
//             </div>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>
//         </div>
//         <div className={styles.form}>
//           <div className={styles.inputGroup}>
//             <div className={styles.icon}>
//               <FaKey size={22} />
//             </div>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="Password"
//               required
//             />
//           </div>

//           {error && <div style={{ marginTop: '10px', color: 'red' }}>{error}</div>}

//           {loading ? (
//             <div style={{ width: '30px', height: '30px' }} className="loader"></div>
//           ) : (
//             <button className={styles.btn} onClick={handleSignUp}>
//               Create Account
//             </button>
//           )}

//           <div
//             style={{ marginTop: '10px', cursor: 'pointer', color: 'var(--primary)' }}
//             onClick={props.gotologin}
//           >
//             Go to Login
//           </div>

//           <div className="btn-linkedin">
//             <a href="#" title="LinkedIn" className="btn btn-linkedin btn-lg">
//               <i className="fa fa-linkedin fa-fw"></i> LinkedIn
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
