import { GraphQLScalarType } from 'graphql';
import { GraphQLNonNegativeIntConfig } from './NonNegativeInt.js';

const GraphQLUnsignedIntConfig = /*#__NO_SIDE_EFFECTS__*/ Object.assign({}, GraphQLNonNegativeIntConfig, {
  name: 'UnsignedInt',
});

export const GraphQLUnsignedInt = /*#__NO_SIDE_EFFECTS__*/ new GraphQLScalarType(GraphQLUnsignedIntConfig);
