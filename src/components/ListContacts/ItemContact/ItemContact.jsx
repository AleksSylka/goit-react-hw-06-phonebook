import { AiOutlinePhone, AiFillDelete } from "react-icons/ai"
import { ItemContact, ItemText } from "./ItemContact.styled"
import { ButtonDelete } from "components/Button/Button.styled"
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

export const ItemContactBlock = ({ name, phone, id }) => {

    const dispatch = useDispatch();
    
    const handleDelete = event => {
        event.preventDefault();
        dispatch(deleteContact(event.currentTarget.value))
    }
    return (
        <>
                <ItemContact>
                    <ItemText><b>{name}</b></ItemText>
                    
                    <ItemText><AiOutlinePhone />{phone}</ItemText>
                    <ButtonDelete type="button" onClick={handleDelete} value={id}><AiFillDelete/></ButtonDelete>
                </ItemContact>
        </>
    )
}