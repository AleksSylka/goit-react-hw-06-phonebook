import { useDispatch, useSelector } from "react-redux"
import css from "../FormInput/FormInput.module.css"
import { setQueryFilter } from "redux/filterSlice";
import { getFiltersContacts } from "redux/selectors";

export const FilterForm = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFiltersContacts); 
    const handleChange = (event) => {
        dispatch(setQueryFilter(event.currentTarget.value));
    }
    
    return (
            <label className={css["label-contacts"]}>Find contacts by name
                <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["input-contacts"]}
                />
            </label>
    )
}