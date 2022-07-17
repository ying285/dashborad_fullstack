import React from "react";
import Form from "../../components/Form";

const OnlineSalesSub = () => {
  return (
    <div>
      <Form
        title={"Orders"}
        label1={"date"}
        label2={"Orders data"}
        name1={"name"}
        htmlfor1={"name"}
        name2={"ordersdata"}
        htmlfor2={"ordersdata"}
        type1={"text"}
        type2={"number"}
        url={"https://dashboradfullstack.herokuapp.com/api/postOrder"}
        dataName={"Orders"}
        placeholder1={"e.g d1"}
        placeholder2={"e.g 1"}
      />
    </div>
  );
};

export default OnlineSalesSub;
