export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type of Service",
      type: "string"
    },
    {
      name: "summary",
      title: "Summary",
      type: "blockContent"
    },
    {
      name: "breakdown",
      title: "What You Do",
      type: "array",
      of: [{ name: "breakdownStep", type: "breakdownStep" }]
    }
  ]
};
