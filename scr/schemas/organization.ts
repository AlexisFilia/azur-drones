import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Organization = list({
  fields: {
    name: text(),
    website: text(),
    requestedInterventions: relationship({
      ref: "UseAction.client",
      many: true,
    }),
  },
  ui: {
    labelField: "name",
    listView: {
      initialColumns: ["name", "website"],
    },
  },
});
