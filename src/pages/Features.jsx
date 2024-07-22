import React from 'react';
import './Features.css'
import PAYROLL from "./image/payroll.png"

export default function Features (){

    return(
        <div>

<section id="features">
        <div className="features__container">
            <h1 className="title">Everything you need to run your books.</h1>
            <p className="sub__title">Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
            <div className="features__card">
                <div className="card">
                    <div className="card__detail">
                        <h1>Payroll</h1>
                        <p>Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.</p>
                    </div>
                    <div className="card__detail">
                        <h1>Claim expenses</h1>
                        <p>All of your receipts organized into one place, as long as you don't mind typing in the data by hand.</p>
                    </div>
                    <div className="card__detail">
                        <h1>VAT handling</h1>
                        <p>      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.</p>
                    </div>
                    <div className="card__detail">
                        <h1>Reporting</h1>
                        <p>Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.</p> 
                    </div>
                </div>
                <div className="features__images">
                    <img src={PAYROLL} alt="" />
                    {/* <img src="component/image/payroll.png" alt=""></img> */}
                    {/* <!-- <img src="image/expenses.png" alt=""> -->
                    <!-- <img src="image/vat-returns.png" alt=""> -->
                    <!-- <img src="image/reporting.png" alt=""> --> */}
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}