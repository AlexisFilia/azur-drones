import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";
import { seedAzurDrone } from "./scr/seed-methods/seed-azur-drone";
import { cleanDatabase } from "./scr/seed-methods/clean-database";

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
      async onConnect(context) {
        if (process.argv.includes("--reset-db")) {
          await cleanDatabase(context);
        }
        if (process.argv.includes("--with-seed")) {
          await seedAzurDrone(context);
        }
      },
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
