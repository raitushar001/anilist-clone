import { GraphQLClient } from "graphql-request";

const API_URL = 'https://graphql.anilist.co';
const graphQLClient = new GraphQLClient(API_URL);

export default graphQLClient;