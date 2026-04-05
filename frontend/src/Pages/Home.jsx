import React, { useEffect, useState } from 'react'
import Header from '@/Layout/Header/Header'
import ExploreMenu from '@/ExploreMenu/ExploreMenu'
import FoodDisply from '@/components/FoodDisplay/FoodDisply'
import AppDownload from '@/components/AppDownload/AppDownload'
const Home = () => {

    const [category, setCategory] = useState("All")

    useEffect(() => {
        console.log(category)
    }, [category])
    return (


        <>

            <div>

                <Header />
                <ExploreMenu category={category} setCategory={setCategory} />
                <FoodDisply category={category} />
                <AppDownload />


            </div>

        </>
    )
}

export default Home