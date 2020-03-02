import React, {useState} from 'react';
import {Header} from "./components/header/Header";
import {Surf} from "./components/surf/Surf";
import {Travel} from "./components/travel/Travel";
import {Sleep} from "./components/sleep/Sleep";
import {Shop} from "./components/shop/Shop";
import {Footer} from "./components/footer/Footer";

export const App = () => {

    return (
        <>
            <Header/>
            <main className={'container'}>
                <Surf/>
                <Travel/>
                <Sleep/>
                <Shop/>
            </main>
            <Footer/>

        </>
    );
};


