import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import Title from '../components/title'
import ImgWrapper from '../components/imagewrapper'
import Filters from '../components/filters'

import NormalFilter from '../components/normalfilter'
import CustomFilter from '../components/customfilter'

const HomeStyles = styled.div`
    background-color: #2B2F38;
    color: #F1D8C4;
    width: 100%;
    height: 100vh;
    .filters-container {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
`

const Home = () => {

    const [filterClass, setFilterClass] = useState('filter-normal')
    const [openCustom, setOpenCustom] = useState(false)

    const imgRef = useRef(null)

    return (
        <HomeStyles>
            <Title />
            <ImgWrapper
                filterClass={filterClass}
                openCustom={openCustom}
                imgRef={imgRef}
            />
            <div className='filters-container'>
                <NormalFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                />
                <Filters
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    imgRef={imgRef}
                />
                <CustomFilter
                    filterClass={filterClass}
                    setFilterClass={setFilterClass}
                    setOpenCustom={setOpenCustom}
                />
            </div>
        </HomeStyles>
    )
}

export default Home