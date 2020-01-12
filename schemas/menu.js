export default {
  name: "menu",
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
      of: [
        {
          name: "type",
          title: "Title",
          type: "string"
        },
        {
          name: "summary",
          title: "Summary",
          type: "blockContent"
        }
      ]
    }
  ]
};
