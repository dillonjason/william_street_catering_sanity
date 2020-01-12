export default {
  name: "summary",
  title: "Summary",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "us",
      title: "Us",
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
    }
  ]
};
