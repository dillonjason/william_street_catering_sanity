export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: true,
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "clientName",
      title: "Client Name",
      type: "string"
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent"
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [{ type: "menu" }]
    }
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage"
    }
  }
};
