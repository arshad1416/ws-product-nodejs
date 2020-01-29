const { db } = require('../pgAdaptor');
const { GraphQLObjectType, GraphQLID } = require('graphql');
const { HourlyEvents, DailyEvents, HourlyStats, DailyStats, POI } = require('./types');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    hourlyEvent: {
      type: HourlyEvents,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM hourlyEvent WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res )
          .catch(err => err);
      }
    },
    dailyEvent: {
      type: DailyEvents,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM dailyEvent WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res )
          .catch(err => err);
      }
    },
    hourlyStat: {
      type: HourlyStats,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM hourlyStat WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res )
          .catch(err => err);
      }
    },
    dailyStat: {
      type: DailyStats,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM dailyStat WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res )
          .catch(err => err);
      }
    },
    poiData: {
      type: POI,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM poiData WHERE id=$1`;
        const values = [args.id];

        return db
          .one(query, values)
          .then(res => res )
          .catch(err => err);
      }
    },
  }
});

exports.query = RootQuery;