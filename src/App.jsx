import React, {useState} from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { Provider } from './components/CustomStore';


import { Layout } from './components/Layout/Layout';
import { CartPage } from './components/pages/CartPage/CartPage';
import { HomePage } from './components/pages/HomePage/HomePage';
import { NotFoundPage } from './components/pages/NotFoundPage/NotFoundPage';
import { TourPage } from './components/pages/TourPage/TourPage';
import { Reviews } from './components/Reviews/Reviews';
import { Services } from './components/Services/Services';
import { ThemeContextProvider } from './components/ThemeContextProvider/ThemeContextProvider';
import { Tour } from './components/Tour/Tour';
import { store } from './store';



export const App = () => {
    return (
        <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                    <ThemeContextProvider>
                        <Layout>
                            <Routes>
                                <Route index element={<HomePage />} />
                                <Route path='/tours' element = {<TourPage />}>
                                    <Route path = ":tourId" element = {<Tour />}>
                                        <Route index element = {<Navigate to = "services" replace />}/>
                                        <Route path="services" element={<Services />} />
                                        <Route path="reviews" element ={<Reviews />} />
                                    </Route>
                                </Route>
                                <Route path='/cart' element = {<CartPage />} />
                                <Route path = "*" element = {<NotFoundPage />}/>
                            </Routes>
                        </Layout>
                    </ThemeContextProvider>
                </Provider>
        </BrowserRouter>
        </div>

  )}