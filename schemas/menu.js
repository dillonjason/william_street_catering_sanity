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
          type: "object",
          name: "item",
          fields: [
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
    }
  ]
};
