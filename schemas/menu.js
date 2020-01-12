export default {
  name: "menu",
  title: "Menu",
  type: "object",
  fields: [
    {
      name: "type",
      title: "Service",
      type: "string"
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ name: "menuItem", type: "menuItem" }]
    }
  ]
};
