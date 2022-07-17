import React from "react";
import "../../style/Expenses.scss";

import Card from "../../components/Card";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getTotalExpenses";

const Expenses = () => {
  const TOTALEXPENSES = DataFetch(url);

  return (
    <div className="expenses">
      <Card>
        <div className="expenses_content">
          <div className="expenses_text">
            <p>Expenses 10 days</p>
            <h5>$ {TOTALEXPENSES}</h5>
          </div>
          <div className="expenses_icon">
            <i className="bi bi-calendar-check" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
