import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Product = list({
  fields: {
    name: text(),
    status: text(),
    productModel: relationship({
      ref: "ProductModel.products",
      many: false,
    }),
    articles: relationship({
      ref: "Article.product",
      many: true,
    }),
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "productModel", "articles"],
    },
  },
});
