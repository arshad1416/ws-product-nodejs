const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const HourlyEvents = new GraphQLObjectType({
  name: "HourlyEvent",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    hour: { type: GraphQLString },
    events: { type: GraphQLString }
  }
});

const DailyEvents = new GraphQLObjectType({
  name: "DailyEvent",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    events: { type: GraphQLString }
  }
});

const HourlyStats = new GraphQLObjectType({
  name: "HourlyStat",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    hour: { type: GraphQLString },
    impressions: { type: GraphQLString },
    clicks: { type: GraphQLString },
    revenue: { type: GraphQLString }
  }
});

const DailyStats = new GraphQLObjectType({
  name: "DailyStat",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    impressions: { type: GraphQLString },
    clicks: { type: GraphQLString },
    revenue: { type: GraphQLString }
  }
});

const POI = new GraphQLObjectType({
  name: "PoiData",
  type: "Query",
  fields: {
    poi_id: { type: GraphQLString },
    name: { type: GraphQLString },
    lat: { type: GraphQLString },
    lon: { type: GraphQLString }
  }
});

exports.HourlyEvents = HourlyEvents;
exports.DailyEvents = DailyEvents;
exports.HourlyStats = HourlyStats;
exports.DailyStats = DailyStats;
exports.POI = POI;