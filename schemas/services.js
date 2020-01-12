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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: "breakdown",
      title: "What You Do",
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
