import React from "react";
import "../../style/Revenue.scss";
import Card from "../../components/Card";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getTotalRevenue";

const Revenue = () => {
  const TOTALREVENUE = DataFetch(url);
  return (
    <div className="revenue">
      <Card>
        <div className="expenses_content">
          <div className="expenses_text">
            <p>Revenue 10 days</p>
            <h5>$ {TOTALREVENUE}</h5>
          </div>
          <div className="expenses_icon">
            <i className="bi bi-coin " />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Revenue;
