export default {
  name: "featured",
  type: "document",
  title: "Featured Menu Categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured category name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
