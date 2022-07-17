import React from "react";
import "../../style/OnlineSales.scss";
import Card from "../../components/Card";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getTotalOrders";

const OnlineSales = () => {
  const TOTALORDERS = DataFetch(url);
  return (
    <div className="onlinesales">
      <Card>
        <div className="expenses_content">
          <div className="expenses_icon">
            <i className="bi bi-laptop" />
          </div>
          <div className="expenses_text">
            <p>Oders 10 days</p>
            <h5>{TOTALORDERS}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OnlineSales;
