import React, { InputHTMLAttributes, FC } from "react";
import Input from "./Input";
import axios from "axios";
import { apiActions } from "../store/api";

import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  label1: string;
  label2: string;
  htmlfor1: string;
  name1: string;
  htmlfor2: string;
  name2: string;
  type1: string;
  type2: number | string;
  url: string;
  dataName: string;
  placeholder1: string;
  placeholder2: string;
}

const Form: FC<InputProps> = ({
  title,
  label1,
  label2,
  name1,
  htmlfor1,
  name2,
  htmlfor2,
  type1,
  type2,
  dataName,
  url,
  placeholder1,
  placeholder2,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enteredName = useSelector((state: RootState) => state.api.name);
  const enteredData = useSelector((state: RootState) => state.api.data);

  const handleFormChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(apiActions.getName(e.target.value));
  };
  const handleFormChange2 = (e: any) => {
    dispatch(apiActions.getData(e.target.value));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const token: string = localStorage.getItem("token")!;

    const data = {
      name: enteredName,
      [dataName]: enteredData,
    };

    axios
      .post(url, data, {
        headers: { token },
      })
      .then((res) => {
        navigate("/statistics");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="addData_form_1" onSubmit={submitHandler}>
      <h5>{title}</h5>
      <div className="addData_formItem">
        <Input
          name={name1}
          htmlfor={htmlfor1}
          type={type1}
          label={label1}
          onChange={handleFormChange1}
          placeholder={placeholder1}
        />
      </div>
      <div className="addData_formItem">
        <Input
          name={name2}
          htmlfor={htmlfor2}
          type={type2}
          label={label2}
          onChange={handleFormChange2}
          placeholder={placeholder2}
        />
      </div>

      <button className="btn" style={{ backgroundColor: "darkorange" }}>
        Submit
      </button>
    </form>
  );
};

export default Form;
