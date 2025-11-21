"use client";

import Form from "@/app/components/addproductComponents/Form";
import { useActionState } from "react";
import { submitProduct } from "@/app/action/action";

const addproduct = () => {
  const [state, postProduct] = useActionState(submitProduct, { error: {} });
  console.log(state);
  return (
    <div className="bg-gray-600 grid grid-cols-[1fr_375px_1fr]">
      <div
        className="[grid-column:2] shadow-[0_0_20px_#000000b0] w-[375px] h-[100vh] 
      bg-white rounded-3xl overflow-hidden flex flex-col"
      >
        <Form state={state} postProduct={postProduct}></Form>
      </div>
    </div>
  );
};

export default addproduct;
