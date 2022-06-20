import React from 'react';
import PostMeal from "./PostMeal";
import Search from "./Search";


const MealList = ({props, title1}) => {


    if (!props.length) {

        return (
            <h1 style={{textAlign: 'center'}}> Not find any meals </h1>
        )
    }


    return (
        <div>

            <Search/>
            <h1 style={{textAlign: 'center'}}>
                {title1}
            </h1>
            {props.map(meal =>
                <PostMeal meal={meal} key={meal.id}/>
            )}
        </div>

    );
};

export default MealList;