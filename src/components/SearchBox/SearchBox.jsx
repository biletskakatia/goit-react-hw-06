import { useId } from 'react';
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
export default function SearchBox() {
    const searchFieldId = useId();
    const dispatch = useDispatch();
    const search = useSelector(selectNameFilter);
    const handleSearchChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };
    return (
        <div className={css.container}>
            <label htmlFor={searchFieldId} className={css.text}>Find contacts by name</label>
            <input className={css.input}
                id = {searchFieldId}
                type="text"
                value={search}
                onChange={handleSearchChange}/>
        </div> 
);
}