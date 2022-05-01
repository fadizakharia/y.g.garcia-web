import { customLineItem, customLineItems } from "./ShopifyCartContext";
const getNewAddedLineItems = (
  { lineItems }: customLineItems,
  newItem: customLineItem
) => {
  let newLineItems = [];
  const foundIndex = lineItems.findIndex(
    (line) => line.id === newItem.lineItem.id
  );
  if (foundIndex > 0) {
    newLineItems = [...lineItems];
    newLineItems[foundIndex].quantity += newItem.lineItem.quantity;
  } else {
    newLineItems = [...lineItems];
    newLineItems.push(newItem.lineItem);
  }
  return { lineItems: newLineItems } as customLineItems;
};
const removeLineItems = ({ lineItems }: customLineItems, id: string) => {
  const newLineItems = lineItems.filter((item) => item.id !== id);
  return { lineItems: newLineItems } as customLineItems;
};
export { getNewAddedLineItems, removeLineItems };
