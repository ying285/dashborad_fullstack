import React from "react";
import Form from "../../components/Form";

const ExpensesSub = () => {
  return (
    <div>
      <Form
        title={"Expenses"}
        label1={"Date"}
        label2={"Expenses data"}
        name1={"name"}
        htmlfor1={"name"}
        name2={"expensesdata"}
        htmlfor2={"expensesdata"}
        type1={"text"}
        type2={"number"}
        url={"https://dashboradfullstack.herokuapp.com/api/postExpense"}
        dataName={"Expenses"}
        placeholder1={"e.g d1"}
        placeholder2={"e.g 1"}
      />
    </div>
  );
};

export default ExpensesSub;
