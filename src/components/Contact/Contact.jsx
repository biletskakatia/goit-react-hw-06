import css from "./Contact.module.css";
import { useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { deleteContact } from '../../redux/contactsSlice';
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Contact({ id, name, number }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    return (
        <li className={css.list}>
            <div className={css.allText}>
                <p className={css.textName}> <FaUser />{name} </p>
                <p  className={css.textNumber}><BsFillTelephoneFill />{number}</p>
            </div>
            <button className={css.button} onClick ={handleDelete }>Delate</button>
    </li>
    );
}