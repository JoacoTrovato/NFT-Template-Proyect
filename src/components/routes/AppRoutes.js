import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { 
  LandingPage,
  ConnectPage,
  MarketPlacePage,
  DetailsPage,
  DashboardPage,
  DashboardListed,
  DashboardOwned,
  DashboardSales,
  ProfilePage,
  CreateSalePage,
  Error404Page,
  NewStyling
} from '../../pages';
import Bids from '../bids/Bids';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/bids" element={<Bids />} />{/* FOR TRY STYLES */}
      <Route path="/connect" element={<ConnectPage />} />
      <Route path="/marketplace" element={ <MarketPlacePage /> } />
      <Route path="/licenses/:licenseId" element={ <DetailsPage /> } /> 
      <Route path="/dashboard" element={ <DashboardPage /> } >
          {/* remember to add the react router outlet compoenent on the dashbaord page  */}
          {/* for displaying different tabs (listed, owned, sales)  */}
          <Route index element={ <DashboardOwned /> } />
          <Route path="listed" element={ <DashboardListed /> } />
          <Route path="sales" element={ <DashboardSales /> } />
      </Route>
      <Route path="/profile" element={ <ProfilePage /> } />
      <Route path="/sales/create" element={ <CreateSalePage /> } />
      <Route path="/heirloomstyling" element={ <NewStyling /> } />
      <Route path="*" element={ <Error404Page /> } />
    </Routes>
  )
}
export default AppRoutes;