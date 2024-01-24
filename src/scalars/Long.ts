import { GraphQLScalarType } from 'graphql';
import { GraphQLBigIntConfig } from './BigInt.js';

export const GraphQLLongConfig = /*#__NO_SIDE_EFFECTS__*/ Object.assign({}, GraphQLBigIntConfig, {
  name: 'Long',
});

export const GraphQLLong = /*#__NO_SIDE_EFFECTS__*/ new GraphQLScalarType(GraphQLLongConfig);
