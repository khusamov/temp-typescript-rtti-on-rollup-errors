import "reflect-metadata"
import {reflect} from 'typescript-rtti'
import IMovable from './IMovable';

// An array with two properties is expected to be output.
// But instead an empty array is output!
console.log(
	reflect<IMovable>().as('interface').reflectedInterface.properties
)