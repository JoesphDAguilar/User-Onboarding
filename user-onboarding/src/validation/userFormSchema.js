import * as yup from 'yup';

const userSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required("First name is required, dude!")
        .min(2, "Name must be two characters long, bud!"),
    lastName: yup
        .string()
        .trim()
        .required("Last name is required, dude!")
        .min(2, "Name must be two characters long, bud!"),
    role: yup
        .string()
        .oneOf([
            "Web Developer", 
            "Software Engineer", 
            "Software Developer",
            "Front End Developer",
            "Network Engineer",
            "Full Stack Developer"
        ], "What's your role?, friend"),
    email: yup
        .string()
        .email("Must be a valid email, chief!")
        .required("Email is required, boss!"),
    password: yup
        .string()
        .required('Need to enter a password, pal!')
        .min(8, 'Password is too short - Should be at least 8 characters, friendO'),
        tos: yup
            .boolean()
            .oneOf([true], 'You must accept terms and conditions, partner')
})

export default userSchema;