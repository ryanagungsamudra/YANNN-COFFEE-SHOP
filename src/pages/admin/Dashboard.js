import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer';
import DashboardMain from '../../components/authorize/admin/DashboardMain';

function Dashboard() {
  // status navbar
  const status = {
      History: "active-nav",
  }
  return (
    <>
        <Navbar status={status} />
        <DashboardMain />
        <Footer />
    </>
  )
}

export default Dashboard