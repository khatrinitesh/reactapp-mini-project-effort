import React from 'react'
import styled from 'styled-components';
import Chart from '../components/chart';
import Featured from '../components/featured';
import LgWidget from '../components/lgwidget';
import SmWidget from '../components/smwidget';
import { userData } from '../dummydata'

const HomeContainer = styled.div`
    flex: 4;
`

const HomeWidgets = styled.div`
    display: flex;
    margin: 20px;
`


const Home = () => {
    return (
        <HomeContainer>
            <Featured />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <HomeWidgets>
                <SmWidget />
                <LgWidget />
            </HomeWidgets>
        </HomeContainer>
    )
}

export default Home