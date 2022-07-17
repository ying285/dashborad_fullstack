import React from "react";
import "../../style/Expenses.scss";
import Card from "../../components/Card";
import DataFetch from "../../hooks/dataFetch";

const url = "https://dashboradfullstack.herokuapp.com/api/getTotalNewClients";

const NewCustomers = () => {
  const TOTALNEWCLIENTS = DataFetch(url);
  return (
    <div className="newcustomers">
      <Card>
        <div className="expenses_content">
          <div className="expenses_icon">
            <i className="bi bi-person-fill" />
          </div>
          <div className="expenses_text">
            <p>New Clients 10 days</p>
            <h5>{TOTALNEWCLIENTS}</h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewCustomers;
