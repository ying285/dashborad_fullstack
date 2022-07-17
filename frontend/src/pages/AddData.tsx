import React from "react";
import "../style/AddData.scss";
import Mainheader from "../UI/Mainheader";
import Card2 from "../components/Card2";
import ExpensesSub from "../UI/adddatapage/ExpensesSub";
import NewCustomersSub from "../UI/adddatapage/NewCustomersSub";
import OnlineSalesSub from "../UI/adddatapage/OnlineSalesSub";
import Slide from "../UI/Slide";
import "../style/Slide.scss";
import SubNav from "../components/SubNav";

const AddData = () => {
  return (
    <div className="addData">
      <div className="slide_layout">
        <Slide />
      </div>

      <div className='addData_content'>
        <div className="addData_header">
          <Mainheader />
        </div>

        <div className=" text-white">
          <SubNav />
        </div>

        <div className="addData_form ">
          <div className="addData_row1">
            <div >
              <Card2>
                <ExpensesSub />
              </Card2>
            </div>
            <div className="addData_form_2 ">
              <Card2>
                <NewCustomersSub />
              </Card2>
            </div>
             </div>
             <div >
              <div className="addData_form_3 ">
              <Card2>
                <OnlineSalesSub />
              </Card2>
            </div>
             </div>
            
         
        </div>
      </div>
    </div>
  );
};

export default AddData;
