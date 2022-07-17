import React from "react";
import Form from "../../components/Form";

const NewCustomersSub = () => {
  return (
    <div>
      <Form
        title={"New Clients"}
        label1={"Date"}
        label2={"New clients data"}
        name1={"name"}
        htmlfor1={"name"}
        name2={"newclientsdata"}
        htmlfor2={"newclientsdata"}
        type1={"text"}
        type2={"number"}
        url={"https://dashboradfullstack.herokuapp.com/api/postNewclient"}
        dataName={"NewClients"}
        placeholder1={"e.g d1"}
        placeholder2={"e.g 1"}
      />
    </div>
  );
};

export default NewCustomersSub;
