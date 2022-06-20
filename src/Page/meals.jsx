import React, {useEffect, useState} from 'react';
import ApiService from "../API/apiService";
import Loader from "../Components/UI/Loader";

import MealList from "../Components/MealList";
import Paginating from "../Components/UI/paginating/Paginating";
import {getPageCount} from "../utils/pages";


export default function Meals() {

    const [meals, setMeals] = useState([])
    const [isMealsLoading, setIsMealsLoading] = useState(false);

    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [allTotal, setAllTotal] = useState(0);


    useEffect(() => {
        fetchMeals()
    }, [page])

    async function fetchMeals() {
        setIsMealsLoading(true);
        const meals = await ApiService.getAll(limit, page);
        setMeals(meals.data.results);
        setTotalCount(meals.data.number);


        // console.log("Total Page ", Math.ceil(meals.data.totalResults / limit));

        setTotalCount(getPageCount(totalCount, limit));
        setIsMealsLoading(false);

    }
    const changePage = (page) => {
        setPage(page)
        fetchMeals()
    }

    return (
        <div>
            {isMealsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <MealList props={meals} title1="List of meals"/>
            }
            <Paginating page={page} changePage={changePage} totalCount={totalCount}/>

        </div>
    )
}