import * as Yup from 'yup';

export const registrationSchema = Yup.object({
    userName: Yup.string().min(3).max(15).required("Please enter valid username!"),
    email: Yup.string().email().required("Please enter your valid email address!"),
    password: Yup.string().min(5).required("Atlist 5 charector are valid!"),
    confirmPassword: Yup.string.required().oneOf([Yup.ref('password'), null], 'Password must match')

})