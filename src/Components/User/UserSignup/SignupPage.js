// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import './signuppage.css';
// import { signup } from '../../../Services/Userapi';

// const SignupPage = () => {
//   const initialValues = {
//     username: '',
//     email: '',
//     password: ''
//   };

//   const handleSubmit = async (values) => {
//     // You can implement your signup logic here
//     console.log(values);
//     const{data} = await signup(values)
//   };

//   const validate = (values) => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = 'Required';
//     }
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (!values.password) {
//       errors.password = 'Required';
//     }
//     return errors;
//   };

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validate={validate}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <Field type="text" id="username" name="username" />
//               <ErrorMessage name="username" component="div" className="error" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <Field type="email" id="email" name="email" />
//               <ErrorMessage name="email" component="div" className="error" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <Field type="password" id="password" name="password" />
//               <ErrorMessage name="password" component="div" className="error" />
//             </div>
//             <button type="submit" disabled={isSubmitting}>Sign Up</button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignupPage;
