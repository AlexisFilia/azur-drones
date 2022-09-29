import { list } from "@keystone-6/core";
import {
  integer,
  relationship,
  text,
  timestamp,
} from "@keystone-6/core/fields";

export const UseAction = list({
  fields: {
    name: text(),
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
  ui: {
    labelField: "name",
    listView: {
      initialColumns: [
        "name",
        "status",
        "description",
        "takeOffTime",
        "duration",
        "client",
        "article",
        "pilots",
        "commercials",
        "report",
      ],
    },
  },
});
