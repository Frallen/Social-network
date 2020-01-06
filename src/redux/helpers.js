export const updateObjectinArray = (
  items,
  itemId,
  objpropName,
  newobjectprops
) => {
  items.map(u => {
    if (u[objpropName] === itemId) {
      return { ...u, ...newobjectprops };
    }
    return u;
  });
};
