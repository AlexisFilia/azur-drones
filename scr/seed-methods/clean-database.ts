import { Context } from "@keystone-6/core/dist/declarations/src/types/schema/graphql-ts-schema";

export async function cleanDatabase(context: Context) {
  console.log("Start to clean the database");
  const tableNames = Object.keys(context.db);
  for (let index = 0; index < tableNames.length; index++) {
    const tableName = tableNames[index];
    const result = await context.prisma[tableName].deleteMany({});
  }

  console.log("The database has been cleaned");
}
