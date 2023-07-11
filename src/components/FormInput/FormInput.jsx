import { addContacts } from 'redux/contactsSlice';
import { useDispatch } from "react-redux";
import { Button } from 'components/Button/Button.styled';
import { Formik, Form, Field } from 'formik';
import css from "./FormInput.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormInput = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        if (values.name === "" || values.phone === "") {
            return toast('Please enter Name and phone number')
        }
        dispatch(addContacts(values));
        resetForm();
    }

    return (
        <div className={css["label-contacts"]}>
            <Formik
                initialValues={{ name: '', phone: '' }}
                onSubmit={handleSubmit}
                 
            >
                <Form>
                    <Field type="name" name="name" className={css["input-contacts"]} placeholder="Write Name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" />

                    <Field type="phone" name="phone" className={css["input-contacts"]} placeholder="Write Phone" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" />

                    <Button type="submit">
                        Add Contact
                    </Button>
                </Form>
                
            </Formik>
            <ToastContainer />
        </div>
    )

};
