import { useEffect, useState } from 'react';
import {getFilteredCategory} from '../api';
import {useParams, useHistory } from 'react-router-dom';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

function Category() {
    const {name} = useParams();
    const {goBack} = useHistory();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));
    }, [name])

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </>
    )
}

export default Category;