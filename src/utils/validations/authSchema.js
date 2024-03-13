import { object, string, ref } from 'yup';

export const registerSchema = object().shape({
  confirmPassword: string()
    .required('Confirmation is required.')
    .oneOf([ref('password'), null], 'Password confirmation does not match.'),
  password: string()
    .required('Password is required.')
    .min(8, 'Your password must be at least 8 characters.'),
  email: string()
    .required('Email is required.')
    .email('Your email is not valid.'),
});

export const loginSchema = object().shape({
  password: string()
    .required('Password is required.')
    .min(8, 'Your password must be at least 8 characters.'),
  email: string()
    .required('Email is required.')
    .email('Your email is not valid.'),
});
