import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from "yup";
import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {

const nameFieldId = useId();
const numberFieldId = useId();
const dispatch = useDispatch();

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required')
});
    
const handleSubmit = (values, actions) => {
    const newContact = {
            id: nanoid(),
            ...values
        };
    dispatch(addContact(newContact));
        actions.resetForm();
};
    return (

        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
        <Form className={css.formContainer}>
        <label htmlFor={nameFieldId} className={css.label}>Name</label>
        <Field id={nameFieldId} name="name" type="text" className={css.input}/>
        <ErrorMessage name="name" component="span"  className={css.errorMessage} />

        <label htmlFor={numberFieldId} className={css.label}>Number</label>
        <Field id={numberFieldId} name="number" type="text" className={css.input}/>
        <ErrorMessage name="number" component="span" className={css.errorMessage} />

        <button type="submit" className={css.button}>Add Contact</button>
        </Form>
        </Formik>
    ); 
}