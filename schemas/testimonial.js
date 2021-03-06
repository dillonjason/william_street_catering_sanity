export default {
  name: "testimonial",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "date",
      title: "Date of Event",
      type: "date",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "type",
      title: "Type of Event",
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
      name: "summary",
      title: "Summary",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: Rule => Rule.required()
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
