import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ApiService from "../API/apiService";
import Description from "../Components/UI/description";


function MealsDescription() {

    let params = useParams()
    const firstRender = useRef(true);
    const [mDetail, setMDetail] = useState({})
    const [count, setCount] = useState(0);


    const getDetails1 = async () => {
        const mealsDesc = await ApiService.getDetails(params.name);
        setMDetail(mealsDesc);
        console.log("Meal Data 1", mealsDesc);
    }

    useEffect(() => {
            async function getDetails() {
                const mealsDesc = await ApiService.getDetails(params.name);
                setMDetail(mealsDesc);

                console.log("Test result", mealsDesc)
            };
            getDetails()

        },
        [params.name]);

    return (

        <div>
            <h1>DESCRIPTIONS</h1>
            <Description data={mDetail.data}/>

        </div>
    );
};

export default MealsDescription;

