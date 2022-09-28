import { list } from "@keystone-6/core";
import {
  text,
  relationship,
  password,
  timestamp,
  integer,
} from "@keystone-6/core/fields";
import { Lists } from ".keystone/types";

export const lists: Lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
  }),
  Person: list({
    fields: {
      firstName: text(),
      lastName: text(),
      soldActions: relationship({
        ref: "UseAction.commercials",
        many: true,
      }),
      pilotActions: relationship({
        ref: "UseAction.pilots",
        many: true,
      }),
    },
  }),
  Organization: list({
    fields: {
      name: text(),
      website: text(),
      requestedInterventions: relationship({
        ref: "UseAction.client",
        many: true,
      }),
    },
  }),
  ProductModel: list({
    fields: {
      name: text(),
      products: relationship({
        ref: "Product.productModel",
        many: true,
      }),
    },
  }),
  Product: list({
    fields: {
      name: text(),
      productModel: relationship({
        ref: "ProductModel.products",
        many: false,
      }),
      articles: relationship({
        ref: "Article.product",
        many: true,
      }),
    },
  }),
  Article: list({
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
  }),
  UseAction: list({
    fields: {
      status: text(),
      description: text(),
      takeOffTime: timestamp(),
      duration: integer(),
      commercials: relationship({
        ref: "Person.soldActions",
        many: true,
      }),
      pilots: relationship({
        ref: "Person.pilotActions",
        many: true,
      }),
      article: relationship({
        ref: "Article.useActions",
        many: false,
      }),
      report: relationship({
        ref: "Report.useAction",
        many: false,
      }),
      client: relationship({
        ref: "Organization.requestedInterventions",
        many: false,
      }),
    },
  }),
  Report: list({
    fields: {
      status: text(),
      title: text(),
      criticity: text(),
      description: text(),
      useAction: relationship({
        ref: "UseAction.report",
        many: false,
      }),
    },
  }),
};
