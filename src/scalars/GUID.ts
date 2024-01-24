import { GraphQLScalarType } from 'graphql';
import { GraphQLUUIDConfig } from './UUID.js';

export const GraphQLGUIDConfig = /*#__NO_SIDE_EFFECTS__*/ Object.assign({}, GraphQLUUIDConfig, {
  name: 'GUID',
});

export const GraphQLGUID = /*#__NO_SIDE_EFFECTS__*/ new GraphQLScalarType(GraphQLGUIDConfig);
