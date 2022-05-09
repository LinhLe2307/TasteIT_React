import React from 'react'
import { Link, Outlet } from "react-router-dom"

import Button from './Button'
import CardInfo from './CardInfo'

const Main = () => {
    return (
        <main>
            <div>
                <h1>TasteIT</h1>
                <p>TasteIT is recipe app which is made in REACT21K group React lessons</p>
                {/* <Button>Browse recipes</Button> */}
                <Link to="/browse-recipes">Browse recipes</Link>
            </div>
            <div>
                <div>
                    <CardInfo
                        name="Browse recipes"
                        description="Find your favourites in this collection. You can search recipes based on name or country"
                    />
                    <Link to="/browse-recipes">All recipes</Link>
                    {/* <BrowseRecipes /> */}
                </div>
                <div>
                    <CardInfo
                        name="Add recipes"
                        description="Recipes from your country is missing? No worries, add one!"
                    />
                    <Link to="/add-recipes">Add recipes</Link>
                    {/* <AddRecipes /> */}
                </div>
                <div>
                    <CardInfo
                        name="Want to know more about our projects?"
                        description="Visit our programme homepage"
                    />
                    <Link to="/about">Helsinki Business College</Link>
                    {/* <MoreAboutUs /> */}
                </div>
            </div>
            <Outlet />
        </main>
    )
}

export default Main