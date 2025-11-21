"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");
  if (!productName) {
    error.productname = "Please write a product name";
  } else if (productName.length <= 3) {
    error.productname = "Please write a longer product name";
  }

  if (!productPrice) {
    error.productprice = "Please write a product price";
  } else if (isNaN(productPrice) || productPrice < 0) {
    error.productprice = "Please be sure the price is valid";
  }
  if (Object.keys(error).length > 0) {
    return { error, productName, productPrice };
  }
  return { succes: true };
};
