import React from "react";
import Mainheader from "../UI/Mainheader";
import "../style/StatisticsPage.scss";
import Card2 from "../components/Card2";
import Expenses2 from "../UI/statisticsPage/Expenses2";
import NewCustomers2 from "../UI/statisticsPage/NewCustomers2";
import OnlineSales2 from "../UI/statisticsPage/OnlineSales2";
import Revenue2 from "../UI/statisticsPage/Revenue2";
import Slide from "../UI/Slide";
import "../style/Slide.scss";
import SubNav from "../components/SubNav";

const StatisticsPage = () => {
  return (
    <div className="statisticspage">
      <div className="slide_layout">
        <Slide />
      </div>

      <div className="statisticspage_content">
         <div className="statisticspage_header ">
          <Mainheader />
        </div> 

        <div className=" text-white">
          <SubNav />
        </div>

        <div className="statisticspage_chart ">
          <div className="statisticspage_row1">
            <div className="statisticspage_chart_1  ">
             <Card2>
               <Expenses2 />
             </Card2> 
            </div>

            <div className="statisticspage_chart_2 ">
             <Card2>
              <NewCustomers2 />
             </Card2>
            </div>
            </div>
            <div className='statisticspage_row2'>
            
            <div className="statisticspage_chart_3 ">
              <Card2>
              <OnlineSales2 />
             </Card2>
            </div>

            <div className="statisticspage_chart_4 ">
              <Card2>
                <Revenue2 />
              </Card2>
            </div>
            </div>

          </div>
        
      </div>
    </div>
  );
};

export default StatisticsPage;
