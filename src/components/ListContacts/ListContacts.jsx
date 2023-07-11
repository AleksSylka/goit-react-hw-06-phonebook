import { useSelector } from "react-redux/es/hooks/useSelector";
import { getContacts, getFiltersContacts } from "redux/selectors";
import { ListContacts } from "./ListContacts.styled";
import { ItemContactBlock } from "./ItemContact/ItemContact";

const getFilteredContacts = (contacts, queryFilter) => {
    if (!queryFilter) {
        return contacts
    }
    return contacts.filter(({ name }) => name.toLowerCase().includes(queryFilter.toLowerCase()));
};

export const BlockContacts = () => {
    
    const сontacts = useSelector(getContacts);
    const filter = useSelector(getFiltersContacts);
    const filteredContacts = getFilteredContacts(сontacts, filter);
   
    return (
        <ListContacts>
            {filteredContacts.length > 0 && <h3>List contacts:</h3>}
            {filteredContacts.map(({ name, phone, id }) => {
                return (<ItemContactBlock name={name} phone={phone} id={id} key={id} />)
            })}

        </ListContacts>
    )
}