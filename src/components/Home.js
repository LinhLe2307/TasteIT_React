import React from 'react'
import { Link } from "react-router-dom"

import CardInfo from './CardInfo'
import background from '../assets/videos/background.mp4'


const Main = () => {
    return (
        <main>
                {/* <video autoplay muted loop id="myVideo">
                    <source src={background} type='video/mp4'/> */}
                    <div className='recipes-info'>
                        <h1>TasteIT</h1>
                        <p>TasteIT is recipe app which is made in REACT21K group React lessons</p>
                        <Link to="/browse-recipes">Browse recipes</Link>
                    </div>
                {/* </video> */}
            <div className='recipes-container'>
                <div className='selection'>
                    <CardInfo
                        name="Browse recipes"
                        description="Find your favourites in this collection. You can search recipes based on name or country"
                        link="/browse-recipes"
                    />
                </div>
                <div className='selection'>
                    <CardInfo
                        name="Add recipes"
                        description="Recipes from your country is missing? No worries, add one!"
                        link="/add-recipes"
                    />
                </div>
                <div className='selection'>
                    <CardInfo
                        name="Want to know more about our projects?"
                        description="Visit our programme homepage"
                        link="/about"
                    />
                </div>
            </div>

        </main>
    )
}

export default Main