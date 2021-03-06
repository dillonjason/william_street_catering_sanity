export default {
  name: "employee",
  title: "Employee",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "order",
      title: "Order",
      type: "number"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: true,
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "position",
      title: "Position",
      type: "string"
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }]
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
