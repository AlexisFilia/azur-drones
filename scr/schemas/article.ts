import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Article = list({
  fields: {
    sku: text(),
    product: relationship({
      ref: "Product.articles",
      many: false,
    }),
    useActions: relationship({
      ref: "UseAction.article",
      many: true,
    }),
  },
  ui: {
    labelField: "sku",
    listView: {
      initialColumns: ["sku", "product", "useActions"],
    },
  },
});
