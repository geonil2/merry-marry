
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Wedding
 * 
 */
export type Wedding = $Result.DefaultSelection<Prisma.$WeddingPayload>
/**
 * Model Groom
 * 
 */
export type Groom = $Result.DefaultSelection<Prisma.$GroomPayload>
/**
 * Model Bridge
 * 
 */
export type Bridge = $Result.DefaultSelection<Prisma.$BridgePayload>
/**
 * Model MetaTag
 * 
 */
export type MetaTag = $Result.DefaultSelection<Prisma.$MetaTagPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Weddings
 * const weddings = await prisma.wedding.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Weddings
   * const weddings = await prisma.wedding.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.wedding`: Exposes CRUD operations for the **Wedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weddings
    * const weddings = await prisma.wedding.findMany()
    * ```
    */
  get wedding(): Prisma.WeddingDelegate<ExtArgs>;

  /**
   * `prisma.groom`: Exposes CRUD operations for the **Groom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grooms
    * const grooms = await prisma.groom.findMany()
    * ```
    */
  get groom(): Prisma.GroomDelegate<ExtArgs>;

  /**
   * `prisma.bridge`: Exposes CRUD operations for the **Bridge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bridges
    * const bridges = await prisma.bridge.findMany()
    * ```
    */
  get bridge(): Prisma.BridgeDelegate<ExtArgs>;

  /**
   * `prisma.metaTag`: Exposes CRUD operations for the **MetaTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetaTags
    * const metaTags = await prisma.metaTag.findMany()
    * ```
    */
  get metaTag(): Prisma.MetaTagDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.9.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Wedding: 'Wedding',
    Groom: 'Groom',
    Bridge: 'Bridge',
    MetaTag: 'MetaTag'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'wedding' | 'groom' | 'bridge' | 'metaTag'
      txIsolationLevel: never
    },
    model: {
      Wedding: {
        payload: Prisma.$WeddingPayload<ExtArgs>
        fields: Prisma.WeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeddingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeddingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          findFirst: {
            args: Prisma.WeddingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeddingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          findMany: {
            args: Prisma.WeddingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>[]
          }
          create: {
            args: Prisma.WeddingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          createMany: {
            args: Prisma.WeddingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WeddingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          update: {
            args: Prisma.WeddingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          deleteMany: {
            args: Prisma.WeddingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WeddingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WeddingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          aggregate: {
            args: Prisma.WeddingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWedding>
          }
          groupBy: {
            args: Prisma.WeddingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WeddingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WeddingFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.WeddingAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.WeddingCountArgs<ExtArgs>,
            result: $Utils.Optional<WeddingCountAggregateOutputType> | number
          }
        }
      }
      Groom: {
        payload: Prisma.$GroomPayload<ExtArgs>
        fields: Prisma.GroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroomFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroomFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          findFirst: {
            args: Prisma.GroomFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroomFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          findMany: {
            args: Prisma.GroomFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>[]
          }
          create: {
            args: Prisma.GroomCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          createMany: {
            args: Prisma.GroomCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroomDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          update: {
            args: Prisma.GroomUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          deleteMany: {
            args: Prisma.GroomDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroomUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroomUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroomPayload>
          }
          aggregate: {
            args: Prisma.GroomAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroom>
          }
          groupBy: {
            args: Prisma.GroomGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroomFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroomAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GroomCountArgs<ExtArgs>,
            result: $Utils.Optional<GroomCountAggregateOutputType> | number
          }
        }
      }
      Bridge: {
        payload: Prisma.$BridgePayload<ExtArgs>
        fields: Prisma.BridgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BridgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BridgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          findFirst: {
            args: Prisma.BridgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BridgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          findMany: {
            args: Prisma.BridgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>[]
          }
          create: {
            args: Prisma.BridgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          createMany: {
            args: Prisma.BridgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BridgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          update: {
            args: Prisma.BridgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          deleteMany: {
            args: Prisma.BridgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BridgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BridgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BridgePayload>
          }
          aggregate: {
            args: Prisma.BridgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBridge>
          }
          groupBy: {
            args: Prisma.BridgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BridgeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.BridgeFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.BridgeAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.BridgeCountArgs<ExtArgs>,
            result: $Utils.Optional<BridgeCountAggregateOutputType> | number
          }
        }
      }
      MetaTag: {
        payload: Prisma.$MetaTagPayload<ExtArgs>
        fields: Prisma.MetaTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetaTagFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetaTagFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          findFirst: {
            args: Prisma.MetaTagFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetaTagFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          findMany: {
            args: Prisma.MetaTagFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>[]
          }
          create: {
            args: Prisma.MetaTagCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          createMany: {
            args: Prisma.MetaTagCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MetaTagDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          update: {
            args: Prisma.MetaTagUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          deleteMany: {
            args: Prisma.MetaTagDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MetaTagUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MetaTagUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MetaTagPayload>
          }
          aggregate: {
            args: Prisma.MetaTagAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMetaTag>
          }
          groupBy: {
            args: Prisma.MetaTagGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MetaTagGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MetaTagFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.MetaTagAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.MetaTagCountArgs<ExtArgs>,
            result: $Utils.Optional<MetaTagCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Wedding
   */

  export type AggregateWedding = {
    _count: WeddingCountAggregateOutputType | null
    _min: WeddingMinAggregateOutputType | null
    _max: WeddingMaxAggregateOutputType | null
  }

  export type WeddingMinAggregateOutputType = {
    id: string | null
    weddingHouse: string | null
    weddingHouseAddress: string | null
    bus: string | null
    subway: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type WeddingMaxAggregateOutputType = {
    id: string | null
    weddingHouse: string | null
    weddingHouseAddress: string | null
    bus: string | null
    subway: string | null
    description: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type WeddingCountAggregateOutputType = {
    id: number
    weddingHouse: number
    weddingHouseAddress: number
    bus: number
    subway: number
    description: number
    date: number
    createdAt: number
    _all: number
  }


  export type WeddingMinAggregateInputType = {
    id?: true
    weddingHouse?: true
    weddingHouseAddress?: true
    bus?: true
    subway?: true
    description?: true
    date?: true
    createdAt?: true
  }

  export type WeddingMaxAggregateInputType = {
    id?: true
    weddingHouse?: true
    weddingHouseAddress?: true
    bus?: true
    subway?: true
    description?: true
    date?: true
    createdAt?: true
  }

  export type WeddingCountAggregateInputType = {
    id?: true
    weddingHouse?: true
    weddingHouseAddress?: true
    bus?: true
    subway?: true
    description?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type WeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wedding to aggregate.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weddings
    **/
    _count?: true | WeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeddingMaxAggregateInputType
  }

  export type GetWeddingAggregateType<T extends WeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateWedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWedding[P]>
      : GetScalarType<T[P], AggregateWedding[P]>
  }




  export type WeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingWhereInput
    orderBy?: WeddingOrderByWithAggregationInput | WeddingOrderByWithAggregationInput[]
    by: WeddingScalarFieldEnum[] | WeddingScalarFieldEnum
    having?: WeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeddingCountAggregateInputType | true
    _min?: WeddingMinAggregateInputType
    _max?: WeddingMaxAggregateInputType
  }

  export type WeddingGroupByOutputType = {
    id: string
    weddingHouse: string
    weddingHouseAddress: string
    bus: string | null
    subway: string | null
    description: string
    date: Date
    createdAt: Date
    _count: WeddingCountAggregateOutputType | null
    _min: WeddingMinAggregateOutputType | null
    _max: WeddingMaxAggregateOutputType | null
  }

  type GetWeddingGroupByPayload<T extends WeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeddingGroupByOutputType[P]>
            : GetScalarType<T[P], WeddingGroupByOutputType[P]>
        }
      >
    >


  export type WeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingHouse?: boolean
    weddingHouseAddress?: boolean
    bus?: boolean
    subway?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
    Groom?: boolean | Wedding$GroomArgs<ExtArgs>
    Bridge?: boolean | Wedding$BridgeArgs<ExtArgs>
    MetaTag?: boolean | Wedding$MetaTagArgs<ExtArgs>
  }, ExtArgs["result"]["wedding"]>

  export type WeddingSelectScalar = {
    id?: boolean
    weddingHouse?: boolean
    weddingHouseAddress?: boolean
    bus?: boolean
    subway?: boolean
    description?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type WeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Groom?: boolean | Wedding$GroomArgs<ExtArgs>
    Bridge?: boolean | Wedding$BridgeArgs<ExtArgs>
    MetaTag?: boolean | Wedding$MetaTagArgs<ExtArgs>
  }


  export type $WeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wedding"
    objects: {
      Groom: Prisma.$GroomPayload<ExtArgs> | null
      Bridge: Prisma.$BridgePayload<ExtArgs> | null
      MetaTag: Prisma.$MetaTagPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingHouse: string
      weddingHouseAddress: string
      bus: string | null
      subway: string | null
      description: string
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["wedding"]>
    composites: {}
  }


  type WeddingGetPayload<S extends boolean | null | undefined | WeddingDefaultArgs> = $Result.GetResult<Prisma.$WeddingPayload, S>

  type WeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeddingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeddingCountAggregateInputType | true
    }

  export interface WeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wedding'], meta: { name: 'Wedding' } }
    /**
     * Find zero or one Wedding that matches the filter.
     * @param {WeddingFindUniqueArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WeddingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingFindUniqueArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Wedding that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WeddingFindUniqueOrThrowArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WeddingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Wedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindFirstArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WeddingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingFindFirstArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Wedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindFirstOrThrowArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WeddingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Weddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weddings
     * const weddings = await prisma.wedding.findMany()
     * 
     * // Get first 10 Weddings
     * const weddings = await prisma.wedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weddingWithIdOnly = await prisma.wedding.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WeddingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Wedding.
     * @param {WeddingCreateArgs} args - Arguments to create a Wedding.
     * @example
     * // Create one Wedding
     * const Wedding = await prisma.wedding.create({
     *   data: {
     *     // ... data to create a Wedding
     *   }
     * })
     * 
    **/
    create<T extends WeddingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingCreateArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Weddings.
     *     @param {WeddingCreateManyArgs} args - Arguments to create many Weddings.
     *     @example
     *     // Create many Weddings
     *     const wedding = await prisma.wedding.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WeddingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wedding.
     * @param {WeddingDeleteArgs} args - Arguments to delete one Wedding.
     * @example
     * // Delete one Wedding
     * const Wedding = await prisma.wedding.delete({
     *   where: {
     *     // ... filter to delete one Wedding
     *   }
     * })
     * 
    **/
    delete<T extends WeddingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingDeleteArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Wedding.
     * @param {WeddingUpdateArgs} args - Arguments to update one Wedding.
     * @example
     * // Update one Wedding
     * const wedding = await prisma.wedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WeddingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingUpdateArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Weddings.
     * @param {WeddingDeleteManyArgs} args - Arguments to filter Weddings to delete.
     * @example
     * // Delete a few Weddings
     * const { count } = await prisma.wedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WeddingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WeddingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weddings
     * const wedding = await prisma.wedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WeddingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wedding.
     * @param {WeddingUpsertArgs} args - Arguments to update or create a Wedding.
     * @example
     * // Update or create a Wedding
     * const wedding = await prisma.wedding.upsert({
     *   create: {
     *     // ... data to create a Wedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wedding we want to update
     *   }
     * })
    **/
    upsert<T extends WeddingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WeddingUpsertArgs<ExtArgs>>
    ): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Weddings that matches the filter.
     * @param {WeddingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const wedding = await prisma.wedding.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: WeddingFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Wedding.
     * @param {WeddingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const wedding = await prisma.wedding.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: WeddingAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Weddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingCountArgs} args - Arguments to filter Weddings to count.
     * @example
     * // Count the number of Weddings
     * const count = await prisma.wedding.count({
     *   where: {
     *     // ... the filter for the Weddings we want to count
     *   }
     * })
    **/
    count<T extends WeddingCountArgs>(
      args?: Subset<T, WeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeddingAggregateArgs>(args: Subset<T, WeddingAggregateArgs>): Prisma.PrismaPromise<GetWeddingAggregateType<T>>

    /**
     * Group by Wedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeddingGroupByArgs['orderBy'] }
        : { orderBy?: WeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wedding model
   */
  readonly fields: WeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Groom<T extends Wedding$GroomArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$GroomArgs<ExtArgs>>): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Bridge<T extends Wedding$BridgeArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$BridgeArgs<ExtArgs>>): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    MetaTag<T extends Wedding$MetaTagArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$MetaTagArgs<ExtArgs>>): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Wedding model
   */ 
  interface WeddingFieldRefs {
    readonly id: FieldRef<"Wedding", 'String'>
    readonly weddingHouse: FieldRef<"Wedding", 'String'>
    readonly weddingHouseAddress: FieldRef<"Wedding", 'String'>
    readonly bus: FieldRef<"Wedding", 'String'>
    readonly subway: FieldRef<"Wedding", 'String'>
    readonly description: FieldRef<"Wedding", 'String'>
    readonly date: FieldRef<"Wedding", 'DateTime'>
    readonly createdAt: FieldRef<"Wedding", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Wedding findUnique
   */
  export type WeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where: WeddingWhereUniqueInput
  }


  /**
   * Wedding findUniqueOrThrow
   */
  export type WeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where: WeddingWhereUniqueInput
  }


  /**
   * Wedding findFirst
   */
  export type WeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weddings.
     */
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }


  /**
   * Wedding findFirstOrThrow
   */
  export type WeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weddings.
     */
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }


  /**
   * Wedding findMany
   */
  export type WeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Weddings to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }


  /**
   * Wedding create
   */
  export type WeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a Wedding.
     */
    data: XOR<WeddingCreateInput, WeddingUncheckedCreateInput>
  }


  /**
   * Wedding createMany
   */
  export type WeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weddings.
     */
    data: WeddingCreateManyInput | WeddingCreateManyInput[]
  }


  /**
   * Wedding update
   */
  export type WeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a Wedding.
     */
    data: XOR<WeddingUpdateInput, WeddingUncheckedUpdateInput>
    /**
     * Choose, which Wedding to update.
     */
    where: WeddingWhereUniqueInput
  }


  /**
   * Wedding updateMany
   */
  export type WeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weddings.
     */
    data: XOR<WeddingUpdateManyMutationInput, WeddingUncheckedUpdateManyInput>
    /**
     * Filter which Weddings to update
     */
    where?: WeddingWhereInput
  }


  /**
   * Wedding upsert
   */
  export type WeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the Wedding to update in case it exists.
     */
    where: WeddingWhereUniqueInput
    /**
     * In case the Wedding found by the `where` argument doesn't exist, create a new Wedding with this data.
     */
    create: XOR<WeddingCreateInput, WeddingUncheckedCreateInput>
    /**
     * In case the Wedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeddingUpdateInput, WeddingUncheckedUpdateInput>
  }


  /**
   * Wedding delete
   */
  export type WeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter which Wedding to delete.
     */
    where: WeddingWhereUniqueInput
  }


  /**
   * Wedding deleteMany
   */
  export type WeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weddings to delete
     */
    where?: WeddingWhereInput
  }


  /**
   * Wedding findRaw
   */
  export type WeddingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Wedding aggregateRaw
   */
  export type WeddingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Wedding.Groom
   */
  export type Wedding$GroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    where?: GroomWhereInput
  }


  /**
   * Wedding.Bridge
   */
  export type Wedding$BridgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    where?: BridgeWhereInput
  }


  /**
   * Wedding.MetaTag
   */
  export type Wedding$MetaTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    where?: MetaTagWhereInput
  }


  /**
   * Wedding without action
   */
  export type WeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WeddingInclude<ExtArgs> | null
  }



  /**
   * Model Groom
   */

  export type AggregateGroom = {
    _count: GroomCountAggregateOutputType | null
    _min: GroomMinAggregateOutputType | null
    _max: GroomMaxAggregateOutputType | null
  }

  export type GroomMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    groom: string | null
    groomMother: string | null
    groomFather: string | null
    groomBank: string | null
    groomMotherBank: string | null
    groomFatherBank: string | null
    groomAccount: string | null
    groomMotherAccount: string | null
    groomFatherAccount: string | null
  }

  export type GroomMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    groom: string | null
    groomMother: string | null
    groomFather: string | null
    groomBank: string | null
    groomMotherBank: string | null
    groomFatherBank: string | null
    groomAccount: string | null
    groomMotherAccount: string | null
    groomFatherAccount: string | null
  }

  export type GroomCountAggregateOutputType = {
    id: number
    weddingId: number
    groom: number
    groomMother: number
    groomFather: number
    groomBank: number
    groomMotherBank: number
    groomFatherBank: number
    groomAccount: number
    groomMotherAccount: number
    groomFatherAccount: number
    _all: number
  }


  export type GroomMinAggregateInputType = {
    id?: true
    weddingId?: true
    groom?: true
    groomMother?: true
    groomFather?: true
    groomBank?: true
    groomMotherBank?: true
    groomFatherBank?: true
    groomAccount?: true
    groomMotherAccount?: true
    groomFatherAccount?: true
  }

  export type GroomMaxAggregateInputType = {
    id?: true
    weddingId?: true
    groom?: true
    groomMother?: true
    groomFather?: true
    groomBank?: true
    groomMotherBank?: true
    groomFatherBank?: true
    groomAccount?: true
    groomMotherAccount?: true
    groomFatherAccount?: true
  }

  export type GroomCountAggregateInputType = {
    id?: true
    weddingId?: true
    groom?: true
    groomMother?: true
    groomFather?: true
    groomBank?: true
    groomMotherBank?: true
    groomFatherBank?: true
    groomAccount?: true
    groomMotherAccount?: true
    groomFatherAccount?: true
    _all?: true
  }

  export type GroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groom to aggregate.
     */
    where?: GroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grooms to fetch.
     */
    orderBy?: GroomOrderByWithRelationInput | GroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grooms
    **/
    _count?: true | GroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroomMaxAggregateInputType
  }

  export type GetGroomAggregateType<T extends GroomAggregateArgs> = {
        [P in keyof T & keyof AggregateGroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroom[P]>
      : GetScalarType<T[P], AggregateGroom[P]>
  }




  export type GroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroomWhereInput
    orderBy?: GroomOrderByWithAggregationInput | GroomOrderByWithAggregationInput[]
    by: GroomScalarFieldEnum[] | GroomScalarFieldEnum
    having?: GroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroomCountAggregateInputType | true
    _min?: GroomMinAggregateInputType
    _max?: GroomMaxAggregateInputType
  }

  export type GroomGroupByOutputType = {
    id: string
    weddingId: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
    _count: GroomCountAggregateOutputType | null
    _min: GroomMinAggregateOutputType | null
    _max: GroomMaxAggregateOutputType | null
  }

  type GetGroomGroupByPayload<T extends GroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroomGroupByOutputType[P]>
            : GetScalarType<T[P], GroomGroupByOutputType[P]>
        }
      >
    >


  export type GroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    groom?: boolean
    groomMother?: boolean
    groomFather?: boolean
    groomBank?: boolean
    groomMotherBank?: boolean
    groomFatherBank?: boolean
    groomAccount?: boolean
    groomMotherAccount?: boolean
    groomFatherAccount?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groom"]>

  export type GroomSelectScalar = {
    id?: boolean
    weddingId?: boolean
    groom?: boolean
    groomMother?: boolean
    groomFather?: boolean
    groomBank?: boolean
    groomMotherBank?: boolean
    groomFatherBank?: boolean
    groomAccount?: boolean
    groomMotherAccount?: boolean
    groomFatherAccount?: boolean
  }

  export type GroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }


  export type $GroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groom"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      groom: string
      groomMother: string
      groomFather: string
      groomBank: string
      groomMotherBank: string
      groomFatherBank: string
      groomAccount: string
      groomMotherAccount: string
      groomFatherAccount: string
    }, ExtArgs["result"]["groom"]>
    composites: {}
  }


  type GroomGetPayload<S extends boolean | null | undefined | GroomDefaultArgs> = $Result.GetResult<Prisma.$GroomPayload, S>

  type GroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GroomCountAggregateInputType | true
    }

  export interface GroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groom'], meta: { name: 'Groom' } }
    /**
     * Find zero or one Groom that matches the filter.
     * @param {GroomFindUniqueArgs} args - Arguments to find a Groom
     * @example
     * // Get one Groom
     * const groom = await prisma.groom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroomFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroomFindUniqueArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Groom that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroomFindUniqueOrThrowArgs} args - Arguments to find a Groom
     * @example
     * // Get one Groom
     * const groom = await prisma.groom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroomFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Groom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomFindFirstArgs} args - Arguments to find a Groom
     * @example
     * // Get one Groom
     * const groom = await prisma.groom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroomFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomFindFirstArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Groom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomFindFirstOrThrowArgs} args - Arguments to find a Groom
     * @example
     * // Get one Groom
     * const groom = await prisma.groom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroomFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Grooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grooms
     * const grooms = await prisma.groom.findMany()
     * 
     * // Get first 10 Grooms
     * const grooms = await prisma.groom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groomWithIdOnly = await prisma.groom.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroomFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Groom.
     * @param {GroomCreateArgs} args - Arguments to create a Groom.
     * @example
     * // Create one Groom
     * const Groom = await prisma.groom.create({
     *   data: {
     *     // ... data to create a Groom
     *   }
     * })
     * 
    **/
    create<T extends GroomCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroomCreateArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Grooms.
     *     @param {GroomCreateManyArgs} args - Arguments to create many Grooms.
     *     @example
     *     // Create many Grooms
     *     const groom = await prisma.groom.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroomCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Groom.
     * @param {GroomDeleteArgs} args - Arguments to delete one Groom.
     * @example
     * // Delete one Groom
     * const Groom = await prisma.groom.delete({
     *   where: {
     *     // ... filter to delete one Groom
     *   }
     * })
     * 
    **/
    delete<T extends GroomDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroomDeleteArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Groom.
     * @param {GroomUpdateArgs} args - Arguments to update one Groom.
     * @example
     * // Update one Groom
     * const groom = await prisma.groom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroomUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroomUpdateArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Grooms.
     * @param {GroomDeleteManyArgs} args - Arguments to filter Grooms to delete.
     * @example
     * // Delete a few Grooms
     * const { count } = await prisma.groom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroomDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroomDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grooms
     * const groom = await prisma.groom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroomUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroomUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Groom.
     * @param {GroomUpsertArgs} args - Arguments to update or create a Groom.
     * @example
     * // Update or create a Groom
     * const groom = await prisma.groom.upsert({
     *   create: {
     *     // ... data to create a Groom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groom we want to update
     *   }
     * })
    **/
    upsert<T extends GroomUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroomUpsertArgs<ExtArgs>>
    ): Prisma__GroomClient<$Result.GetResult<Prisma.$GroomPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Grooms that matches the filter.
     * @param {GroomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groom = await prisma.groom.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GroomFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Groom.
     * @param {GroomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groom = await prisma.groom.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GroomAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Grooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomCountArgs} args - Arguments to filter Grooms to count.
     * @example
     * // Count the number of Grooms
     * const count = await prisma.groom.count({
     *   where: {
     *     // ... the filter for the Grooms we want to count
     *   }
     * })
    **/
    count<T extends GroomCountArgs>(
      args?: Subset<T, GroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroomAggregateArgs>(args: Subset<T, GroomAggregateArgs>): Prisma.PrismaPromise<GetGroomAggregateType<T>>

    /**
     * Group by Groom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroomGroupByArgs['orderBy'] }
        : { orderBy?: GroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groom model
   */
  readonly fields: GroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Groom model
   */ 
  interface GroomFieldRefs {
    readonly id: FieldRef<"Groom", 'String'>
    readonly weddingId: FieldRef<"Groom", 'String'>
    readonly groom: FieldRef<"Groom", 'String'>
    readonly groomMother: FieldRef<"Groom", 'String'>
    readonly groomFather: FieldRef<"Groom", 'String'>
    readonly groomBank: FieldRef<"Groom", 'String'>
    readonly groomMotherBank: FieldRef<"Groom", 'String'>
    readonly groomFatherBank: FieldRef<"Groom", 'String'>
    readonly groomAccount: FieldRef<"Groom", 'String'>
    readonly groomMotherAccount: FieldRef<"Groom", 'String'>
    readonly groomFatherAccount: FieldRef<"Groom", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Groom findUnique
   */
  export type GroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter, which Groom to fetch.
     */
    where: GroomWhereUniqueInput
  }


  /**
   * Groom findUniqueOrThrow
   */
  export type GroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter, which Groom to fetch.
     */
    where: GroomWhereUniqueInput
  }


  /**
   * Groom findFirst
   */
  export type GroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter, which Groom to fetch.
     */
    where?: GroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grooms to fetch.
     */
    orderBy?: GroomOrderByWithRelationInput | GroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grooms.
     */
    cursor?: GroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grooms.
     */
    distinct?: GroomScalarFieldEnum | GroomScalarFieldEnum[]
  }


  /**
   * Groom findFirstOrThrow
   */
  export type GroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter, which Groom to fetch.
     */
    where?: GroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grooms to fetch.
     */
    orderBy?: GroomOrderByWithRelationInput | GroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grooms.
     */
    cursor?: GroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grooms.
     */
    distinct?: GroomScalarFieldEnum | GroomScalarFieldEnum[]
  }


  /**
   * Groom findMany
   */
  export type GroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter, which Grooms to fetch.
     */
    where?: GroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grooms to fetch.
     */
    orderBy?: GroomOrderByWithRelationInput | GroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grooms.
     */
    cursor?: GroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grooms.
     */
    skip?: number
    distinct?: GroomScalarFieldEnum | GroomScalarFieldEnum[]
  }


  /**
   * Groom create
   */
  export type GroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Groom.
     */
    data: XOR<GroomCreateInput, GroomUncheckedCreateInput>
  }


  /**
   * Groom createMany
   */
  export type GroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grooms.
     */
    data: GroomCreateManyInput | GroomCreateManyInput[]
  }


  /**
   * Groom update
   */
  export type GroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Groom.
     */
    data: XOR<GroomUpdateInput, GroomUncheckedUpdateInput>
    /**
     * Choose, which Groom to update.
     */
    where: GroomWhereUniqueInput
  }


  /**
   * Groom updateMany
   */
  export type GroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grooms.
     */
    data: XOR<GroomUpdateManyMutationInput, GroomUncheckedUpdateManyInput>
    /**
     * Filter which Grooms to update
     */
    where?: GroomWhereInput
  }


  /**
   * Groom upsert
   */
  export type GroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Groom to update in case it exists.
     */
    where: GroomWhereUniqueInput
    /**
     * In case the Groom found by the `where` argument doesn't exist, create a new Groom with this data.
     */
    create: XOR<GroomCreateInput, GroomUncheckedCreateInput>
    /**
     * In case the Groom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroomUpdateInput, GroomUncheckedUpdateInput>
  }


  /**
   * Groom delete
   */
  export type GroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
    /**
     * Filter which Groom to delete.
     */
    where: GroomWhereUniqueInput
  }


  /**
   * Groom deleteMany
   */
  export type GroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grooms to delete
     */
    where?: GroomWhereInput
  }


  /**
   * Groom findRaw
   */
  export type GroomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Groom aggregateRaw
   */
  export type GroomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Groom without action
   */
  export type GroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groom
     */
    select?: GroomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroomInclude<ExtArgs> | null
  }



  /**
   * Model Bridge
   */

  export type AggregateBridge = {
    _count: BridgeCountAggregateOutputType | null
    _min: BridgeMinAggregateOutputType | null
    _max: BridgeMaxAggregateOutputType | null
  }

  export type BridgeMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    Bridge: string | null
    BridgeMother: string | null
    BridgeFather: string | null
    BridgeBank: string | null
    BridgeMotherBank: string | null
    BridgeFatherBank: string | null
    BridgeAccount: string | null
    BridgeMotherAccount: string | null
    BridgeFatherAccount: string | null
  }

  export type BridgeMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    Bridge: string | null
    BridgeMother: string | null
    BridgeFather: string | null
    BridgeBank: string | null
    BridgeMotherBank: string | null
    BridgeFatherBank: string | null
    BridgeAccount: string | null
    BridgeMotherAccount: string | null
    BridgeFatherAccount: string | null
  }

  export type BridgeCountAggregateOutputType = {
    id: number
    weddingId: number
    Bridge: number
    BridgeMother: number
    BridgeFather: number
    BridgeBank: number
    BridgeMotherBank: number
    BridgeFatherBank: number
    BridgeAccount: number
    BridgeMotherAccount: number
    BridgeFatherAccount: number
    _all: number
  }


  export type BridgeMinAggregateInputType = {
    id?: true
    weddingId?: true
    Bridge?: true
    BridgeMother?: true
    BridgeFather?: true
    BridgeBank?: true
    BridgeMotherBank?: true
    BridgeFatherBank?: true
    BridgeAccount?: true
    BridgeMotherAccount?: true
    BridgeFatherAccount?: true
  }

  export type BridgeMaxAggregateInputType = {
    id?: true
    weddingId?: true
    Bridge?: true
    BridgeMother?: true
    BridgeFather?: true
    BridgeBank?: true
    BridgeMotherBank?: true
    BridgeFatherBank?: true
    BridgeAccount?: true
    BridgeMotherAccount?: true
    BridgeFatherAccount?: true
  }

  export type BridgeCountAggregateInputType = {
    id?: true
    weddingId?: true
    Bridge?: true
    BridgeMother?: true
    BridgeFather?: true
    BridgeBank?: true
    BridgeMotherBank?: true
    BridgeFatherBank?: true
    BridgeAccount?: true
    BridgeMotherAccount?: true
    BridgeFatherAccount?: true
    _all?: true
  }

  export type BridgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bridge to aggregate.
     */
    where?: BridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bridges to fetch.
     */
    orderBy?: BridgeOrderByWithRelationInput | BridgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bridges
    **/
    _count?: true | BridgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BridgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BridgeMaxAggregateInputType
  }

  export type GetBridgeAggregateType<T extends BridgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBridge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBridge[P]>
      : GetScalarType<T[P], AggregateBridge[P]>
  }




  export type BridgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BridgeWhereInput
    orderBy?: BridgeOrderByWithAggregationInput | BridgeOrderByWithAggregationInput[]
    by: BridgeScalarFieldEnum[] | BridgeScalarFieldEnum
    having?: BridgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BridgeCountAggregateInputType | true
    _min?: BridgeMinAggregateInputType
    _max?: BridgeMaxAggregateInputType
  }

  export type BridgeGroupByOutputType = {
    id: string
    weddingId: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
    _count: BridgeCountAggregateOutputType | null
    _min: BridgeMinAggregateOutputType | null
    _max: BridgeMaxAggregateOutputType | null
  }

  type GetBridgeGroupByPayload<T extends BridgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BridgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BridgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BridgeGroupByOutputType[P]>
            : GetScalarType<T[P], BridgeGroupByOutputType[P]>
        }
      >
    >


  export type BridgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    Bridge?: boolean
    BridgeMother?: boolean
    BridgeFather?: boolean
    BridgeBank?: boolean
    BridgeMotherBank?: boolean
    BridgeFatherBank?: boolean
    BridgeAccount?: boolean
    BridgeMotherAccount?: boolean
    BridgeFatherAccount?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bridge"]>

  export type BridgeSelectScalar = {
    id?: boolean
    weddingId?: boolean
    Bridge?: boolean
    BridgeMother?: boolean
    BridgeFather?: boolean
    BridgeBank?: boolean
    BridgeMotherBank?: boolean
    BridgeFatherBank?: boolean
    BridgeAccount?: boolean
    BridgeMotherAccount?: boolean
    BridgeFatherAccount?: boolean
  }

  export type BridgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }


  export type $BridgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bridge"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      Bridge: string
      BridgeMother: string
      BridgeFather: string
      BridgeBank: string
      BridgeMotherBank: string
      BridgeFatherBank: string
      BridgeAccount: string
      BridgeMotherAccount: string
      BridgeFatherAccount: string
    }, ExtArgs["result"]["bridge"]>
    composites: {}
  }


  type BridgeGetPayload<S extends boolean | null | undefined | BridgeDefaultArgs> = $Result.GetResult<Prisma.$BridgePayload, S>

  type BridgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BridgeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BridgeCountAggregateInputType | true
    }

  export interface BridgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bridge'], meta: { name: 'Bridge' } }
    /**
     * Find zero or one Bridge that matches the filter.
     * @param {BridgeFindUniqueArgs} args - Arguments to find a Bridge
     * @example
     * // Get one Bridge
     * const bridge = await prisma.bridge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BridgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeFindUniqueArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bridge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BridgeFindUniqueOrThrowArgs} args - Arguments to find a Bridge
     * @example
     * // Get one Bridge
     * const bridge = await prisma.bridge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BridgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bridge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeFindFirstArgs} args - Arguments to find a Bridge
     * @example
     * // Get one Bridge
     * const bridge = await prisma.bridge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BridgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeFindFirstArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bridge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeFindFirstOrThrowArgs} args - Arguments to find a Bridge
     * @example
     * // Get one Bridge
     * const bridge = await prisma.bridge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BridgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bridges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bridges
     * const bridges = await prisma.bridge.findMany()
     * 
     * // Get first 10 Bridges
     * const bridges = await prisma.bridge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bridgeWithIdOnly = await prisma.bridge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BridgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bridge.
     * @param {BridgeCreateArgs} args - Arguments to create a Bridge.
     * @example
     * // Create one Bridge
     * const Bridge = await prisma.bridge.create({
     *   data: {
     *     // ... data to create a Bridge
     *   }
     * })
     * 
    **/
    create<T extends BridgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeCreateArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bridges.
     *     @param {BridgeCreateManyArgs} args - Arguments to create many Bridges.
     *     @example
     *     // Create many Bridges
     *     const bridge = await prisma.bridge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BridgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bridge.
     * @param {BridgeDeleteArgs} args - Arguments to delete one Bridge.
     * @example
     * // Delete one Bridge
     * const Bridge = await prisma.bridge.delete({
     *   where: {
     *     // ... filter to delete one Bridge
     *   }
     * })
     * 
    **/
    delete<T extends BridgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeDeleteArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bridge.
     * @param {BridgeUpdateArgs} args - Arguments to update one Bridge.
     * @example
     * // Update one Bridge
     * const bridge = await prisma.bridge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BridgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeUpdateArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bridges.
     * @param {BridgeDeleteManyArgs} args - Arguments to filter Bridges to delete.
     * @example
     * // Delete a few Bridges
     * const { count } = await prisma.bridge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BridgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BridgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bridges
     * const bridge = await prisma.bridge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BridgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bridge.
     * @param {BridgeUpsertArgs} args - Arguments to update or create a Bridge.
     * @example
     * // Update or create a Bridge
     * const bridge = await prisma.bridge.upsert({
     *   create: {
     *     // ... data to create a Bridge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bridge we want to update
     *   }
     * })
    **/
    upsert<T extends BridgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BridgeUpsertArgs<ExtArgs>>
    ): Prisma__BridgeClient<$Result.GetResult<Prisma.$BridgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Bridges that matches the filter.
     * @param {BridgeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const bridge = await prisma.bridge.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: BridgeFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Bridge.
     * @param {BridgeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const bridge = await prisma.bridge.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: BridgeAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Bridges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeCountArgs} args - Arguments to filter Bridges to count.
     * @example
     * // Count the number of Bridges
     * const count = await prisma.bridge.count({
     *   where: {
     *     // ... the filter for the Bridges we want to count
     *   }
     * })
    **/
    count<T extends BridgeCountArgs>(
      args?: Subset<T, BridgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BridgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BridgeAggregateArgs>(args: Subset<T, BridgeAggregateArgs>): Prisma.PrismaPromise<GetBridgeAggregateType<T>>

    /**
     * Group by Bridge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BridgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BridgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BridgeGroupByArgs['orderBy'] }
        : { orderBy?: BridgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BridgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBridgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bridge model
   */
  readonly fields: BridgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bridge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BridgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bridge model
   */ 
  interface BridgeFieldRefs {
    readonly id: FieldRef<"Bridge", 'String'>
    readonly weddingId: FieldRef<"Bridge", 'String'>
    readonly Bridge: FieldRef<"Bridge", 'String'>
    readonly BridgeMother: FieldRef<"Bridge", 'String'>
    readonly BridgeFather: FieldRef<"Bridge", 'String'>
    readonly BridgeBank: FieldRef<"Bridge", 'String'>
    readonly BridgeMotherBank: FieldRef<"Bridge", 'String'>
    readonly BridgeFatherBank: FieldRef<"Bridge", 'String'>
    readonly BridgeAccount: FieldRef<"Bridge", 'String'>
    readonly BridgeMotherAccount: FieldRef<"Bridge", 'String'>
    readonly BridgeFatherAccount: FieldRef<"Bridge", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Bridge findUnique
   */
  export type BridgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter, which Bridge to fetch.
     */
    where: BridgeWhereUniqueInput
  }


  /**
   * Bridge findUniqueOrThrow
   */
  export type BridgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter, which Bridge to fetch.
     */
    where: BridgeWhereUniqueInput
  }


  /**
   * Bridge findFirst
   */
  export type BridgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter, which Bridge to fetch.
     */
    where?: BridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bridges to fetch.
     */
    orderBy?: BridgeOrderByWithRelationInput | BridgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bridges.
     */
    cursor?: BridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bridges.
     */
    distinct?: BridgeScalarFieldEnum | BridgeScalarFieldEnum[]
  }


  /**
   * Bridge findFirstOrThrow
   */
  export type BridgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter, which Bridge to fetch.
     */
    where?: BridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bridges to fetch.
     */
    orderBy?: BridgeOrderByWithRelationInput | BridgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bridges.
     */
    cursor?: BridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bridges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bridges.
     */
    distinct?: BridgeScalarFieldEnum | BridgeScalarFieldEnum[]
  }


  /**
   * Bridge findMany
   */
  export type BridgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter, which Bridges to fetch.
     */
    where?: BridgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bridges to fetch.
     */
    orderBy?: BridgeOrderByWithRelationInput | BridgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bridges.
     */
    cursor?: BridgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bridges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bridges.
     */
    skip?: number
    distinct?: BridgeScalarFieldEnum | BridgeScalarFieldEnum[]
  }


  /**
   * Bridge create
   */
  export type BridgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Bridge.
     */
    data: XOR<BridgeCreateInput, BridgeUncheckedCreateInput>
  }


  /**
   * Bridge createMany
   */
  export type BridgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bridges.
     */
    data: BridgeCreateManyInput | BridgeCreateManyInput[]
  }


  /**
   * Bridge update
   */
  export type BridgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Bridge.
     */
    data: XOR<BridgeUpdateInput, BridgeUncheckedUpdateInput>
    /**
     * Choose, which Bridge to update.
     */
    where: BridgeWhereUniqueInput
  }


  /**
   * Bridge updateMany
   */
  export type BridgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bridges.
     */
    data: XOR<BridgeUpdateManyMutationInput, BridgeUncheckedUpdateManyInput>
    /**
     * Filter which Bridges to update
     */
    where?: BridgeWhereInput
  }


  /**
   * Bridge upsert
   */
  export type BridgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Bridge to update in case it exists.
     */
    where: BridgeWhereUniqueInput
    /**
     * In case the Bridge found by the `where` argument doesn't exist, create a new Bridge with this data.
     */
    create: XOR<BridgeCreateInput, BridgeUncheckedCreateInput>
    /**
     * In case the Bridge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BridgeUpdateInput, BridgeUncheckedUpdateInput>
  }


  /**
   * Bridge delete
   */
  export type BridgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
    /**
     * Filter which Bridge to delete.
     */
    where: BridgeWhereUniqueInput
  }


  /**
   * Bridge deleteMany
   */
  export type BridgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bridges to delete
     */
    where?: BridgeWhereInput
  }


  /**
   * Bridge findRaw
   */
  export type BridgeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Bridge aggregateRaw
   */
  export type BridgeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Bridge without action
   */
  export type BridgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bridge
     */
    select?: BridgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BridgeInclude<ExtArgs> | null
  }



  /**
   * Model MetaTag
   */

  export type AggregateMetaTag = {
    _count: MetaTagCountAggregateOutputType | null
    _min: MetaTagMinAggregateOutputType | null
    _max: MetaTagMaxAggregateOutputType | null
  }

  export type MetaTagMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    title: string | null
    ogUrl: string | null
    ogTitle: string | null
    ogImage: string | null
    ogDescription: string | null
  }

  export type MetaTagMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    title: string | null
    ogUrl: string | null
    ogTitle: string | null
    ogImage: string | null
    ogDescription: string | null
  }

  export type MetaTagCountAggregateOutputType = {
    id: number
    weddingId: number
    title: number
    ogUrl: number
    ogTitle: number
    ogImage: number
    ogDescription: number
    _all: number
  }


  export type MetaTagMinAggregateInputType = {
    id?: true
    weddingId?: true
    title?: true
    ogUrl?: true
    ogTitle?: true
    ogImage?: true
    ogDescription?: true
  }

  export type MetaTagMaxAggregateInputType = {
    id?: true
    weddingId?: true
    title?: true
    ogUrl?: true
    ogTitle?: true
    ogImage?: true
    ogDescription?: true
  }

  export type MetaTagCountAggregateInputType = {
    id?: true
    weddingId?: true
    title?: true
    ogUrl?: true
    ogTitle?: true
    ogImage?: true
    ogDescription?: true
    _all?: true
  }

  export type MetaTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaTag to aggregate.
     */
    where?: MetaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTags to fetch.
     */
    orderBy?: MetaTagOrderByWithRelationInput | MetaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetaTags
    **/
    _count?: true | MetaTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetaTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetaTagMaxAggregateInputType
  }

  export type GetMetaTagAggregateType<T extends MetaTagAggregateArgs> = {
        [P in keyof T & keyof AggregateMetaTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetaTag[P]>
      : GetScalarType<T[P], AggregateMetaTag[P]>
  }




  export type MetaTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetaTagWhereInput
    orderBy?: MetaTagOrderByWithAggregationInput | MetaTagOrderByWithAggregationInput[]
    by: MetaTagScalarFieldEnum[] | MetaTagScalarFieldEnum
    having?: MetaTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetaTagCountAggregateInputType | true
    _min?: MetaTagMinAggregateInputType
    _max?: MetaTagMaxAggregateInputType
  }

  export type MetaTagGroupByOutputType = {
    id: string
    weddingId: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
    _count: MetaTagCountAggregateOutputType | null
    _min: MetaTagMinAggregateOutputType | null
    _max: MetaTagMaxAggregateOutputType | null
  }

  type GetMetaTagGroupByPayload<T extends MetaTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetaTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetaTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetaTagGroupByOutputType[P]>
            : GetScalarType<T[P], MetaTagGroupByOutputType[P]>
        }
      >
    >


  export type MetaTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    title?: boolean
    ogUrl?: boolean
    ogTitle?: boolean
    ogImage?: boolean
    ogDescription?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metaTag"]>

  export type MetaTagSelectScalar = {
    id?: boolean
    weddingId?: boolean
    title?: boolean
    ogUrl?: boolean
    ogTitle?: boolean
    ogImage?: boolean
    ogDescription?: boolean
  }

  export type MetaTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }


  export type $MetaTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetaTag"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      title: string
      ogUrl: string
      ogTitle: string
      ogImage: string
      ogDescription: string
    }, ExtArgs["result"]["metaTag"]>
    composites: {}
  }


  type MetaTagGetPayload<S extends boolean | null | undefined | MetaTagDefaultArgs> = $Result.GetResult<Prisma.$MetaTagPayload, S>

  type MetaTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MetaTagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MetaTagCountAggregateInputType | true
    }

  export interface MetaTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetaTag'], meta: { name: 'MetaTag' } }
    /**
     * Find zero or one MetaTag that matches the filter.
     * @param {MetaTagFindUniqueArgs} args - Arguments to find a MetaTag
     * @example
     * // Get one MetaTag
     * const metaTag = await prisma.metaTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MetaTagFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagFindUniqueArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MetaTag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MetaTagFindUniqueOrThrowArgs} args - Arguments to find a MetaTag
     * @example
     * // Get one MetaTag
     * const metaTag = await prisma.metaTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MetaTagFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MetaTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagFindFirstArgs} args - Arguments to find a MetaTag
     * @example
     * // Get one MetaTag
     * const metaTag = await prisma.metaTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MetaTagFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagFindFirstArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MetaTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagFindFirstOrThrowArgs} args - Arguments to find a MetaTag
     * @example
     * // Get one MetaTag
     * const metaTag = await prisma.metaTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MetaTagFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MetaTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetaTags
     * const metaTags = await prisma.metaTag.findMany()
     * 
     * // Get first 10 MetaTags
     * const metaTags = await prisma.metaTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metaTagWithIdOnly = await prisma.metaTag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MetaTagFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MetaTag.
     * @param {MetaTagCreateArgs} args - Arguments to create a MetaTag.
     * @example
     * // Create one MetaTag
     * const MetaTag = await prisma.metaTag.create({
     *   data: {
     *     // ... data to create a MetaTag
     *   }
     * })
     * 
    **/
    create<T extends MetaTagCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagCreateArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MetaTags.
     *     @param {MetaTagCreateManyArgs} args - Arguments to create many MetaTags.
     *     @example
     *     // Create many MetaTags
     *     const metaTag = await prisma.metaTag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MetaTagCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MetaTag.
     * @param {MetaTagDeleteArgs} args - Arguments to delete one MetaTag.
     * @example
     * // Delete one MetaTag
     * const MetaTag = await prisma.metaTag.delete({
     *   where: {
     *     // ... filter to delete one MetaTag
     *   }
     * })
     * 
    **/
    delete<T extends MetaTagDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagDeleteArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MetaTag.
     * @param {MetaTagUpdateArgs} args - Arguments to update one MetaTag.
     * @example
     * // Update one MetaTag
     * const metaTag = await prisma.metaTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MetaTagUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagUpdateArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MetaTags.
     * @param {MetaTagDeleteManyArgs} args - Arguments to filter MetaTags to delete.
     * @example
     * // Delete a few MetaTags
     * const { count } = await prisma.metaTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MetaTagDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MetaTagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetaTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetaTags
     * const metaTag = await prisma.metaTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MetaTagUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MetaTag.
     * @param {MetaTagUpsertArgs} args - Arguments to update or create a MetaTag.
     * @example
     * // Update or create a MetaTag
     * const metaTag = await prisma.metaTag.upsert({
     *   create: {
     *     // ... data to create a MetaTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetaTag we want to update
     *   }
     * })
    **/
    upsert<T extends MetaTagUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MetaTagUpsertArgs<ExtArgs>>
    ): Prisma__MetaTagClient<$Result.GetResult<Prisma.$MetaTagPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more MetaTags that matches the filter.
     * @param {MetaTagFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const metaTag = await prisma.metaTag.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MetaTagFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MetaTag.
     * @param {MetaTagAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const metaTag = await prisma.metaTag.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MetaTagAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of MetaTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagCountArgs} args - Arguments to filter MetaTags to count.
     * @example
     * // Count the number of MetaTags
     * const count = await prisma.metaTag.count({
     *   where: {
     *     // ... the filter for the MetaTags we want to count
     *   }
     * })
    **/
    count<T extends MetaTagCountArgs>(
      args?: Subset<T, MetaTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetaTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetaTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetaTagAggregateArgs>(args: Subset<T, MetaTagAggregateArgs>): Prisma.PrismaPromise<GetMetaTagAggregateType<T>>

    /**
     * Group by MetaTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetaTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetaTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetaTagGroupByArgs['orderBy'] }
        : { orderBy?: MetaTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetaTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetaTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetaTag model
   */
  readonly fields: MetaTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetaTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetaTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MetaTag model
   */ 
  interface MetaTagFieldRefs {
    readonly id: FieldRef<"MetaTag", 'String'>
    readonly weddingId: FieldRef<"MetaTag", 'String'>
    readonly title: FieldRef<"MetaTag", 'String'>
    readonly ogUrl: FieldRef<"MetaTag", 'String'>
    readonly ogTitle: FieldRef<"MetaTag", 'String'>
    readonly ogImage: FieldRef<"MetaTag", 'String'>
    readonly ogDescription: FieldRef<"MetaTag", 'String'>
  }
    

  // Custom InputTypes

  /**
   * MetaTag findUnique
   */
  export type MetaTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter, which MetaTag to fetch.
     */
    where: MetaTagWhereUniqueInput
  }


  /**
   * MetaTag findUniqueOrThrow
   */
  export type MetaTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter, which MetaTag to fetch.
     */
    where: MetaTagWhereUniqueInput
  }


  /**
   * MetaTag findFirst
   */
  export type MetaTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter, which MetaTag to fetch.
     */
    where?: MetaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTags to fetch.
     */
    orderBy?: MetaTagOrderByWithRelationInput | MetaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaTags.
     */
    cursor?: MetaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaTags.
     */
    distinct?: MetaTagScalarFieldEnum | MetaTagScalarFieldEnum[]
  }


  /**
   * MetaTag findFirstOrThrow
   */
  export type MetaTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter, which MetaTag to fetch.
     */
    where?: MetaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTags to fetch.
     */
    orderBy?: MetaTagOrderByWithRelationInput | MetaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetaTags.
     */
    cursor?: MetaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetaTags.
     */
    distinct?: MetaTagScalarFieldEnum | MetaTagScalarFieldEnum[]
  }


  /**
   * MetaTag findMany
   */
  export type MetaTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter, which MetaTags to fetch.
     */
    where?: MetaTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetaTags to fetch.
     */
    orderBy?: MetaTagOrderByWithRelationInput | MetaTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetaTags.
     */
    cursor?: MetaTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetaTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetaTags.
     */
    skip?: number
    distinct?: MetaTagScalarFieldEnum | MetaTagScalarFieldEnum[]
  }


  /**
   * MetaTag create
   */
  export type MetaTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * The data needed to create a MetaTag.
     */
    data: XOR<MetaTagCreateInput, MetaTagUncheckedCreateInput>
  }


  /**
   * MetaTag createMany
   */
  export type MetaTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetaTags.
     */
    data: MetaTagCreateManyInput | MetaTagCreateManyInput[]
  }


  /**
   * MetaTag update
   */
  export type MetaTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * The data needed to update a MetaTag.
     */
    data: XOR<MetaTagUpdateInput, MetaTagUncheckedUpdateInput>
    /**
     * Choose, which MetaTag to update.
     */
    where: MetaTagWhereUniqueInput
  }


  /**
   * MetaTag updateMany
   */
  export type MetaTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetaTags.
     */
    data: XOR<MetaTagUpdateManyMutationInput, MetaTagUncheckedUpdateManyInput>
    /**
     * Filter which MetaTags to update
     */
    where?: MetaTagWhereInput
  }


  /**
   * MetaTag upsert
   */
  export type MetaTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * The filter to search for the MetaTag to update in case it exists.
     */
    where: MetaTagWhereUniqueInput
    /**
     * In case the MetaTag found by the `where` argument doesn't exist, create a new MetaTag with this data.
     */
    create: XOR<MetaTagCreateInput, MetaTagUncheckedCreateInput>
    /**
     * In case the MetaTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetaTagUpdateInput, MetaTagUncheckedUpdateInput>
  }


  /**
   * MetaTag delete
   */
  export type MetaTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
    /**
     * Filter which MetaTag to delete.
     */
    where: MetaTagWhereUniqueInput
  }


  /**
   * MetaTag deleteMany
   */
  export type MetaTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetaTags to delete
     */
    where?: MetaTagWhereInput
  }


  /**
   * MetaTag findRaw
   */
  export type MetaTagFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MetaTag aggregateRaw
   */
  export type MetaTagAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * MetaTag without action
   */
  export type MetaTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetaTag
     */
    select?: MetaTagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MetaTagInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const WeddingScalarFieldEnum: {
    id: 'id',
    weddingHouse: 'weddingHouse',
    weddingHouseAddress: 'weddingHouseAddress',
    bus: 'bus',
    subway: 'subway',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type WeddingScalarFieldEnum = (typeof WeddingScalarFieldEnum)[keyof typeof WeddingScalarFieldEnum]


  export const GroomScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    groom: 'groom',
    groomMother: 'groomMother',
    groomFather: 'groomFather',
    groomBank: 'groomBank',
    groomMotherBank: 'groomMotherBank',
    groomFatherBank: 'groomFatherBank',
    groomAccount: 'groomAccount',
    groomMotherAccount: 'groomMotherAccount',
    groomFatherAccount: 'groomFatherAccount'
  };

  export type GroomScalarFieldEnum = (typeof GroomScalarFieldEnum)[keyof typeof GroomScalarFieldEnum]


  export const BridgeScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    Bridge: 'Bridge',
    BridgeMother: 'BridgeMother',
    BridgeFather: 'BridgeFather',
    BridgeBank: 'BridgeBank',
    BridgeMotherBank: 'BridgeMotherBank',
    BridgeFatherBank: 'BridgeFatherBank',
    BridgeAccount: 'BridgeAccount',
    BridgeMotherAccount: 'BridgeMotherAccount',
    BridgeFatherAccount: 'BridgeFatherAccount'
  };

  export type BridgeScalarFieldEnum = (typeof BridgeScalarFieldEnum)[keyof typeof BridgeScalarFieldEnum]


  export const MetaTagScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    title: 'title',
    ogUrl: 'ogUrl',
    ogTitle: 'ogTitle',
    ogImage: 'ogImage',
    ogDescription: 'ogDescription'
  };

  export type MetaTagScalarFieldEnum = (typeof MetaTagScalarFieldEnum)[keyof typeof MetaTagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type WeddingWhereInput = {
    AND?: WeddingWhereInput | WeddingWhereInput[]
    OR?: WeddingWhereInput[]
    NOT?: WeddingWhereInput | WeddingWhereInput[]
    id?: StringFilter<"Wedding"> | string
    weddingHouse?: StringFilter<"Wedding"> | string
    weddingHouseAddress?: StringFilter<"Wedding"> | string
    bus?: StringNullableFilter<"Wedding"> | string | null
    subway?: StringNullableFilter<"Wedding"> | string | null
    description?: StringFilter<"Wedding"> | string
    date?: DateTimeFilter<"Wedding"> | Date | string
    createdAt?: DateTimeFilter<"Wedding"> | Date | string
    Groom?: XOR<GroomNullableRelationFilter, GroomWhereInput> | null
    Bridge?: XOR<BridgeNullableRelationFilter, BridgeWhereInput> | null
    MetaTag?: XOR<MetaTagNullableRelationFilter, MetaTagWhereInput> | null
  }

  export type WeddingOrderByWithRelationInput = {
    id?: SortOrder
    weddingHouse?: SortOrder
    weddingHouseAddress?: SortOrder
    bus?: SortOrder
    subway?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    Groom?: GroomOrderByWithRelationInput
    Bridge?: BridgeOrderByWithRelationInput
    MetaTag?: MetaTagOrderByWithRelationInput
  }

  export type WeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeddingWhereInput | WeddingWhereInput[]
    OR?: WeddingWhereInput[]
    NOT?: WeddingWhereInput | WeddingWhereInput[]
    weddingHouse?: StringFilter<"Wedding"> | string
    weddingHouseAddress?: StringFilter<"Wedding"> | string
    bus?: StringNullableFilter<"Wedding"> | string | null
    subway?: StringNullableFilter<"Wedding"> | string | null
    description?: StringFilter<"Wedding"> | string
    date?: DateTimeFilter<"Wedding"> | Date | string
    createdAt?: DateTimeFilter<"Wedding"> | Date | string
    Groom?: XOR<GroomNullableRelationFilter, GroomWhereInput> | null
    Bridge?: XOR<BridgeNullableRelationFilter, BridgeWhereInput> | null
    MetaTag?: XOR<MetaTagNullableRelationFilter, MetaTagWhereInput> | null
  }, "id">

  export type WeddingOrderByWithAggregationInput = {
    id?: SortOrder
    weddingHouse?: SortOrder
    weddingHouseAddress?: SortOrder
    bus?: SortOrder
    subway?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: WeddingCountOrderByAggregateInput
    _max?: WeddingMaxOrderByAggregateInput
    _min?: WeddingMinOrderByAggregateInput
  }

  export type WeddingScalarWhereWithAggregatesInput = {
    AND?: WeddingScalarWhereWithAggregatesInput | WeddingScalarWhereWithAggregatesInput[]
    OR?: WeddingScalarWhereWithAggregatesInput[]
    NOT?: WeddingScalarWhereWithAggregatesInput | WeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wedding"> | string
    weddingHouse?: StringWithAggregatesFilter<"Wedding"> | string
    weddingHouseAddress?: StringWithAggregatesFilter<"Wedding"> | string
    bus?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    subway?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    description?: StringWithAggregatesFilter<"Wedding"> | string
    date?: DateTimeWithAggregatesFilter<"Wedding"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Wedding"> | Date | string
  }

  export type GroomWhereInput = {
    AND?: GroomWhereInput | GroomWhereInput[]
    OR?: GroomWhereInput[]
    NOT?: GroomWhereInput | GroomWhereInput[]
    id?: StringFilter<"Groom"> | string
    weddingId?: StringFilter<"Groom"> | string
    groom?: StringFilter<"Groom"> | string
    groomMother?: StringFilter<"Groom"> | string
    groomFather?: StringFilter<"Groom"> | string
    groomBank?: StringFilter<"Groom"> | string
    groomMotherBank?: StringFilter<"Groom"> | string
    groomFatherBank?: StringFilter<"Groom"> | string
    groomAccount?: StringFilter<"Groom"> | string
    groomMotherAccount?: StringFilter<"Groom"> | string
    groomFatherAccount?: StringFilter<"Groom"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }

  export type GroomOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    groom?: SortOrder
    groomMother?: SortOrder
    groomFather?: SortOrder
    groomBank?: SortOrder
    groomMotherBank?: SortOrder
    groomFatherBank?: SortOrder
    groomAccount?: SortOrder
    groomMotherAccount?: SortOrder
    groomFatherAccount?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
  }

  export type GroomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weddingId?: string
    AND?: GroomWhereInput | GroomWhereInput[]
    OR?: GroomWhereInput[]
    NOT?: GroomWhereInput | GroomWhereInput[]
    groom?: StringFilter<"Groom"> | string
    groomMother?: StringFilter<"Groom"> | string
    groomFather?: StringFilter<"Groom"> | string
    groomBank?: StringFilter<"Groom"> | string
    groomMotherBank?: StringFilter<"Groom"> | string
    groomFatherBank?: StringFilter<"Groom"> | string
    groomAccount?: StringFilter<"Groom"> | string
    groomMotherAccount?: StringFilter<"Groom"> | string
    groomFatherAccount?: StringFilter<"Groom"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }, "id" | "weddingId">

  export type GroomOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    groom?: SortOrder
    groomMother?: SortOrder
    groomFather?: SortOrder
    groomBank?: SortOrder
    groomMotherBank?: SortOrder
    groomFatherBank?: SortOrder
    groomAccount?: SortOrder
    groomMotherAccount?: SortOrder
    groomFatherAccount?: SortOrder
    _count?: GroomCountOrderByAggregateInput
    _max?: GroomMaxOrderByAggregateInput
    _min?: GroomMinOrderByAggregateInput
  }

  export type GroomScalarWhereWithAggregatesInput = {
    AND?: GroomScalarWhereWithAggregatesInput | GroomScalarWhereWithAggregatesInput[]
    OR?: GroomScalarWhereWithAggregatesInput[]
    NOT?: GroomScalarWhereWithAggregatesInput | GroomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Groom"> | string
    weddingId?: StringWithAggregatesFilter<"Groom"> | string
    groom?: StringWithAggregatesFilter<"Groom"> | string
    groomMother?: StringWithAggregatesFilter<"Groom"> | string
    groomFather?: StringWithAggregatesFilter<"Groom"> | string
    groomBank?: StringWithAggregatesFilter<"Groom"> | string
    groomMotherBank?: StringWithAggregatesFilter<"Groom"> | string
    groomFatherBank?: StringWithAggregatesFilter<"Groom"> | string
    groomAccount?: StringWithAggregatesFilter<"Groom"> | string
    groomMotherAccount?: StringWithAggregatesFilter<"Groom"> | string
    groomFatherAccount?: StringWithAggregatesFilter<"Groom"> | string
  }

  export type BridgeWhereInput = {
    AND?: BridgeWhereInput | BridgeWhereInput[]
    OR?: BridgeWhereInput[]
    NOT?: BridgeWhereInput | BridgeWhereInput[]
    id?: StringFilter<"Bridge"> | string
    weddingId?: StringFilter<"Bridge"> | string
    Bridge?: StringFilter<"Bridge"> | string
    BridgeMother?: StringFilter<"Bridge"> | string
    BridgeFather?: StringFilter<"Bridge"> | string
    BridgeBank?: StringFilter<"Bridge"> | string
    BridgeMotherBank?: StringFilter<"Bridge"> | string
    BridgeFatherBank?: StringFilter<"Bridge"> | string
    BridgeAccount?: StringFilter<"Bridge"> | string
    BridgeMotherAccount?: StringFilter<"Bridge"> | string
    BridgeFatherAccount?: StringFilter<"Bridge"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }

  export type BridgeOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    Bridge?: SortOrder
    BridgeMother?: SortOrder
    BridgeFather?: SortOrder
    BridgeBank?: SortOrder
    BridgeMotherBank?: SortOrder
    BridgeFatherBank?: SortOrder
    BridgeAccount?: SortOrder
    BridgeMotherAccount?: SortOrder
    BridgeFatherAccount?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
  }

  export type BridgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weddingId?: string
    AND?: BridgeWhereInput | BridgeWhereInput[]
    OR?: BridgeWhereInput[]
    NOT?: BridgeWhereInput | BridgeWhereInput[]
    Bridge?: StringFilter<"Bridge"> | string
    BridgeMother?: StringFilter<"Bridge"> | string
    BridgeFather?: StringFilter<"Bridge"> | string
    BridgeBank?: StringFilter<"Bridge"> | string
    BridgeMotherBank?: StringFilter<"Bridge"> | string
    BridgeFatherBank?: StringFilter<"Bridge"> | string
    BridgeAccount?: StringFilter<"Bridge"> | string
    BridgeMotherAccount?: StringFilter<"Bridge"> | string
    BridgeFatherAccount?: StringFilter<"Bridge"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }, "id" | "weddingId">

  export type BridgeOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    Bridge?: SortOrder
    BridgeMother?: SortOrder
    BridgeFather?: SortOrder
    BridgeBank?: SortOrder
    BridgeMotherBank?: SortOrder
    BridgeFatherBank?: SortOrder
    BridgeAccount?: SortOrder
    BridgeMotherAccount?: SortOrder
    BridgeFatherAccount?: SortOrder
    _count?: BridgeCountOrderByAggregateInput
    _max?: BridgeMaxOrderByAggregateInput
    _min?: BridgeMinOrderByAggregateInput
  }

  export type BridgeScalarWhereWithAggregatesInput = {
    AND?: BridgeScalarWhereWithAggregatesInput | BridgeScalarWhereWithAggregatesInput[]
    OR?: BridgeScalarWhereWithAggregatesInput[]
    NOT?: BridgeScalarWhereWithAggregatesInput | BridgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bridge"> | string
    weddingId?: StringWithAggregatesFilter<"Bridge"> | string
    Bridge?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeMother?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeFather?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeBank?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeMotherBank?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeFatherBank?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeAccount?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeMotherAccount?: StringWithAggregatesFilter<"Bridge"> | string
    BridgeFatherAccount?: StringWithAggregatesFilter<"Bridge"> | string
  }

  export type MetaTagWhereInput = {
    AND?: MetaTagWhereInput | MetaTagWhereInput[]
    OR?: MetaTagWhereInput[]
    NOT?: MetaTagWhereInput | MetaTagWhereInput[]
    id?: StringFilter<"MetaTag"> | string
    weddingId?: StringFilter<"MetaTag"> | string
    title?: StringFilter<"MetaTag"> | string
    ogUrl?: StringFilter<"MetaTag"> | string
    ogTitle?: StringFilter<"MetaTag"> | string
    ogImage?: StringFilter<"MetaTag"> | string
    ogDescription?: StringFilter<"MetaTag"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }

  export type MetaTagOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    title?: SortOrder
    ogUrl?: SortOrder
    ogTitle?: SortOrder
    ogImage?: SortOrder
    ogDescription?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
  }

  export type MetaTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    weddingId?: string
    AND?: MetaTagWhereInput | MetaTagWhereInput[]
    OR?: MetaTagWhereInput[]
    NOT?: MetaTagWhereInput | MetaTagWhereInput[]
    title?: StringFilter<"MetaTag"> | string
    ogUrl?: StringFilter<"MetaTag"> | string
    ogTitle?: StringFilter<"MetaTag"> | string
    ogImage?: StringFilter<"MetaTag"> | string
    ogDescription?: StringFilter<"MetaTag"> | string
    wedding?: XOR<WeddingRelationFilter, WeddingWhereInput>
  }, "id" | "weddingId">

  export type MetaTagOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    title?: SortOrder
    ogUrl?: SortOrder
    ogTitle?: SortOrder
    ogImage?: SortOrder
    ogDescription?: SortOrder
    _count?: MetaTagCountOrderByAggregateInput
    _max?: MetaTagMaxOrderByAggregateInput
    _min?: MetaTagMinOrderByAggregateInput
  }

  export type MetaTagScalarWhereWithAggregatesInput = {
    AND?: MetaTagScalarWhereWithAggregatesInput | MetaTagScalarWhereWithAggregatesInput[]
    OR?: MetaTagScalarWhereWithAggregatesInput[]
    NOT?: MetaTagScalarWhereWithAggregatesInput | MetaTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetaTag"> | string
    weddingId?: StringWithAggregatesFilter<"MetaTag"> | string
    title?: StringWithAggregatesFilter<"MetaTag"> | string
    ogUrl?: StringWithAggregatesFilter<"MetaTag"> | string
    ogTitle?: StringWithAggregatesFilter<"MetaTag"> | string
    ogImage?: StringWithAggregatesFilter<"MetaTag"> | string
    ogDescription?: StringWithAggregatesFilter<"MetaTag"> | string
  }

  export type WeddingCreateInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomCreateNestedOneWithoutWeddingInput
    Bridge?: BridgeCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagCreateNestedOneWithoutWeddingInput
  }

  export type WeddingUncheckedCreateInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomUncheckedCreateNestedOneWithoutWeddingInput
    Bridge?: BridgeUncheckedCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagUncheckedCreateNestedOneWithoutWeddingInput
  }

  export type WeddingUpdateInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUpdateOneWithoutWeddingNestedInput
    Bridge?: BridgeUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUncheckedUpdateOneWithoutWeddingNestedInput
    Bridge?: BridgeUncheckedUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUncheckedUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingCreateManyInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
  }

  export type WeddingUpdateManyMutationInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingUncheckedUpdateManyInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroomCreateInput = {
    id?: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
    wedding: WeddingCreateNestedOneWithoutGroomInput
  }

  export type GroomUncheckedCreateInput = {
    id?: string
    weddingId: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
  }

  export type GroomUpdateInput = {
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
    wedding?: WeddingUpdateOneRequiredWithoutGroomNestedInput
  }

  export type GroomUncheckedUpdateInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type GroomCreateManyInput = {
    id?: string
    weddingId: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
  }

  export type GroomUpdateManyMutationInput = {
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type GroomUncheckedUpdateManyInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type BridgeCreateInput = {
    id?: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
    wedding: WeddingCreateNestedOneWithoutBridgeInput
  }

  export type BridgeUncheckedCreateInput = {
    id?: string
    weddingId: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
  }

  export type BridgeUpdateInput = {
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
    wedding?: WeddingUpdateOneRequiredWithoutBridgeNestedInput
  }

  export type BridgeUncheckedUpdateInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type BridgeCreateManyInput = {
    id?: string
    weddingId: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
  }

  export type BridgeUpdateManyMutationInput = {
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type BridgeUncheckedUpdateManyInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type MetaTagCreateInput = {
    id?: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
    wedding: WeddingCreateNestedOneWithoutMetaTagInput
  }

  export type MetaTagUncheckedCreateInput = {
    id?: string
    weddingId: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
  }

  export type MetaTagUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
    wedding?: WeddingUpdateOneRequiredWithoutMetaTagNestedInput
  }

  export type MetaTagUncheckedUpdateInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
  }

  export type MetaTagCreateManyInput = {
    id?: string
    weddingId: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
  }

  export type MetaTagUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
  }

  export type MetaTagUncheckedUpdateManyInput = {
    weddingId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GroomNullableRelationFilter = {
    is?: GroomWhereInput | null
    isNot?: GroomWhereInput | null
  }

  export type BridgeNullableRelationFilter = {
    is?: BridgeWhereInput | null
    isNot?: BridgeWhereInput | null
  }

  export type MetaTagNullableRelationFilter = {
    is?: MetaTagWhereInput | null
    isNot?: MetaTagWhereInput | null
  }

  export type WeddingCountOrderByAggregateInput = {
    id?: SortOrder
    weddingHouse?: SortOrder
    weddingHouseAddress?: SortOrder
    bus?: SortOrder
    subway?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingHouse?: SortOrder
    weddingHouseAddress?: SortOrder
    bus?: SortOrder
    subway?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type WeddingMinOrderByAggregateInput = {
    id?: SortOrder
    weddingHouse?: SortOrder
    weddingHouseAddress?: SortOrder
    bus?: SortOrder
    subway?: SortOrder
    description?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WeddingRelationFilter = {
    is?: WeddingWhereInput
    isNot?: WeddingWhereInput
  }

  export type GroomCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    groom?: SortOrder
    groomMother?: SortOrder
    groomFather?: SortOrder
    groomBank?: SortOrder
    groomMotherBank?: SortOrder
    groomFatherBank?: SortOrder
    groomAccount?: SortOrder
    groomMotherAccount?: SortOrder
    groomFatherAccount?: SortOrder
  }

  export type GroomMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    groom?: SortOrder
    groomMother?: SortOrder
    groomFather?: SortOrder
    groomBank?: SortOrder
    groomMotherBank?: SortOrder
    groomFatherBank?: SortOrder
    groomAccount?: SortOrder
    groomMotherAccount?: SortOrder
    groomFatherAccount?: SortOrder
  }

  export type GroomMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    groom?: SortOrder
    groomMother?: SortOrder
    groomFather?: SortOrder
    groomBank?: SortOrder
    groomMotherBank?: SortOrder
    groomFatherBank?: SortOrder
    groomAccount?: SortOrder
    groomMotherAccount?: SortOrder
    groomFatherAccount?: SortOrder
  }

  export type BridgeCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    Bridge?: SortOrder
    BridgeMother?: SortOrder
    BridgeFather?: SortOrder
    BridgeBank?: SortOrder
    BridgeMotherBank?: SortOrder
    BridgeFatherBank?: SortOrder
    BridgeAccount?: SortOrder
    BridgeMotherAccount?: SortOrder
    BridgeFatherAccount?: SortOrder
  }

  export type BridgeMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    Bridge?: SortOrder
    BridgeMother?: SortOrder
    BridgeFather?: SortOrder
    BridgeBank?: SortOrder
    BridgeMotherBank?: SortOrder
    BridgeFatherBank?: SortOrder
    BridgeAccount?: SortOrder
    BridgeMotherAccount?: SortOrder
    BridgeFatherAccount?: SortOrder
  }

  export type BridgeMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    Bridge?: SortOrder
    BridgeMother?: SortOrder
    BridgeFather?: SortOrder
    BridgeBank?: SortOrder
    BridgeMotherBank?: SortOrder
    BridgeFatherBank?: SortOrder
    BridgeAccount?: SortOrder
    BridgeMotherAccount?: SortOrder
    BridgeFatherAccount?: SortOrder
  }

  export type MetaTagCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    title?: SortOrder
    ogUrl?: SortOrder
    ogTitle?: SortOrder
    ogImage?: SortOrder
    ogDescription?: SortOrder
  }

  export type MetaTagMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    title?: SortOrder
    ogUrl?: SortOrder
    ogTitle?: SortOrder
    ogImage?: SortOrder
    ogDescription?: SortOrder
  }

  export type MetaTagMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    title?: SortOrder
    ogUrl?: SortOrder
    ogTitle?: SortOrder
    ogImage?: SortOrder
    ogDescription?: SortOrder
  }

  export type GroomCreateNestedOneWithoutWeddingInput = {
    create?: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: GroomCreateOrConnectWithoutWeddingInput
    connect?: GroomWhereUniqueInput
  }

  export type BridgeCreateNestedOneWithoutWeddingInput = {
    create?: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: BridgeCreateOrConnectWithoutWeddingInput
    connect?: BridgeWhereUniqueInput
  }

  export type MetaTagCreateNestedOneWithoutWeddingInput = {
    create?: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: MetaTagCreateOrConnectWithoutWeddingInput
    connect?: MetaTagWhereUniqueInput
  }

  export type GroomUncheckedCreateNestedOneWithoutWeddingInput = {
    create?: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: GroomCreateOrConnectWithoutWeddingInput
    connect?: GroomWhereUniqueInput
  }

  export type BridgeUncheckedCreateNestedOneWithoutWeddingInput = {
    create?: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: BridgeCreateOrConnectWithoutWeddingInput
    connect?: BridgeWhereUniqueInput
  }

  export type MetaTagUncheckedCreateNestedOneWithoutWeddingInput = {
    create?: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: MetaTagCreateOrConnectWithoutWeddingInput
    connect?: MetaTagWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroomUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: GroomCreateOrConnectWithoutWeddingInput
    upsert?: GroomUpsertWithoutWeddingInput
    disconnect?: GroomWhereInput | boolean
    delete?: GroomWhereInput | boolean
    connect?: GroomWhereUniqueInput
    update?: XOR<XOR<GroomUpdateToOneWithWhereWithoutWeddingInput, GroomUpdateWithoutWeddingInput>, GroomUncheckedUpdateWithoutWeddingInput>
  }

  export type BridgeUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: BridgeCreateOrConnectWithoutWeddingInput
    upsert?: BridgeUpsertWithoutWeddingInput
    disconnect?: BridgeWhereInput | boolean
    delete?: BridgeWhereInput | boolean
    connect?: BridgeWhereUniqueInput
    update?: XOR<XOR<BridgeUpdateToOneWithWhereWithoutWeddingInput, BridgeUpdateWithoutWeddingInput>, BridgeUncheckedUpdateWithoutWeddingInput>
  }

  export type MetaTagUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: MetaTagCreateOrConnectWithoutWeddingInput
    upsert?: MetaTagUpsertWithoutWeddingInput
    disconnect?: MetaTagWhereInput | boolean
    delete?: MetaTagWhereInput | boolean
    connect?: MetaTagWhereUniqueInput
    update?: XOR<XOR<MetaTagUpdateToOneWithWhereWithoutWeddingInput, MetaTagUpdateWithoutWeddingInput>, MetaTagUncheckedUpdateWithoutWeddingInput>
  }

  export type GroomUncheckedUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: GroomCreateOrConnectWithoutWeddingInput
    upsert?: GroomUpsertWithoutWeddingInput
    disconnect?: GroomWhereInput | boolean
    delete?: GroomWhereInput | boolean
    connect?: GroomWhereUniqueInput
    update?: XOR<XOR<GroomUpdateToOneWithWhereWithoutWeddingInput, GroomUpdateWithoutWeddingInput>, GroomUncheckedUpdateWithoutWeddingInput>
  }

  export type BridgeUncheckedUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: BridgeCreateOrConnectWithoutWeddingInput
    upsert?: BridgeUpsertWithoutWeddingInput
    disconnect?: BridgeWhereInput | boolean
    delete?: BridgeWhereInput | boolean
    connect?: BridgeWhereUniqueInput
    update?: XOR<XOR<BridgeUpdateToOneWithWhereWithoutWeddingInput, BridgeUpdateWithoutWeddingInput>, BridgeUncheckedUpdateWithoutWeddingInput>
  }

  export type MetaTagUncheckedUpdateOneWithoutWeddingNestedInput = {
    create?: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
    connectOrCreate?: MetaTagCreateOrConnectWithoutWeddingInput
    upsert?: MetaTagUpsertWithoutWeddingInput
    disconnect?: MetaTagWhereInput | boolean
    delete?: MetaTagWhereInput | boolean
    connect?: MetaTagWhereUniqueInput
    update?: XOR<XOR<MetaTagUpdateToOneWithWhereWithoutWeddingInput, MetaTagUpdateWithoutWeddingInput>, MetaTagUncheckedUpdateWithoutWeddingInput>
  }

  export type WeddingCreateNestedOneWithoutGroomInput = {
    create?: XOR<WeddingCreateWithoutGroomInput, WeddingUncheckedCreateWithoutGroomInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutGroomInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingUpdateOneRequiredWithoutGroomNestedInput = {
    create?: XOR<WeddingCreateWithoutGroomInput, WeddingUncheckedCreateWithoutGroomInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutGroomInput
    upsert?: WeddingUpsertWithoutGroomInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutGroomInput, WeddingUpdateWithoutGroomInput>, WeddingUncheckedUpdateWithoutGroomInput>
  }

  export type WeddingCreateNestedOneWithoutBridgeInput = {
    create?: XOR<WeddingCreateWithoutBridgeInput, WeddingUncheckedCreateWithoutBridgeInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutBridgeInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingUpdateOneRequiredWithoutBridgeNestedInput = {
    create?: XOR<WeddingCreateWithoutBridgeInput, WeddingUncheckedCreateWithoutBridgeInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutBridgeInput
    upsert?: WeddingUpsertWithoutBridgeInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutBridgeInput, WeddingUpdateWithoutBridgeInput>, WeddingUncheckedUpdateWithoutBridgeInput>
  }

  export type WeddingCreateNestedOneWithoutMetaTagInput = {
    create?: XOR<WeddingCreateWithoutMetaTagInput, WeddingUncheckedCreateWithoutMetaTagInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutMetaTagInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingUpdateOneRequiredWithoutMetaTagNestedInput = {
    create?: XOR<WeddingCreateWithoutMetaTagInput, WeddingUncheckedCreateWithoutMetaTagInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutMetaTagInput
    upsert?: WeddingUpsertWithoutMetaTagInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutMetaTagInput, WeddingUpdateWithoutMetaTagInput>, WeddingUncheckedUpdateWithoutMetaTagInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroomCreateWithoutWeddingInput = {
    id?: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
  }

  export type GroomUncheckedCreateWithoutWeddingInput = {
    id?: string
    groom: string
    groomMother: string
    groomFather: string
    groomBank: string
    groomMotherBank: string
    groomFatherBank: string
    groomAccount: string
    groomMotherAccount: string
    groomFatherAccount: string
  }

  export type GroomCreateOrConnectWithoutWeddingInput = {
    where: GroomWhereUniqueInput
    create: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
  }

  export type BridgeCreateWithoutWeddingInput = {
    id?: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
  }

  export type BridgeUncheckedCreateWithoutWeddingInput = {
    id?: string
    Bridge: string
    BridgeMother: string
    BridgeFather: string
    BridgeBank: string
    BridgeMotherBank: string
    BridgeFatherBank: string
    BridgeAccount: string
    BridgeMotherAccount: string
    BridgeFatherAccount: string
  }

  export type BridgeCreateOrConnectWithoutWeddingInput = {
    where: BridgeWhereUniqueInput
    create: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
  }

  export type MetaTagCreateWithoutWeddingInput = {
    id?: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
  }

  export type MetaTagUncheckedCreateWithoutWeddingInput = {
    id?: string
    title: string
    ogUrl: string
    ogTitle: string
    ogImage: string
    ogDescription: string
  }

  export type MetaTagCreateOrConnectWithoutWeddingInput = {
    where: MetaTagWhereUniqueInput
    create: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
  }

  export type GroomUpsertWithoutWeddingInput = {
    update: XOR<GroomUpdateWithoutWeddingInput, GroomUncheckedUpdateWithoutWeddingInput>
    create: XOR<GroomCreateWithoutWeddingInput, GroomUncheckedCreateWithoutWeddingInput>
    where?: GroomWhereInput
  }

  export type GroomUpdateToOneWithWhereWithoutWeddingInput = {
    where?: GroomWhereInput
    data: XOR<GroomUpdateWithoutWeddingInput, GroomUncheckedUpdateWithoutWeddingInput>
  }

  export type GroomUpdateWithoutWeddingInput = {
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type GroomUncheckedUpdateWithoutWeddingInput = {
    groom?: StringFieldUpdateOperationsInput | string
    groomMother?: StringFieldUpdateOperationsInput | string
    groomFather?: StringFieldUpdateOperationsInput | string
    groomBank?: StringFieldUpdateOperationsInput | string
    groomMotherBank?: StringFieldUpdateOperationsInput | string
    groomFatherBank?: StringFieldUpdateOperationsInput | string
    groomAccount?: StringFieldUpdateOperationsInput | string
    groomMotherAccount?: StringFieldUpdateOperationsInput | string
    groomFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type BridgeUpsertWithoutWeddingInput = {
    update: XOR<BridgeUpdateWithoutWeddingInput, BridgeUncheckedUpdateWithoutWeddingInput>
    create: XOR<BridgeCreateWithoutWeddingInput, BridgeUncheckedCreateWithoutWeddingInput>
    where?: BridgeWhereInput
  }

  export type BridgeUpdateToOneWithWhereWithoutWeddingInput = {
    where?: BridgeWhereInput
    data: XOR<BridgeUpdateWithoutWeddingInput, BridgeUncheckedUpdateWithoutWeddingInput>
  }

  export type BridgeUpdateWithoutWeddingInput = {
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type BridgeUncheckedUpdateWithoutWeddingInput = {
    Bridge?: StringFieldUpdateOperationsInput | string
    BridgeMother?: StringFieldUpdateOperationsInput | string
    BridgeFather?: StringFieldUpdateOperationsInput | string
    BridgeBank?: StringFieldUpdateOperationsInput | string
    BridgeMotherBank?: StringFieldUpdateOperationsInput | string
    BridgeFatherBank?: StringFieldUpdateOperationsInput | string
    BridgeAccount?: StringFieldUpdateOperationsInput | string
    BridgeMotherAccount?: StringFieldUpdateOperationsInput | string
    BridgeFatherAccount?: StringFieldUpdateOperationsInput | string
  }

  export type MetaTagUpsertWithoutWeddingInput = {
    update: XOR<MetaTagUpdateWithoutWeddingInput, MetaTagUncheckedUpdateWithoutWeddingInput>
    create: XOR<MetaTagCreateWithoutWeddingInput, MetaTagUncheckedCreateWithoutWeddingInput>
    where?: MetaTagWhereInput
  }

  export type MetaTagUpdateToOneWithWhereWithoutWeddingInput = {
    where?: MetaTagWhereInput
    data: XOR<MetaTagUpdateWithoutWeddingInput, MetaTagUncheckedUpdateWithoutWeddingInput>
  }

  export type MetaTagUpdateWithoutWeddingInput = {
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
  }

  export type MetaTagUncheckedUpdateWithoutWeddingInput = {
    title?: StringFieldUpdateOperationsInput | string
    ogUrl?: StringFieldUpdateOperationsInput | string
    ogTitle?: StringFieldUpdateOperationsInput | string
    ogImage?: StringFieldUpdateOperationsInput | string
    ogDescription?: StringFieldUpdateOperationsInput | string
  }

  export type WeddingCreateWithoutGroomInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Bridge?: BridgeCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagCreateNestedOneWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutGroomInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Bridge?: BridgeUncheckedCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagUncheckedCreateNestedOneWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutGroomInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutGroomInput, WeddingUncheckedCreateWithoutGroomInput>
  }

  export type WeddingUpsertWithoutGroomInput = {
    update: XOR<WeddingUpdateWithoutGroomInput, WeddingUncheckedUpdateWithoutGroomInput>
    create: XOR<WeddingCreateWithoutGroomInput, WeddingUncheckedCreateWithoutGroomInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutGroomInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutGroomInput, WeddingUncheckedUpdateWithoutGroomInput>
  }

  export type WeddingUpdateWithoutGroomInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bridge?: BridgeUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutGroomInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bridge?: BridgeUncheckedUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUncheckedUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingCreateWithoutBridgeInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagCreateNestedOneWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutBridgeInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomUncheckedCreateNestedOneWithoutWeddingInput
    MetaTag?: MetaTagUncheckedCreateNestedOneWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutBridgeInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutBridgeInput, WeddingUncheckedCreateWithoutBridgeInput>
  }

  export type WeddingUpsertWithoutBridgeInput = {
    update: XOR<WeddingUpdateWithoutBridgeInput, WeddingUncheckedUpdateWithoutBridgeInput>
    create: XOR<WeddingCreateWithoutBridgeInput, WeddingUncheckedCreateWithoutBridgeInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutBridgeInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutBridgeInput, WeddingUncheckedUpdateWithoutBridgeInput>
  }

  export type WeddingUpdateWithoutBridgeInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutBridgeInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUncheckedUpdateOneWithoutWeddingNestedInput
    MetaTag?: MetaTagUncheckedUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingCreateWithoutMetaTagInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomCreateNestedOneWithoutWeddingInput
    Bridge?: BridgeCreateNestedOneWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutMetaTagInput = {
    id?: string
    weddingHouse: string
    weddingHouseAddress: string
    bus?: string | null
    subway?: string | null
    description: string
    date: Date | string
    createdAt?: Date | string
    Groom?: GroomUncheckedCreateNestedOneWithoutWeddingInput
    Bridge?: BridgeUncheckedCreateNestedOneWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutMetaTagInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutMetaTagInput, WeddingUncheckedCreateWithoutMetaTagInput>
  }

  export type WeddingUpsertWithoutMetaTagInput = {
    update: XOR<WeddingUpdateWithoutMetaTagInput, WeddingUncheckedUpdateWithoutMetaTagInput>
    create: XOR<WeddingCreateWithoutMetaTagInput, WeddingUncheckedCreateWithoutMetaTagInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutMetaTagInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutMetaTagInput, WeddingUncheckedUpdateWithoutMetaTagInput>
  }

  export type WeddingUpdateWithoutMetaTagInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUpdateOneWithoutWeddingNestedInput
    Bridge?: BridgeUpdateOneWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutMetaTagInput = {
    weddingHouse?: StringFieldUpdateOperationsInput | string
    weddingHouseAddress?: StringFieldUpdateOperationsInput | string
    bus?: NullableStringFieldUpdateOperationsInput | string | null
    subway?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Groom?: GroomUncheckedUpdateOneWithoutWeddingNestedInput
    Bridge?: BridgeUncheckedUpdateOneWithoutWeddingNestedInput
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WeddingDefaultArgs instead
     */
    export type WeddingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeddingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroomDefaultArgs instead
     */
    export type GroomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BridgeDefaultArgs instead
     */
    export type BridgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BridgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MetaTagDefaultArgs instead
     */
    export type MetaTagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MetaTagDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}