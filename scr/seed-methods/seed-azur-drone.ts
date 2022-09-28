import { Context } from "@keystone-6/core/dist/declarations/src/types/schema/graphql-ts-schema";

function persons() {
  return [
    {
      firstName: "Adrien",
      lastName: "Euverte",
    },
    {
      firstName: "Alexis",
      lastName: "Filia",
    },
    {
      firstName: "Nicolas",
      lastName: "Billecocq",
    },
    {
      firstName: "Paul",
      lastName: "Mystère",
    },
    {
      firstName: "John",
      lastName: "Do",
    },
  ];
}

function organizations() {
  return [
    {
      name: "Armée de Terre",
      website: "https://www.sengager.fr/",
    },
    {
      name: "EDF",
      website: "https://www.edf.fr/",
    },
    {
      name: "Region Nouvelle-Aquitaine",
      website: "https://www.nouvelle-aquitaine.fr/",
    },
    {
      name: "Imerys",
      website: "https://www.imerys.com/",
    },
  ];
}

function allOtherData({
  personIds,
  organizationIds,
}: {
  personIds: Record<string, any>[];
  organizationIds: Record<string, any>[];
}) {
  return [
    {
      name: "Aerial drone",
      products: {
        create: [
          {
            name: "DX 1",
            articles: {
              create: [
                {
                  sku: "DX 1 - 0001",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Reconnaissance flight",
                        takeOffTime: new Date(
                          "11 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 23760,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0], personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Fire intervention",
                        takeOffTime: new Date(
                          "15 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 15050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[1],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Canceled",
                        description: "Wood prospection",
                        takeOffTime: new Date(
                          "27 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 0,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        client: {
                          connect: organizationIds[2],
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "high",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "DX 1 - 0002",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Test flight",
                        takeOffTime: new Date(
                          "11 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 25000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Take pictures",
                        takeOffTime: new Date(
                          "25 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 18050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "DX 1 - 0003",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Send ressources to toopers",
                        takeOffTime: new Date(
                          "10 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 28000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Well done !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Aerian pictures",
                        takeOffTime: new Date(
                          "26 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 13050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Nice pictures",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "01 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 21080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "low",
                            description: "Too much wind crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "07 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 3080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "medium",
                            description: "Motor failure",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "09 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 6080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "low",
                            description: "Rotor failure",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "DX 2",
            articles: {
              create: [
                {
                  sku: "DX 2 - AAA",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Reconnaissance flight",
                        takeOffTime: new Date(
                          "11 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 23760,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0], personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Fire intervention",
                        takeOffTime: new Date(
                          "15 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 15050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[1],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Canceled",
                        description: "Wood prospection",
                        takeOffTime: new Date(
                          "27 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 0,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        client: {
                          connect: organizationIds[2],
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "high",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Aerian pictures",
                        takeOffTime: new Date(
                          "27 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 13050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Nice pictures",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "02 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 21080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Too much wind crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "04 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 3080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "medium",
                            description: "Motor failure",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "10 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 7080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "low",
                            description: "Rotor failure",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "DX 2 - BBB",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Test flight",
                        takeOffTime: new Date(
                          "11 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 25000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Take pictures",
                        takeOffTime: new Date(
                          "25 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 18050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "DX 2 - CCC",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Send ressources to toopers",
                        takeOffTime: new Date(
                          "10 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 28000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Well done !",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      name: "Submarine drone",
      products: {
        create: [
          {
            name: "Sub Mar 1",
            articles: {
              create: [
                {
                  sku: "Sub Mar 1 - 0001",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Reconnaissance dive",
                        takeOffTime: new Date(
                          "26 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 123760,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice dive !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Under water intervention",
                        takeOffTime: new Date(
                          "26 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 150050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[1],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big waves",
                          },
                        },
                      },
                      {
                        status: "Canceled",
                        description: "Coral prospection",
                        takeOffTime: new Date(
                          "29 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 0,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        client: {
                          connect: organizationIds[2],
                        },
                      },
                      {
                        status: "Done",
                        description: "Fishing",
                        takeOffTime: new Date(
                          "18 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "high",
                            description: "Big tuna",
                          },
                        },
                      },
                      {
                        status: "Planned",
                        description: "Test",
                        takeOffTime: new Date(
                          "12 October 2022 14:48 UTC"
                        ).toISOString(),
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "draft",
                            title: "TODO",
                            criticity: "none",
                            description: "",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "Sub Mar 1 - 0002",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Test dive",
                        takeOffTime: new Date(
                          "11 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 65000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Difficult dive !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Take pictures",
                        takeOffTime: new Date(
                          "25 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 38050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fishes",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "high",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "Sub Mar 1 - 0003",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Send ressources to toopers",
                        takeOffTime: new Date(
                          "10 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 28000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Well done !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Aerian pictures",
                        takeOffTime: new Date(
                          "26 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 13050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Nice pictures",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "01 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 21080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Too much wind crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "07 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 3080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "low",
                            description: "Motor failure",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "09 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 6080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "medium",
                            description: "Rotor failure",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Sub Mar 2",
            articles: {
              create: [
                {
                  sku: "Sub Mar 2 - AAA",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Reconnaissance flight",
                        takeOffTime: new Date(
                          "11 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 23760,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0], personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Fire intervention",
                        takeOffTime: new Date(
                          "15 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 15050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[1],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Canceled",
                        description: "Wood prospection",
                        takeOffTime: new Date(
                          "27 April 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 0,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        client: {
                          connect: organizationIds[2],
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[4]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Aerian pictures",
                        takeOffTime: new Date(
                          "27 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 13050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Nice pictures",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "02 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 21080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "high",
                            description: "Too much wind crashed",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "04 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 3080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "medium",
                            description: "Motor failure",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Flight test",
                        takeOffTime: new Date(
                          "10 August 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 7080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "failure",
                            criticity: "low",
                            description: "Rotor failure",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "Sub Mar 2 - BBB",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Test flight",
                        takeOffTime: new Date(
                          "11 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 25000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Very nice fligth !",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Take pictures",
                        takeOffTime: new Date(
                          "25 June 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 18050,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[0]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Big fire",
                          },
                        },
                      },
                      {
                        status: "Done",
                        description: "Mine prospection",
                        takeOffTime: new Date(
                          "12 May 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 45080,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[3]],
                        },
                        client: {
                          connect: organizationIds[3],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "crashed",
                            criticity: "medium",
                            description: "Mine found but drone crashed",
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  sku: "Sub Mar 2 - CCC",
                  useActions: {
                    create: [
                      {
                        status: "Done",
                        description: "Send ressources to toopers",
                        takeOffTime: new Date(
                          "10 July 2022 14:48 UTC"
                        ).toISOString(),
                        duration: 28000,
                        commercials: {
                          connect: [personIds[2]],
                        },
                        pilots: {
                          connect: [personIds[1]],
                        },
                        client: {
                          connect: organizationIds[0],
                        },
                        report: {
                          create: {
                            status: "published",
                            title: "succes",
                            criticity: "none",
                            description: "Well done !",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ];
}

export async function seedAzurDrone(context: Context) {
  console.log("Seeding Persons");
  const personIds = await context.query.Person.createMany({
    data: persons(),
    query: "id",
  });
  console.log("Persons has been seeded");

  console.log("Seeding Organization");
  const organizationIds = await context.query.Organization.createMany({
    data: organizations(),
    query: "id",
  });
  console.log("Organizations has been seeded");

  console.log("Seeding all others data");
  const data = allOtherData({
    personIds: personIds,
    organizationIds: organizationIds,
  });
  await context.query.ProductModel.createMany({
    data: data,
    query: "id",
  });
  console.log("All others data have been successfully seeded");

  console.log("End of the seed");
}
