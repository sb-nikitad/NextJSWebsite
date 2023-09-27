"use client";

import { getPost } from "../API/api";
import s from "./form.module.css";
import { useState, useCallback } from "react";

type Props = {
  input1: string;
  input2: string;
};

export function Form({ input1, input2 }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const log = () => {
    console.log(email, password);
  };

  const func = useCallback(async () => {
    const res = await getPost(password);
    console.log(res);
  }, [password]);

  return (
    <div className={s.container}>
      <div className={s.subcontainer}>
        <div>tailwind</div>
        <input className="bg-gray-100 border-gray-800 border p-1 rounded-lg" />
        <button className="bg-gray-100 border-gray-800 border p-1 rounded-lg hover:bg-gray-800 hover:text-white">
          Click
        </button>
      </div>

      <div className={s.subcontainer}>
        <div>module css</div>
        <input className={s.input} />
        <button className={s.button}>Click</button>
      </div>
    </div>
  );
}
