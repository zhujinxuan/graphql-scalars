import { GraphQLScalarType } from 'graphql';
import { GraphQLNonNegativeFloatConfig } from './NonNegativeFloat.js';

const GraphQLUnsignedFloatConfig = /*#__NO_SIDE_EFFECTS__*/ Object.assign({}, GraphQLNonNegativeFloatConfig, {
  name: 'UnsignedFloat',
});

export const GraphQLUnsignedFloat = /*#__NO_SIDE_EFFECTS__*/ new GraphQLScalarType(GraphQLUnsignedFloatConfig);
