import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";

export const Person = list({
  fields: {
    familyName: text(),
    givenName: text(),
    email: text(),
    status: text(),
    telephone: text(),
    soldActions: relationship({
      ref: "UseAction.commercials",
      many: true,
    }),
    pilotActions: relationship({
      ref: "UseAction.pilots",
      many: true,
    }),
  },
  ui: {
    labelField: "givenName",
    listView: {
      initialColumns: [
        "familyName",
        "givenName",
        "email",
        "status",
        "telephone",
      ],
    },
  },
});
