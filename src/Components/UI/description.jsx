import React from 'react';

const Description = ({data}) => {
    return (
        <div>
            <h2 className="card-header">{data.title}</h2>
            <img src={data.image} alt={data.title}/>
            <div>
                <h4 dangerouslySetInnerHTML={{__html: data.summary}}></h4> <br/>

                <h4 dangerouslySetInnerHTML={{__html: data.instructions}}></h4>
            </div>

            <ul>
                {data.extendedIngredients.map((ingredient) => {
                    return (

                        <li key={ingredient.id}>{ingredient.original}</li>

                    );
                })}
            </ul>
        </div>
    );
};

export default Description;