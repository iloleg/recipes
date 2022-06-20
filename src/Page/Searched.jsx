import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import ApiService from "../API/apiService";
import MealList from "../Components/MealList";


export default function Searched() {
    let params = useParams();

    const [meals, setMeals] = useState([])

    useEffect(() => {
        getMeals()
    }, [setMeals])


    async function getMeals() {

        const meals = await ApiService.getSearch(params.name);
        setMeals(meals.data.results);

    }

    return (
        <div>
            <MealList props={meals} title1="List of meals"/>
        </div>
    );
};

