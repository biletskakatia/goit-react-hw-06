import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectNameFilter);
        const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
    );
    return (
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <Contact key={contact.id} {...contact} />
    ))}
    </ul>
    );
}