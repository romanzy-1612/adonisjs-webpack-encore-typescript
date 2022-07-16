// this works during dev but fails on build
/* 
resources/frontend/src/app.ts:2:33 - error TS2307: Cannot find module './test' or its corresponding type declarations.

2 import type { SharedType } from './test'
                                  ~~~~~~~~
Cannot complete the build process as there are typescript errors. Use "--ignore-ts-errors" flag to ignore Typescript errors
*/
// import type { SharedType } from './test'
// const shared: SharedType = {
//   object: true,
// }
// console.log('shared types work 2', shared)

import moment from 'moment'

console.log('hello from frontend 2')

//client library
console.log(moment().format('MMM Do YY'))
