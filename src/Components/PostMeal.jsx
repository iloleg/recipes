import React from 'react';
import './componets.css';
import {Link} from "react-router-dom";


const PostMeal = (props) => {
    return (

        <div className="meal">
            <div className="meal__content">

                <Link to={"/description/" + props.meal.id}>

                    <p>{props.meal.title}</p>
                    <img src={props.meal.image} alt={props.meal.title} />

                </Link>



            </div>

        </div>
    );
};

export default PostMeal;