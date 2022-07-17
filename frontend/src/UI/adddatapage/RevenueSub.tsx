import React from "react";
import Form from "../../components/Form";

const RevenueSub = () => {
  return (
    <div>
      <Form
        title={"Revenue"}
        label1={"Date"}
        label2={"Revenue data"}
        name1={"name"}
        htmlfor1={"name"}
        name2={"revenuesdata"}
        htmlfor2={"revenuesdata"}
        type1={"text"}
        type2={"number"}
        url={"https://dashboradfullstack.herokuapp.com/api/postRevenue"}
        dataName={"Revenue"}
        placeholder1={"e.g d1"}
        placeholder2={"e.g 1"}
      />
    </div>
  );
};

export default RevenueSub;
