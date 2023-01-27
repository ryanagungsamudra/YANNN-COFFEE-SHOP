import React from 'react'
// import Stackchart from './chart/Stackchart';
import Goalschart from './chart/Goalschart';
import Staffchart from './chart/Staffchart';
import Stackchart from '../../../assets/admin/chart.png'
import './style.css'

function DashboardMain() {
  return (
    <div className='container' style={{ marginTop: '10rem' }}>
        <h3 className='text-center'>See How your store progress so far</h3>
        <div className='container mx-auto w-100 my-5 text-center'>
            <div className='form-check form-check-inline'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    id='flexRadioDefault1'
                />
                <label className='form-check-label mt-1 ps-2'>Daily</label>
            </div>
            <div className='form-check form-check-inline'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    id='flexRadioDefault2'
                />
                <label className='form-check-label mt-1 ps-2'>Weekly</label>
            </div>
            <div className='form-check form-check-inline'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault'
                    id='flexRadioDefault2'
                />
                <label className='form-check-label mt-1 ps-2'>Monthly</label>
            </div>
        </div>
        <div className='row dashboard-content'>
            <section className='col col-md-8'>
                <img src={Stackchart} alt='stackchart'style={{width: '100%'}}/>
                {/* {stats ? <Stackchart rawdata={stats} /> : <LoadingComponent />} */}
                <button className='btn btn-downlaod-report' style={{marginLeft: '0.8rem'}}>
                    Download Report
                </button>
            </section>
            <aside className='col col-md-4 mx-auto'>
                <p className='title-dashboard'>Best Staff of the Month</p>
                <div className='col-5 mx-auto'>
                    <Staffchart />
                </div>
                <p className='title-dashboard-desc' style={{marginTop: '2rem'}}>
                    Achieved 3.5M of total 5M 478 Customer
                </p>
                <div className='col mx-auto'>
                    <p className='title-dashboard' style={{marginTop: '2rem'}}>Goals</p>
                    <p className='title-dashboard-desc'>
                        Your goals is still on 76%. Keep up the good work!
                    </p>
                    <div className='col-7 mx-auto'>
                        <Goalschart />
                    </div>
                </div>
                <button className='btn btn-downlaod-report' style={{ marginTop: '3.6rem' }}>Share Report</button>
            </aside>
        </div>
    </div>
  )
}

export default DashboardMain