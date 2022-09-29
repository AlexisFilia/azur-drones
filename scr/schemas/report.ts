import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Report = list({
  fields: {
    title: text(),
    status: text(),
    criticity: text(),
    description: text(),
    useAction: relationship({
      ref: "UseAction.report",
      many: false,
    }),
  },
  ui: {
    labelField: "title",
    listView: {
      initialColumns: [
        "title",
        "status",
        "criticity",
        "description",
        "useAction",
      ],
    },
  },
});
