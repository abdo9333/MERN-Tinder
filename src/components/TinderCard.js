import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../style/tinderCard.css';


function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Abdo",
            url: "https://media.gettyimages.com/photos/spacex-owner-and-tesla-ceo-elon-musk-arrives-on-the-red-carpet-for-picture-id1229892421?s=2048x2048"
        },
        {
            name: "Jiff bezos",
            url: "https://media.gettyimages.com/photos/amazoncom-founder-and-ceo-jeff-bezos-presents-the-companys-first-the-picture-id450831356?s=2048x2048"
        },
    ]);

    const swiped = (direction, nameToDelete)=>{
        console.log('removing' + nameToDelete);
    }
    const outOfFrame =(name) =>{
        console.log(name + 'left the screen');
    }

    return (
        <div className='tinderCards'>
            <div className='TinderCards_container'>
                
                {people.map((person) => (
                    <TinderCard
                    className='swip'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe = {(dir)=>swiped(dir, person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                        <div 
                        style={{backgroundImage : `url(${person.url}`}}
                        className='card'>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards