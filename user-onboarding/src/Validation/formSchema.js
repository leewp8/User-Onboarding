import * as yup from 'yup';
import { boolean } from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username required')
        .min(3, 'Username must be 3 or more characters'),
    email: yup
        .string()
        .email('Must be valid email address')
        .required('Email is required'),
    password: yup  
        .string()
        .required('Password required')
        .min(6, 'Password must be 6 or more characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept terms and conditions')
})

export default formSchema