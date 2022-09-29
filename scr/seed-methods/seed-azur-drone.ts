import { Context } from "@keystone-6/core/dist/declarations/src/types/schema/graphql-ts-schema";

function persons() {
  return [
    {
      givenName: "Adrien",
      familyName: "Euverte",
    },
    {
      givenName: "Alexis",
      familyName: "Filia",
    },
    {
      givenName: "Nicolas",
      familyName: "Billecocq",
    },
    {
      givenName: "Paul",
      familyName: "Mystère",
    },
    {
      givenName: "John",
      familyName: "Do",
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
                        name: "Flight 209112",
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
                        name: "Flight 309782",
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
                        name: "Flight 189916",
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
                        name: "Flight 315289",
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
                        name: "Flight 988901",
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
                        name: "Flight 900712",
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
                        name: "Flight 568991",
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
                        name: "Flight 233760",
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
                        name: "Flight 654390",
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
                        name: "Flight 987654",
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
                        client: {
                          connect: organizationIds[0],
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
                        name: "Flight 236822",
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
                        name: "Flight 985479",
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
                        name: "Flight 123432",
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
                        name: "Flight 223344",
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
                        name: "Flight 989865",
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
                        name: "Flight 457590",
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
                        name: "Flight 987689",
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
                        name: "Flight 392827",
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
                        client: {
                          connect: organizationIds[0],
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
                        name: "Flight 455677",
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
                        client: {
                          connect: organizationIds[1],
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
                        name: "Flight 345698",
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
                        client: {
                          connect: organizationIds[2],
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
                        name: "Flight 111111",
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
                        name: "Flight 888777",
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
                        name: "Flight 395350",
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
                        name: "Flight 233444",
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
                        name: "Dive 00001",
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
                        name: "Dive 00002",
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
                        name: "Dive 00003",
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
                        name: "Dive 00004",
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
                        name: "Dive 00098",
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
                        name: "Dive 00005",
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
                        name: "Dive 00006",
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
                        name: "Dive 00007",
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
                        name: "Dive 00008",
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
                        name: "Dive 00009",
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
                        name: "Dive 00010",
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
                        name: "Dive 00011",
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
                        name: "Dive 00012",
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
                        name: "Dive 00013",
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
                        name: "Dive 00014",
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
                        name: "Dive 00015",
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
                        name: "Dive 00016",
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
                        name: "Dive 00017",
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
                        name: "Dive 00018",
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
                        client: {
                          connect: organizationIds[0],
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
                        name: "Dive 00019",
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
                        client: {
                          connect: organizationIds[3],
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
                        name: "Dive 00020",
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
                        client: {
                          connect: organizationIds[1],
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
                        name: "Dive 00021",
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
                        name: "Dive 00022",
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
                        name: "Dive 00023",
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
                        name: "Dive 00024",
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
