import React, { useContext } from 'react';

const DashboardContext = React.createContext();

export default DashboardContext;

export const useDashboardContext = () => useContext(DashboardContext);
