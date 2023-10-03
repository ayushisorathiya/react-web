import React from 'react';
import { useFormik } from 'formik';
import { registrationSchema } from '../schemas/validationData';

const FormikValidation = () => {

    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = useFormik({
        initialValues,
        validationSchema: registrationSchema,
        onSubmit: (values, action) => {
            console.log("VALUES", values);
            action.resetForm();
        },
    })

    return (
        <div>
            <div className="container">
                <div className="home-left">
                    <div className="left-main">
                        <div className="heading">
                            <h1>Hello World</h1>

                        </div>
                        <div className="left-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio, dolorem quis ea, facilis praesentium omnis necessitatibus, ab exercitationem repellendus nulla alias delectus.</p>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime eveniet veritatis, enim omnis nihil dolor laudantium. Minima facere similique totam, rerum culpa aperiam expedita! Praesentium voluptates, debitis omnis commodi sequi mollitia in at nesciunt, ipsa quae delectus qui saepe.</p>
                        </div>
                    </div>
                </div>
                <div className="home-right">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="registration-title">
                            <h2>Registration</h2>
                        </div>
                        <div className="input-main">
                            <div className="form-label">
                                <label htmlFor="">USERNAME</label>
                            </div>
                            <div className="input-field">
                                <input type="text" name='userName' value={values.userName} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    errors.userName && touched.userName ?
                                        (<p className='error'>{errors.userName}</p>) : null
                                }

                            </div>
                        </div>
                        <div className="input-main">
                            <div className="form-label">
                                <label htmlFor="">EMAIL</label>
                            </div>
                            <div className="input-field">
                                <input type="text" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    errors.email && touched.email ?
                                        (<p className='error'>{errors.email}</p>) : null
                                }
                            </div>
                        </div>
                        <div className="input-main">
                            <div className="form-label">
                                <label htmlFor="">PASSWORD</label>
                            </div>
                            <div className="input-field">
                                <input type="password" name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    errors.password && touched.password ?
                                        (<p className='error'>{errors.password}</p>) : null
                                }
                            </div>
                        </div>
                        <div className="input-main">
                            <div className="form-label">
                                <label htmlFor="">CONFIRM PASSWORD</label>
                            </div>
                            <div className="input-field">
                                <input type="password" name='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                                {
                                    errors.confirmPassword && touched.confirmPassword ?
                                        (<p className='error'>{errors.confirmPassword}</p>) : null
                                }
                            </div>
                        </div>
                        <div className="form-submit">
                            <button type='submit'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormikValidation
