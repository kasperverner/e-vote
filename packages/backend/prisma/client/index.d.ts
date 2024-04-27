
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
 * Model Elections
 * 
 */
export type Elections = $Result.DefaultSelection<Prisma.$ElectionsPayload>
/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model TeamMembers
 * 
 */
export type TeamMembers = $Result.DefaultSelection<Prisma.$TeamMembersPayload>
/**
 * Model Invitations
 * 
 */
export type Invitations = $Result.DefaultSelection<Prisma.$InvitationsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Propositions
 * 
 */
export type Propositions = $Result.DefaultSelection<Prisma.$PropositionsPayload>
/**
 * Model Ballots
 * 
 */
export type Ballots = $Result.DefaultSelection<Prisma.$BallotsPayload>
/**
 * Model Votes
 * 
 */
export type Votes = $Result.DefaultSelection<Prisma.$VotesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const InviteStates: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  DELETED: 'DELETED'
};

export type InviteStates = (typeof InviteStates)[keyof typeof InviteStates]

}

export type InviteStates = $Enums.InviteStates

export const InviteStates: typeof $Enums.InviteStates

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Elections
 * const elections = await prisma.elections.findMany()
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
   * // Fetch zero or more Elections
   * const elections = await prisma.elections.findMany()
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.elections`: Exposes CRUD operations for the **Elections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.elections.findMany()
    * ```
    */
  get elections(): Prisma.ElectionsDelegate<ExtArgs>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs>;

  /**
   * `prisma.teamMembers`: Exposes CRUD operations for the **TeamMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMembers.findMany()
    * ```
    */
  get teamMembers(): Prisma.TeamMembersDelegate<ExtArgs>;

  /**
   * `prisma.invitations`: Exposes CRUD operations for the **Invitations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitations.findMany()
    * ```
    */
  get invitations(): Prisma.InvitationsDelegate<ExtArgs>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.propositions`: Exposes CRUD operations for the **Propositions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Propositions
    * const propositions = await prisma.propositions.findMany()
    * ```
    */
  get propositions(): Prisma.PropositionsDelegate<ExtArgs>;

  /**
   * `prisma.ballots`: Exposes CRUD operations for the **Ballots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ballots
    * const ballots = await prisma.ballots.findMany()
    * ```
    */
  get ballots(): Prisma.BallotsDelegate<ExtArgs>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **Votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.VotesDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Elections: 'Elections',
    Teams: 'Teams',
    TeamMembers: 'TeamMembers',
    Invitations: 'Invitations',
    Users: 'Users',
    Propositions: 'Propositions',
    Ballots: 'Ballots',
    Votes: 'Votes'
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
      modelProps: 'elections' | 'teams' | 'teamMembers' | 'invitations' | 'users' | 'propositions' | 'ballots' | 'votes'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Elections: {
        payload: Prisma.$ElectionsPayload<ExtArgs>
        fields: Prisma.ElectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          findFirst: {
            args: Prisma.ElectionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          findMany: {
            args: Prisma.ElectionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>[]
          }
          create: {
            args: Prisma.ElectionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          createMany: {
            args: Prisma.ElectionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ElectionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          update: {
            args: Prisma.ElectionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          deleteMany: {
            args: Prisma.ElectionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ElectionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ElectionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectionsPayload>
          }
          aggregate: {
            args: Prisma.ElectionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateElections>
          }
          groupBy: {
            args: Prisma.ElectionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ElectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectionsCountArgs<ExtArgs>,
            result: $Utils.Optional<ElectionsCountAggregateOutputType> | number
          }
        }
      }
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      TeamMembers: {
        payload: Prisma.$TeamMembersPayload<ExtArgs>
        fields: Prisma.TeamMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          findFirst: {
            args: Prisma.TeamMembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          findMany: {
            args: Prisma.TeamMembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>[]
          }
          create: {
            args: Prisma.TeamMembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          createMany: {
            args: Prisma.TeamMembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamMembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          update: {
            args: Prisma.TeamMembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          deleteMany: {
            args: Prisma.TeamMembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamMembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          aggregate: {
            args: Prisma.TeamMembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamMembers>
          }
          groupBy: {
            args: Prisma.TeamMembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMembersCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamMembersCountAggregateOutputType> | number
          }
        }
      }
      Invitations: {
        payload: Prisma.$InvitationsPayload<ExtArgs>
        fields: Prisma.InvitationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          findFirst: {
            args: Prisma.InvitationsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          findMany: {
            args: Prisma.InvitationsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>[]
          }
          create: {
            args: Prisma.InvitationsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          createMany: {
            args: Prisma.InvitationsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvitationsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          update: {
            args: Prisma.InvitationsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          deleteMany: {
            args: Prisma.InvitationsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvitationsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          aggregate: {
            args: Prisma.InvitationsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvitations>
          }
          groupBy: {
            args: Prisma.InvitationsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvitationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationsCountArgs<ExtArgs>,
            result: $Utils.Optional<InvitationsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Propositions: {
        payload: Prisma.$PropositionsPayload<ExtArgs>
        fields: Prisma.PropositionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropositionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropositionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          findFirst: {
            args: Prisma.PropositionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropositionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          findMany: {
            args: Prisma.PropositionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>[]
          }
          create: {
            args: Prisma.PropositionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          createMany: {
            args: Prisma.PropositionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PropositionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          update: {
            args: Prisma.PropositionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          deleteMany: {
            args: Prisma.PropositionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PropositionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PropositionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PropositionsPayload>
          }
          aggregate: {
            args: Prisma.PropositionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropositions>
          }
          groupBy: {
            args: Prisma.PropositionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PropositionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropositionsCountArgs<ExtArgs>,
            result: $Utils.Optional<PropositionsCountAggregateOutputType> | number
          }
        }
      }
      Ballots: {
        payload: Prisma.$BallotsPayload<ExtArgs>
        fields: Prisma.BallotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BallotsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BallotsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          findFirst: {
            args: Prisma.BallotsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BallotsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          findMany: {
            args: Prisma.BallotsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>[]
          }
          create: {
            args: Prisma.BallotsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          createMany: {
            args: Prisma.BallotsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BallotsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          update: {
            args: Prisma.BallotsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          deleteMany: {
            args: Prisma.BallotsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BallotsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BallotsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BallotsPayload>
          }
          aggregate: {
            args: Prisma.BallotsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBallots>
          }
          groupBy: {
            args: Prisma.BallotsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BallotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BallotsCountArgs<ExtArgs>,
            result: $Utils.Optional<BallotsCountAggregateOutputType> | number
          }
        }
      }
      Votes: {
        payload: Prisma.$VotesPayload<ExtArgs>
        fields: Prisma.VotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VotesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VotesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          findFirst: {
            args: Prisma.VotesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VotesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          findMany: {
            args: Prisma.VotesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>[]
          }
          create: {
            args: Prisma.VotesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          createMany: {
            args: Prisma.VotesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VotesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          update: {
            args: Prisma.VotesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          deleteMany: {
            args: Prisma.VotesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VotesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VotesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VotesPayload>
          }
          aggregate: {
            args: Prisma.VotesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVotes>
          }
          groupBy: {
            args: Prisma.VotesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VotesCountArgs<ExtArgs>,
            result: $Utils.Optional<VotesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
   * Count Type ElectionsCountOutputType
   */

  export type ElectionsCountOutputType = {
    propositions: number
    ballots: number
    votes: number
  }

  export type ElectionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propositions?: boolean | ElectionsCountOutputTypeCountPropositionsArgs
    ballots?: boolean | ElectionsCountOutputTypeCountBallotsArgs
    votes?: boolean | ElectionsCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * ElectionsCountOutputType without action
   */
  export type ElectionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectionsCountOutputType
     */
    select?: ElectionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ElectionsCountOutputType without action
   */
  export type ElectionsCountOutputTypeCountPropositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropositionsWhereInput
  }

  /**
   * ElectionsCountOutputType without action
   */
  export type ElectionsCountOutputTypeCountBallotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BallotsWhereInput
  }

  /**
   * ElectionsCountOutputType without action
   */
  export type ElectionsCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotesWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    elections: number
    members: number
    invitations: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | TeamsCountOutputTypeCountElectionsArgs
    members?: boolean | TeamsCountOutputTypeCountMembersArgs
    invitations?: boolean | TeamsCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountElectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
  }


  /**
   * Count Type TeamMembersCountOutputType
   */

  export type TeamMembersCountOutputType = {
    Invitation: number
  }

  export type TeamMembersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Invitation?: boolean | TeamMembersCountOutputTypeCountInvitationArgs
  }

  // Custom InputTypes
  /**
   * TeamMembersCountOutputType without action
   */
  export type TeamMembersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembersCountOutputType
     */
    select?: TeamMembersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamMembersCountOutputType without action
   */
  export type TeamMembersCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    member_of: number
    ballots: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_of?: boolean | UsersCountOutputTypeCountMember_ofArgs
    ballots?: boolean | UsersCountOutputTypeCountBallotsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMember_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBallotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BallotsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Elections
   */

  export type AggregateElections = {
    _count: ElectionsCountAggregateOutputType | null
    _min: ElectionsMinAggregateOutputType | null
    _max: ElectionsMaxAggregateOutputType | null
  }

  export type ElectionsMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    start_at: Date | null
    end_at: Date | null
  }

  export type ElectionsMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    name: string | null
    description: string | null
    created_at: Date | null
    start_at: Date | null
    end_at: Date | null
  }

  export type ElectionsCountAggregateOutputType = {
    id: number
    team_id: number
    name: number
    description: number
    created_at: number
    start_at: number
    end_at: number
    _all: number
  }


  export type ElectionsMinAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    description?: true
    created_at?: true
    start_at?: true
    end_at?: true
  }

  export type ElectionsMaxAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    description?: true
    created_at?: true
    start_at?: true
    end_at?: true
  }

  export type ElectionsCountAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    description?: true
    created_at?: true
    start_at?: true
    end_at?: true
    _all?: true
  }

  export type ElectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to aggregate.
     */
    where?: ElectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionsOrderByWithRelationInput | ElectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Elections
    **/
    _count?: true | ElectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionsMaxAggregateInputType
  }

  export type GetElectionsAggregateType<T extends ElectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateElections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElections[P]>
      : GetScalarType<T[P], AggregateElections[P]>
  }




  export type ElectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectionsWhereInput
    orderBy?: ElectionsOrderByWithAggregationInput | ElectionsOrderByWithAggregationInput[]
    by: ElectionsScalarFieldEnum[] | ElectionsScalarFieldEnum
    having?: ElectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionsCountAggregateInputType | true
    _min?: ElectionsMinAggregateInputType
    _max?: ElectionsMaxAggregateInputType
  }

  export type ElectionsGroupByOutputType = {
    id: string
    team_id: string
    name: string
    description: string | null
    created_at: Date
    start_at: Date
    end_at: Date | null
    _count: ElectionsCountAggregateOutputType | null
    _min: ElectionsMinAggregateOutputType | null
    _max: ElectionsMaxAggregateOutputType | null
  }

  type GetElectionsGroupByPayload<T extends ElectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionsGroupByOutputType[P]>
        }
      >
    >


  export type ElectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    start_at?: boolean
    end_at?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    propositions?: boolean | Elections$propositionsArgs<ExtArgs>
    ballots?: boolean | Elections$ballotsArgs<ExtArgs>
    votes?: boolean | Elections$votesArgs<ExtArgs>
    _count?: boolean | ElectionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elections"]>

  export type ElectionsSelectScalar = {
    id?: boolean
    team_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    start_at?: boolean
    end_at?: boolean
  }


  export type ElectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    propositions?: boolean | Elections$propositionsArgs<ExtArgs>
    ballots?: boolean | Elections$ballotsArgs<ExtArgs>
    votes?: boolean | Elections$votesArgs<ExtArgs>
    _count?: boolean | ElectionsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ElectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Elections"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      propositions: Prisma.$PropositionsPayload<ExtArgs>[]
      ballots: Prisma.$BallotsPayload<ExtArgs>[]
      votes: Prisma.$VotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      name: string
      description: string | null
      created_at: Date
      start_at: Date
      end_at: Date | null
    }, ExtArgs["result"]["elections"]>
    composites: {}
  }


  type ElectionsGetPayload<S extends boolean | null | undefined | ElectionsDefaultArgs> = $Result.GetResult<Prisma.$ElectionsPayload, S>

  type ElectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ElectionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ElectionsCountAggregateInputType | true
    }

  export interface ElectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Elections'], meta: { name: 'Elections' } }
    /**
     * Find zero or one Elections that matches the filter.
     * @param {ElectionsFindUniqueArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ElectionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsFindUniqueArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Elections that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ElectionsFindUniqueOrThrowArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ElectionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsFindFirstArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ElectionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsFindFirstArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Elections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsFindFirstOrThrowArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ElectionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.elections.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.elections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electionsWithIdOnly = await prisma.elections.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ElectionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Elections.
     * @param {ElectionsCreateArgs} args - Arguments to create a Elections.
     * @example
     * // Create one Elections
     * const Elections = await prisma.elections.create({
     *   data: {
     *     // ... data to create a Elections
     *   }
     * })
     * 
    **/
    create<T extends ElectionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsCreateArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Elections.
     *     @param {ElectionsCreateManyArgs} args - Arguments to create many Elections.
     *     @example
     *     // Create many Elections
     *     const elections = await prisma.elections.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ElectionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Elections.
     * @param {ElectionsDeleteArgs} args - Arguments to delete one Elections.
     * @example
     * // Delete one Elections
     * const Elections = await prisma.elections.delete({
     *   where: {
     *     // ... filter to delete one Elections
     *   }
     * })
     * 
    **/
    delete<T extends ElectionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsDeleteArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Elections.
     * @param {ElectionsUpdateArgs} args - Arguments to update one Elections.
     * @example
     * // Update one Elections
     * const elections = await prisma.elections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ElectionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsUpdateArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Elections.
     * @param {ElectionsDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.elections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ElectionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const elections = await prisma.elections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ElectionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Elections.
     * @param {ElectionsUpsertArgs} args - Arguments to update or create a Elections.
     * @example
     * // Update or create a Elections
     * const elections = await prisma.elections.upsert({
     *   create: {
     *     // ... data to create a Elections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elections we want to update
     *   }
     * })
    **/
    upsert<T extends ElectionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ElectionsUpsertArgs<ExtArgs>>
    ): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.elections.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends ElectionsCountArgs>(
      args?: Subset<T, ElectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElectionsAggregateArgs>(args: Subset<T, ElectionsAggregateArgs>): Prisma.PrismaPromise<GetElectionsAggregateType<T>>

    /**
     * Group by Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsGroupByArgs} args - Group by arguments.
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
      T extends ElectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectionsGroupByArgs['orderBy'] }
        : { orderBy?: ElectionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ElectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Elections model
   */
  readonly fields: ElectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Elections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    propositions<T extends Elections$propositionsArgs<ExtArgs> = {}>(args?: Subset<T, Elections$propositionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    ballots<T extends Elections$ballotsArgs<ExtArgs> = {}>(args?: Subset<T, Elections$ballotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findMany'> | Null>;

    votes<T extends Elections$votesArgs<ExtArgs> = {}>(args?: Subset<T, Elections$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Elections model
   */ 
  interface ElectionsFieldRefs {
    readonly id: FieldRef<"Elections", 'String'>
    readonly team_id: FieldRef<"Elections", 'String'>
    readonly name: FieldRef<"Elections", 'String'>
    readonly description: FieldRef<"Elections", 'String'>
    readonly created_at: FieldRef<"Elections", 'DateTime'>
    readonly start_at: FieldRef<"Elections", 'DateTime'>
    readonly end_at: FieldRef<"Elections", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Elections findUnique
   */
  export type ElectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where: ElectionsWhereUniqueInput
  }

  /**
   * Elections findUniqueOrThrow
   */
  export type ElectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where: ElectionsWhereUniqueInput
  }

  /**
   * Elections findFirst
   */
  export type ElectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionsOrderByWithRelationInput | ElectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * Elections findFirstOrThrow
   */
  export type ElectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionsOrderByWithRelationInput | ElectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Elections.
     */
    cursor?: ElectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Elections.
     */
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * Elections findMany
   */
  export type ElectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter, which Elections to fetch.
     */
    where?: ElectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Elections to fetch.
     */
    orderBy?: ElectionsOrderByWithRelationInput | ElectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Elections.
     */
    cursor?: ElectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Elections.
     */
    skip?: number
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * Elections create
   */
  export type ElectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Elections.
     */
    data: XOR<ElectionsCreateInput, ElectionsUncheckedCreateInput>
  }

  /**
   * Elections createMany
   */
  export type ElectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Elections.
     */
    data: ElectionsCreateManyInput | ElectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Elections update
   */
  export type ElectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Elections.
     */
    data: XOR<ElectionsUpdateInput, ElectionsUncheckedUpdateInput>
    /**
     * Choose, which Elections to update.
     */
    where: ElectionsWhereUniqueInput
  }

  /**
   * Elections updateMany
   */
  export type ElectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Elections.
     */
    data: XOR<ElectionsUpdateManyMutationInput, ElectionsUncheckedUpdateManyInput>
    /**
     * Filter which Elections to update
     */
    where?: ElectionsWhereInput
  }

  /**
   * Elections upsert
   */
  export type ElectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Elections to update in case it exists.
     */
    where: ElectionsWhereUniqueInput
    /**
     * In case the Elections found by the `where` argument doesn't exist, create a new Elections with this data.
     */
    create: XOR<ElectionsCreateInput, ElectionsUncheckedCreateInput>
    /**
     * In case the Elections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectionsUpdateInput, ElectionsUncheckedUpdateInput>
  }

  /**
   * Elections delete
   */
  export type ElectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    /**
     * Filter which Elections to delete.
     */
    where: ElectionsWhereUniqueInput
  }

  /**
   * Elections deleteMany
   */
  export type ElectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Elections to delete
     */
    where?: ElectionsWhereInput
  }

  /**
   * Elections.propositions
   */
  export type Elections$propositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    where?: PropositionsWhereInput
    orderBy?: PropositionsOrderByWithRelationInput | PropositionsOrderByWithRelationInput[]
    cursor?: PropositionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropositionsScalarFieldEnum | PropositionsScalarFieldEnum[]
  }

  /**
   * Elections.ballots
   */
  export type Elections$ballotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    where?: BallotsWhereInput
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    cursor?: BallotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BallotsScalarFieldEnum | BallotsScalarFieldEnum[]
  }

  /**
   * Elections.votes
   */
  export type Elections$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    where?: VotesWhereInput
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    cursor?: VotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Elections without action
   */
  export type ElectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
  }


  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date | null
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    elections?: boolean | Teams$electionsArgs<ExtArgs>
    members?: boolean | Teams$membersArgs<ExtArgs>
    invitations?: boolean | Teams$invitationsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | Teams$electionsArgs<ExtArgs>
    members?: boolean | Teams$membersArgs<ExtArgs>
    invitations?: boolean | Teams$invitationsArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      elections: Prisma.$ElectionsPayload<ExtArgs>[]
      members: Prisma.$TeamMembersPayload<ExtArgs>[]
      invitations: Prisma.$InvitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }


  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Teams that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
    **/
    create<T extends TeamsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const teams = await prisma.teams.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
    **/
    delete<T extends TeamsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
    **/
    upsert<T extends TeamsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>
    ): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    elections<T extends Teams$electionsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$electionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findMany'> | Null>;

    members<T extends Teams$membersArgs<ExtArgs> = {}>(args?: Subset<T, Teams$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    invitations<T extends Teams$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Teams$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Teams model
   */ 
  interface TeamsFieldRefs {
    readonly id: FieldRef<"Teams", 'String'>
    readonly name: FieldRef<"Teams", 'String'>
    readonly created_at: FieldRef<"Teams", 'DateTime'>
    readonly updated_at: FieldRef<"Teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
  }

  /**
   * Teams.elections
   */
  export type Teams$electionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Elections
     */
    select?: ElectionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ElectionsInclude<ExtArgs> | null
    where?: ElectionsWhereInput
    orderBy?: ElectionsOrderByWithRelationInput | ElectionsOrderByWithRelationInput[]
    cursor?: ElectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * Teams.members
   */
  export type Teams$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    cursor?: TeamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * Teams.invitations
   */
  export type Teams$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    cursor?: InvitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model TeamMembers
   */

  export type AggregateTeamMembers = {
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  export type TeamMembersMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamMembersMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    user_id: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamMembersCountAggregateOutputType = {
    id: number
    team_id: number
    user_id: number
    is_admin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamMembersMinAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamMembersMaxAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamMembersCountAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to aggregate.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMembersMaxAggregateInputType
  }

  export type GetTeamMembersAggregateType<T extends TeamMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMembers[P]>
      : GetScalarType<T[P], AggregateTeamMembers[P]>
  }




  export type TeamMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithAggregationInput | TeamMembersOrderByWithAggregationInput[]
    by: TeamMembersScalarFieldEnum[] | TeamMembersScalarFieldEnum
    having?: TeamMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMembersCountAggregateInputType | true
    _min?: TeamMembersMinAggregateInputType
    _max?: TeamMembersMaxAggregateInputType
  }

  export type TeamMembersGroupByOutputType = {
    id: string
    team_id: string
    user_id: string
    is_admin: boolean
    created_at: Date
    updated_at: Date | null
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  type GetTeamMembersGroupByPayload<T extends TeamMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
        }
      >
    >


  export type TeamMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Invitation?: boolean | TeamMembers$InvitationArgs<ExtArgs>
    _count?: boolean | TeamMembersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembers"]>

  export type TeamMembersSelectScalar = {
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type TeamMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    Invitation?: boolean | TeamMembers$InvitationArgs<ExtArgs>
    _count?: boolean | TeamMembersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMembers"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      Invitation: Prisma.$InvitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      user_id: string
      is_admin: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["teamMembers"]>
    composites: {}
  }


  type TeamMembersGetPayload<S extends boolean | null | undefined | TeamMembersDefaultArgs> = $Result.GetResult<Prisma.$TeamMembersPayload, S>

  type TeamMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamMembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMembersCountAggregateInputType | true
    }

  export interface TeamMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMembers'], meta: { name: 'TeamMembers' } }
    /**
     * Find zero or one TeamMembers that matches the filter.
     * @param {TeamMembersFindUniqueArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamMembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamMembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamMembersFindUniqueOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamMembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindFirstArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamMembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersFindFirstArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindFirstOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamMembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMembersWithIdOnly = await prisma.teamMembers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamMembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamMembers.
     * @param {TeamMembersCreateArgs} args - Arguments to create a TeamMembers.
     * @example
     * // Create one TeamMembers
     * const TeamMembers = await prisma.teamMembers.create({
     *   data: {
     *     // ... data to create a TeamMembers
     *   }
     * })
     * 
    **/
    create<T extends TeamMembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersCreateArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamMembers.
     *     @param {TeamMembersCreateManyArgs} args - Arguments to create many TeamMembers.
     *     @example
     *     // Create many TeamMembers
     *     const teamMembers = await prisma.teamMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamMembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMembers.
     * @param {TeamMembersDeleteArgs} args - Arguments to delete one TeamMembers.
     * @example
     * // Delete one TeamMembers
     * const TeamMembers = await prisma.teamMembers.delete({
     *   where: {
     *     // ... filter to delete one TeamMembers
     *   }
     * })
     * 
    **/
    delete<T extends TeamMembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersDeleteArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamMembers.
     * @param {TeamMembersUpdateArgs} args - Arguments to update one TeamMembers.
     * @example
     * // Update one TeamMembers
     * const teamMembers = await prisma.teamMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamMembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersUpdateArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMembersDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamMembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamMembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMembers = await prisma.teamMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamMembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMembers.
     * @param {TeamMembersUpsertArgs} args - Arguments to update or create a TeamMembers.
     * @example
     * // Update or create a TeamMembers
     * const teamMembers = await prisma.teamMembers.upsert({
     *   create: {
     *     // ... data to create a TeamMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMembers we want to update
     *   }
     * })
    **/
    upsert<T extends TeamMembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamMembersUpsertArgs<ExtArgs>>
    ): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMembers.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMembersCountArgs>(
      args?: Subset<T, TeamMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMembersAggregateArgs>(args: Subset<T, TeamMembersAggregateArgs>): Prisma.PrismaPromise<GetTeamMembersAggregateType<T>>

    /**
     * Group by TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersGroupByArgs} args - Group by arguments.
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
      T extends TeamMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMembersGroupByArgs['orderBy'] }
        : { orderBy?: TeamMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMembers model
   */
  readonly fields: TeamMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Invitation<T extends TeamMembers$InvitationArgs<ExtArgs> = {}>(args?: Subset<T, TeamMembers$InvitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the TeamMembers model
   */ 
  interface TeamMembersFieldRefs {
    readonly id: FieldRef<"TeamMembers", 'String'>
    readonly team_id: FieldRef<"TeamMembers", 'String'>
    readonly user_id: FieldRef<"TeamMembers", 'String'>
    readonly is_admin: FieldRef<"TeamMembers", 'Boolean'>
    readonly created_at: FieldRef<"TeamMembers", 'DateTime'>
    readonly updated_at: FieldRef<"TeamMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMembers findUnique
   */
  export type TeamMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers findUniqueOrThrow
   */
  export type TeamMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers findFirst
   */
  export type TeamMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers findFirstOrThrow
   */
  export type TeamMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers findMany
   */
  export type TeamMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers create
   */
  export type TeamMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMembers.
     */
    data: XOR<TeamMembersCreateInput, TeamMembersUncheckedCreateInput>
  }

  /**
   * TeamMembers createMany
   */
  export type TeamMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMembersCreateManyInput | TeamMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMembers update
   */
  export type TeamMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMembers.
     */
    data: XOR<TeamMembersUpdateInput, TeamMembersUncheckedUpdateInput>
    /**
     * Choose, which TeamMembers to update.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers updateMany
   */
  export type TeamMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMembersWhereInput
  }

  /**
   * TeamMembers upsert
   */
  export type TeamMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMembers to update in case it exists.
     */
    where: TeamMembersWhereUniqueInput
    /**
     * In case the TeamMembers found by the `where` argument doesn't exist, create a new TeamMembers with this data.
     */
    create: XOR<TeamMembersCreateInput, TeamMembersUncheckedCreateInput>
    /**
     * In case the TeamMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMembersUpdateInput, TeamMembersUncheckedUpdateInput>
  }

  /**
   * TeamMembers delete
   */
  export type TeamMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter which TeamMembers to delete.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers deleteMany
   */
  export type TeamMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMembersWhereInput
  }

  /**
   * TeamMembers.Invitation
   */
  export type TeamMembers$InvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    cursor?: InvitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * TeamMembers without action
   */
  export type TeamMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
  }


  /**
   * Model Invitations
   */

  export type AggregateInvitations = {
    _count: InvitationsCountAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  export type InvitationsMinAggregateOutputType = {
    id: string | null
    team_id: string | null
    state: $Enums.InviteStates | null
    invited_by_member_id: string | null
    email: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvitationsMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    state: $Enums.InviteStates | null
    invited_by_member_id: string | null
    email: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvitationsCountAggregateOutputType = {
    id: number
    team_id: number
    state: number
    invited_by_member_id: number
    email: number
    is_admin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvitationsMinAggregateInputType = {
    id?: true
    team_id?: true
    state?: true
    invited_by_member_id?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type InvitationsMaxAggregateInputType = {
    id?: true
    team_id?: true
    state?: true
    invited_by_member_id?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type InvitationsCountAggregateInputType = {
    id?: true
    team_id?: true
    state?: true
    invited_by_member_id?: true
    email?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvitationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to aggregate.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationsMaxAggregateInputType
  }

  export type GetInvitationsAggregateType<T extends InvitationsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitations[P]>
      : GetScalarType<T[P], AggregateInvitations[P]>
  }




  export type InvitationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithAggregationInput | InvitationsOrderByWithAggregationInput[]
    by: InvitationsScalarFieldEnum[] | InvitationsScalarFieldEnum
    having?: InvitationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationsCountAggregateInputType | true
    _min?: InvitationsMinAggregateInputType
    _max?: InvitationsMaxAggregateInputType
  }

  export type InvitationsGroupByOutputType = {
    id: string
    team_id: string
    state: $Enums.InviteStates
    invited_by_member_id: string
    email: string
    is_admin: boolean
    created_at: Date
    updated_at: Date | null
    _count: InvitationsCountAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  type GetInvitationsGroupByPayload<T extends InvitationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
        }
      >
    >


  export type InvitationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    state?: boolean
    invited_by_member_id?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    invited_by_member?: boolean | TeamMembersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type InvitationsSelectScalar = {
    id?: boolean
    team_id?: boolean
    state?: boolean
    invited_by_member_id?: boolean
    email?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type InvitationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    invited_by_member?: boolean | TeamMembersDefaultArgs<ExtArgs>
  }


  export type $InvitationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitations"
    objects: {
      team: Prisma.$TeamsPayload<ExtArgs>
      invited_by_member: Prisma.$TeamMembersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      state: $Enums.InviteStates
      invited_by_member_id: string
      email: string
      is_admin: boolean
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["invitations"]>
    composites: {}
  }


  type InvitationsGetPayload<S extends boolean | null | undefined | InvitationsDefaultArgs> = $Result.GetResult<Prisma.$InvitationsPayload, S>

  type InvitationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvitationsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvitationsCountAggregateInputType | true
    }

  export interface InvitationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitations'], meta: { name: 'Invitations' } }
    /**
     * Find zero or one Invitations that matches the filter.
     * @param {InvitationsFindUniqueArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvitationsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsFindUniqueArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invitations that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvitationsFindUniqueOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvitationsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindFirstArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvitationsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsFindFirstArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invitations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindFirstOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvitationsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitations.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationsWithIdOnly = await prisma.invitations.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvitationsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invitations.
     * @param {InvitationsCreateArgs} args - Arguments to create a Invitations.
     * @example
     * // Create one Invitations
     * const Invitations = await prisma.invitations.create({
     *   data: {
     *     // ... data to create a Invitations
     *   }
     * })
     * 
    **/
    create<T extends InvitationsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsCreateArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invitations.
     *     @param {InvitationsCreateManyArgs} args - Arguments to create many Invitations.
     *     @example
     *     // Create many Invitations
     *     const invitations = await prisma.invitations.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvitationsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitations.
     * @param {InvitationsDeleteArgs} args - Arguments to delete one Invitations.
     * @example
     * // Delete one Invitations
     * const Invitations = await prisma.invitations.delete({
     *   where: {
     *     // ... filter to delete one Invitations
     *   }
     * })
     * 
    **/
    delete<T extends InvitationsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsDeleteArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invitations.
     * @param {InvitationsUpdateArgs} args - Arguments to update one Invitations.
     * @example
     * // Update one Invitations
     * const invitations = await prisma.invitations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvitationsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsUpdateArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationsDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvitationsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitations = await prisma.invitations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvitationsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitations.
     * @param {InvitationsUpsertArgs} args - Arguments to update or create a Invitations.
     * @example
     * // Update or create a Invitations
     * const invitations = await prisma.invitations.upsert({
     *   create: {
     *     // ... data to create a Invitations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitations we want to update
     *   }
     * })
    **/
    upsert<T extends InvitationsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationsUpsertArgs<ExtArgs>>
    ): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitations.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationsCountArgs>(
      args?: Subset<T, InvitationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationsAggregateArgs>(args: Subset<T, InvitationsAggregateArgs>): Prisma.PrismaPromise<GetInvitationsAggregateType<T>>

    /**
     * Group by Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsGroupByArgs} args - Group by arguments.
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
      T extends InvitationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationsGroupByArgs['orderBy'] }
        : { orderBy?: InvitationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitations model
   */
  readonly fields: InvitationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invited_by_member<T extends TeamMembersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamMembersDefaultArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Invitations model
   */ 
  interface InvitationsFieldRefs {
    readonly id: FieldRef<"Invitations", 'String'>
    readonly team_id: FieldRef<"Invitations", 'String'>
    readonly state: FieldRef<"Invitations", 'InviteStates'>
    readonly invited_by_member_id: FieldRef<"Invitations", 'String'>
    readonly email: FieldRef<"Invitations", 'String'>
    readonly is_admin: FieldRef<"Invitations", 'Boolean'>
    readonly created_at: FieldRef<"Invitations", 'DateTime'>
    readonly updated_at: FieldRef<"Invitations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitations findUnique
   */
  export type InvitationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations findUniqueOrThrow
   */
  export type InvitationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations findFirst
   */
  export type InvitationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations findFirstOrThrow
   */
  export type InvitationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations findMany
   */
  export type InvitationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations create
   */
  export type InvitationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitations.
     */
    data: XOR<InvitationsCreateInput, InvitationsUncheckedCreateInput>
  }

  /**
   * Invitations createMany
   */
  export type InvitationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationsCreateManyInput | InvitationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitations update
   */
  export type InvitationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitations.
     */
    data: XOR<InvitationsUpdateInput, InvitationsUncheckedUpdateInput>
    /**
     * Choose, which Invitations to update.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations updateMany
   */
  export type InvitationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationsWhereInput
  }

  /**
   * Invitations upsert
   */
  export type InvitationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitations to update in case it exists.
     */
    where: InvitationsWhereUniqueInput
    /**
     * In case the Invitations found by the `where` argument doesn't exist, create a new Invitations with this data.
     */
    create: XOR<InvitationsCreateInput, InvitationsUncheckedCreateInput>
    /**
     * In case the Invitations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationsUpdateInput, InvitationsUncheckedUpdateInput>
  }

  /**
   * Invitations delete
   */
  export type InvitationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter which Invitations to delete.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations deleteMany
   */
  export type InvitationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationsWhereInput
  }

  /**
   * Invitations without action
   */
  export type InvitationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    principal_id: string | null
    name: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    principal_id: string | null
    name: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    principal_id: number
    name: number
    email: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    principal_id?: true
    name?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    principal_id?: true
    name?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    principal_id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    principal_id: string
    name: string
    email: string
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    principal_id?: boolean
    name?: boolean
    email?: boolean
    member_of?: boolean | Users$member_ofArgs<ExtArgs>
    ballots?: boolean | Users$ballotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    principal_id?: boolean
    name?: boolean
    email?: boolean
  }


  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member_of?: boolean | Users$member_ofArgs<ExtArgs>
    ballots?: boolean | Users$ballotsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      member_of: Prisma.$TeamMembersPayload<ExtArgs>[]
      ballots: Prisma.$BallotsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      principal_id: string
      name: string
      email: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    member_of<T extends Users$member_ofArgs<ExtArgs> = {}>(args?: Subset<T, Users$member_ofArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    ballots<T extends Users$ballotsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ballotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly principal_id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.member_of
   */
  export type Users$member_ofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    cursor?: TeamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * Users.ballots
   */
  export type Users$ballotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    where?: BallotsWhereInput
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    cursor?: BallotsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BallotsScalarFieldEnum | BallotsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Propositions
   */

  export type AggregatePropositions = {
    _count: PropositionsCountAggregateOutputType | null
    _min: PropositionsMinAggregateOutputType | null
    _max: PropositionsMaxAggregateOutputType | null
  }

  export type PropositionsMinAggregateOutputType = {
    id: string | null
    election_id: string | null
    name: string | null
    description: string | null
  }

  export type PropositionsMaxAggregateOutputType = {
    id: string | null
    election_id: string | null
    name: string | null
    description: string | null
  }

  export type PropositionsCountAggregateOutputType = {
    id: number
    election_id: number
    name: number
    description: number
    _all: number
  }


  export type PropositionsMinAggregateInputType = {
    id?: true
    election_id?: true
    name?: true
    description?: true
  }

  export type PropositionsMaxAggregateInputType = {
    id?: true
    election_id?: true
    name?: true
    description?: true
  }

  export type PropositionsCountAggregateInputType = {
    id?: true
    election_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PropositionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propositions to aggregate.
     */
    where?: PropositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propositions to fetch.
     */
    orderBy?: PropositionsOrderByWithRelationInput | PropositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Propositions
    **/
    _count?: true | PropositionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropositionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropositionsMaxAggregateInputType
  }

  export type GetPropositionsAggregateType<T extends PropositionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePropositions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropositions[P]>
      : GetScalarType<T[P], AggregatePropositions[P]>
  }




  export type PropositionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropositionsWhereInput
    orderBy?: PropositionsOrderByWithAggregationInput | PropositionsOrderByWithAggregationInput[]
    by: PropositionsScalarFieldEnum[] | PropositionsScalarFieldEnum
    having?: PropositionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropositionsCountAggregateInputType | true
    _min?: PropositionsMinAggregateInputType
    _max?: PropositionsMaxAggregateInputType
  }

  export type PropositionsGroupByOutputType = {
    id: string
    election_id: string
    name: string
    description: string | null
    _count: PropositionsCountAggregateOutputType | null
    _min: PropositionsMinAggregateOutputType | null
    _max: PropositionsMaxAggregateOutputType | null
  }

  type GetPropositionsGroupByPayload<T extends PropositionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropositionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropositionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropositionsGroupByOutputType[P]>
            : GetScalarType<T[P], PropositionsGroupByOutputType[P]>
        }
      >
    >


  export type PropositionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_id?: boolean
    name?: boolean
    description?: boolean
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propositions"]>

  export type PropositionsSelectScalar = {
    id?: boolean
    election_id?: boolean
    name?: boolean
    description?: boolean
  }


  export type PropositionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
  }


  export type $PropositionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propositions"
    objects: {
      election: Prisma.$ElectionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      election_id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["propositions"]>
    composites: {}
  }


  type PropositionsGetPayload<S extends boolean | null | undefined | PropositionsDefaultArgs> = $Result.GetResult<Prisma.$PropositionsPayload, S>

  type PropositionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PropositionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PropositionsCountAggregateInputType | true
    }

  export interface PropositionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propositions'], meta: { name: 'Propositions' } }
    /**
     * Find zero or one Propositions that matches the filter.
     * @param {PropositionsFindUniqueArgs} args - Arguments to find a Propositions
     * @example
     * // Get one Propositions
     * const propositions = await prisma.propositions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PropositionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsFindUniqueArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Propositions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PropositionsFindUniqueOrThrowArgs} args - Arguments to find a Propositions
     * @example
     * // Get one Propositions
     * const propositions = await prisma.propositions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PropositionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Propositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsFindFirstArgs} args - Arguments to find a Propositions
     * @example
     * // Get one Propositions
     * const propositions = await prisma.propositions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PropositionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsFindFirstArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Propositions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsFindFirstOrThrowArgs} args - Arguments to find a Propositions
     * @example
     * // Get one Propositions
     * const propositions = await prisma.propositions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PropositionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Propositions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Propositions
     * const propositions = await prisma.propositions.findMany()
     * 
     * // Get first 10 Propositions
     * const propositions = await prisma.propositions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propositionsWithIdOnly = await prisma.propositions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PropositionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Propositions.
     * @param {PropositionsCreateArgs} args - Arguments to create a Propositions.
     * @example
     * // Create one Propositions
     * const Propositions = await prisma.propositions.create({
     *   data: {
     *     // ... data to create a Propositions
     *   }
     * })
     * 
    **/
    create<T extends PropositionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsCreateArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Propositions.
     *     @param {PropositionsCreateManyArgs} args - Arguments to create many Propositions.
     *     @example
     *     // Create many Propositions
     *     const propositions = await prisma.propositions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PropositionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Propositions.
     * @param {PropositionsDeleteArgs} args - Arguments to delete one Propositions.
     * @example
     * // Delete one Propositions
     * const Propositions = await prisma.propositions.delete({
     *   where: {
     *     // ... filter to delete one Propositions
     *   }
     * })
     * 
    **/
    delete<T extends PropositionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsDeleteArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Propositions.
     * @param {PropositionsUpdateArgs} args - Arguments to update one Propositions.
     * @example
     * // Update one Propositions
     * const propositions = await prisma.propositions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PropositionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsUpdateArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Propositions.
     * @param {PropositionsDeleteManyArgs} args - Arguments to filter Propositions to delete.
     * @example
     * // Delete a few Propositions
     * const { count } = await prisma.propositions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PropositionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PropositionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Propositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Propositions
     * const propositions = await prisma.propositions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PropositionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Propositions.
     * @param {PropositionsUpsertArgs} args - Arguments to update or create a Propositions.
     * @example
     * // Update or create a Propositions
     * const propositions = await prisma.propositions.upsert({
     *   create: {
     *     // ... data to create a Propositions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propositions we want to update
     *   }
     * })
    **/
    upsert<T extends PropositionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PropositionsUpsertArgs<ExtArgs>>
    ): Prisma__PropositionsClient<$Result.GetResult<Prisma.$PropositionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Propositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsCountArgs} args - Arguments to filter Propositions to count.
     * @example
     * // Count the number of Propositions
     * const count = await prisma.propositions.count({
     *   where: {
     *     // ... the filter for the Propositions we want to count
     *   }
     * })
    **/
    count<T extends PropositionsCountArgs>(
      args?: Subset<T, PropositionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropositionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropositionsAggregateArgs>(args: Subset<T, PropositionsAggregateArgs>): Prisma.PrismaPromise<GetPropositionsAggregateType<T>>

    /**
     * Group by Propositions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropositionsGroupByArgs} args - Group by arguments.
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
      T extends PropositionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropositionsGroupByArgs['orderBy'] }
        : { orderBy?: PropositionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropositionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropositionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propositions model
   */
  readonly fields: PropositionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propositions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropositionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    election<T extends ElectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionsDefaultArgs<ExtArgs>>): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Propositions model
   */ 
  interface PropositionsFieldRefs {
    readonly id: FieldRef<"Propositions", 'String'>
    readonly election_id: FieldRef<"Propositions", 'String'>
    readonly name: FieldRef<"Propositions", 'String'>
    readonly description: FieldRef<"Propositions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Propositions findUnique
   */
  export type PropositionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter, which Propositions to fetch.
     */
    where: PropositionsWhereUniqueInput
  }

  /**
   * Propositions findUniqueOrThrow
   */
  export type PropositionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter, which Propositions to fetch.
     */
    where: PropositionsWhereUniqueInput
  }

  /**
   * Propositions findFirst
   */
  export type PropositionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter, which Propositions to fetch.
     */
    where?: PropositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propositions to fetch.
     */
    orderBy?: PropositionsOrderByWithRelationInput | PropositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propositions.
     */
    cursor?: PropositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propositions.
     */
    distinct?: PropositionsScalarFieldEnum | PropositionsScalarFieldEnum[]
  }

  /**
   * Propositions findFirstOrThrow
   */
  export type PropositionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter, which Propositions to fetch.
     */
    where?: PropositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propositions to fetch.
     */
    orderBy?: PropositionsOrderByWithRelationInput | PropositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Propositions.
     */
    cursor?: PropositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propositions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Propositions.
     */
    distinct?: PropositionsScalarFieldEnum | PropositionsScalarFieldEnum[]
  }

  /**
   * Propositions findMany
   */
  export type PropositionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter, which Propositions to fetch.
     */
    where?: PropositionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Propositions to fetch.
     */
    orderBy?: PropositionsOrderByWithRelationInput | PropositionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Propositions.
     */
    cursor?: PropositionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Propositions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Propositions.
     */
    skip?: number
    distinct?: PropositionsScalarFieldEnum | PropositionsScalarFieldEnum[]
  }

  /**
   * Propositions create
   */
  export type PropositionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Propositions.
     */
    data: XOR<PropositionsCreateInput, PropositionsUncheckedCreateInput>
  }

  /**
   * Propositions createMany
   */
  export type PropositionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Propositions.
     */
    data: PropositionsCreateManyInput | PropositionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Propositions update
   */
  export type PropositionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Propositions.
     */
    data: XOR<PropositionsUpdateInput, PropositionsUncheckedUpdateInput>
    /**
     * Choose, which Propositions to update.
     */
    where: PropositionsWhereUniqueInput
  }

  /**
   * Propositions updateMany
   */
  export type PropositionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Propositions.
     */
    data: XOR<PropositionsUpdateManyMutationInput, PropositionsUncheckedUpdateManyInput>
    /**
     * Filter which Propositions to update
     */
    where?: PropositionsWhereInput
  }

  /**
   * Propositions upsert
   */
  export type PropositionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Propositions to update in case it exists.
     */
    where: PropositionsWhereUniqueInput
    /**
     * In case the Propositions found by the `where` argument doesn't exist, create a new Propositions with this data.
     */
    create: XOR<PropositionsCreateInput, PropositionsUncheckedCreateInput>
    /**
     * In case the Propositions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropositionsUpdateInput, PropositionsUncheckedUpdateInput>
  }

  /**
   * Propositions delete
   */
  export type PropositionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
    /**
     * Filter which Propositions to delete.
     */
    where: PropositionsWhereUniqueInput
  }

  /**
   * Propositions deleteMany
   */
  export type PropositionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propositions to delete
     */
    where?: PropositionsWhereInput
  }

  /**
   * Propositions without action
   */
  export type PropositionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propositions
     */
    select?: PropositionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropositionsInclude<ExtArgs> | null
  }


  /**
   * Model Ballots
   */

  export type AggregateBallots = {
    _count: BallotsCountAggregateOutputType | null
    _min: BallotsMinAggregateOutputType | null
    _max: BallotsMaxAggregateOutputType | null
  }

  export type BallotsMinAggregateOutputType = {
    id: string | null
    election_id: string | null
    user_id: string | null
    is_used: boolean | null
    used_at: Date | null
  }

  export type BallotsMaxAggregateOutputType = {
    id: string | null
    election_id: string | null
    user_id: string | null
    is_used: boolean | null
    used_at: Date | null
  }

  export type BallotsCountAggregateOutputType = {
    id: number
    election_id: number
    user_id: number
    is_used: number
    used_at: number
    _all: number
  }


  export type BallotsMinAggregateInputType = {
    id?: true
    election_id?: true
    user_id?: true
    is_used?: true
    used_at?: true
  }

  export type BallotsMaxAggregateInputType = {
    id?: true
    election_id?: true
    user_id?: true
    is_used?: true
    used_at?: true
  }

  export type BallotsCountAggregateInputType = {
    id?: true
    election_id?: true
    user_id?: true
    is_used?: true
    used_at?: true
    _all?: true
  }

  export type BallotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ballots to aggregate.
     */
    where?: BallotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ballots to fetch.
     */
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BallotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ballots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ballots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ballots
    **/
    _count?: true | BallotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BallotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BallotsMaxAggregateInputType
  }

  export type GetBallotsAggregateType<T extends BallotsAggregateArgs> = {
        [P in keyof T & keyof AggregateBallots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBallots[P]>
      : GetScalarType<T[P], AggregateBallots[P]>
  }




  export type BallotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BallotsWhereInput
    orderBy?: BallotsOrderByWithAggregationInput | BallotsOrderByWithAggregationInput[]
    by: BallotsScalarFieldEnum[] | BallotsScalarFieldEnum
    having?: BallotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BallotsCountAggregateInputType | true
    _min?: BallotsMinAggregateInputType
    _max?: BallotsMaxAggregateInputType
  }

  export type BallotsGroupByOutputType = {
    id: string
    election_id: string
    user_id: string
    is_used: boolean
    used_at: Date | null
    _count: BallotsCountAggregateOutputType | null
    _min: BallotsMinAggregateOutputType | null
    _max: BallotsMaxAggregateOutputType | null
  }

  type GetBallotsGroupByPayload<T extends BallotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BallotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BallotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BallotsGroupByOutputType[P]>
            : GetScalarType<T[P], BallotsGroupByOutputType[P]>
        }
      >
    >


  export type BallotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_id?: boolean
    user_id?: boolean
    is_used?: boolean
    used_at?: boolean
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ballots"]>

  export type BallotsSelectScalar = {
    id?: boolean
    election_id?: boolean
    user_id?: boolean
    is_used?: boolean
    used_at?: boolean
  }


  export type BallotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $BallotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ballots"
    objects: {
      election: Prisma.$ElectionsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      election_id: string
      user_id: string
      is_used: boolean
      used_at: Date | null
    }, ExtArgs["result"]["ballots"]>
    composites: {}
  }


  type BallotsGetPayload<S extends boolean | null | undefined | BallotsDefaultArgs> = $Result.GetResult<Prisma.$BallotsPayload, S>

  type BallotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BallotsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BallotsCountAggregateInputType | true
    }

  export interface BallotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ballots'], meta: { name: 'Ballots' } }
    /**
     * Find zero or one Ballots that matches the filter.
     * @param {BallotsFindUniqueArgs} args - Arguments to find a Ballots
     * @example
     * // Get one Ballots
     * const ballots = await prisma.ballots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BallotsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsFindUniqueArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Ballots that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BallotsFindUniqueOrThrowArgs} args - Arguments to find a Ballots
     * @example
     * // Get one Ballots
     * const ballots = await prisma.ballots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BallotsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Ballots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsFindFirstArgs} args - Arguments to find a Ballots
     * @example
     * // Get one Ballots
     * const ballots = await prisma.ballots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BallotsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsFindFirstArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Ballots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsFindFirstOrThrowArgs} args - Arguments to find a Ballots
     * @example
     * // Get one Ballots
     * const ballots = await prisma.ballots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BallotsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ballots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ballots
     * const ballots = await prisma.ballots.findMany()
     * 
     * // Get first 10 Ballots
     * const ballots = await prisma.ballots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ballotsWithIdOnly = await prisma.ballots.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BallotsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Ballots.
     * @param {BallotsCreateArgs} args - Arguments to create a Ballots.
     * @example
     * // Create one Ballots
     * const Ballots = await prisma.ballots.create({
     *   data: {
     *     // ... data to create a Ballots
     *   }
     * })
     * 
    **/
    create<T extends BallotsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsCreateArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ballots.
     *     @param {BallotsCreateManyArgs} args - Arguments to create many Ballots.
     *     @example
     *     // Create many Ballots
     *     const ballots = await prisma.ballots.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BallotsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ballots.
     * @param {BallotsDeleteArgs} args - Arguments to delete one Ballots.
     * @example
     * // Delete one Ballots
     * const Ballots = await prisma.ballots.delete({
     *   where: {
     *     // ... filter to delete one Ballots
     *   }
     * })
     * 
    **/
    delete<T extends BallotsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsDeleteArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Ballots.
     * @param {BallotsUpdateArgs} args - Arguments to update one Ballots.
     * @example
     * // Update one Ballots
     * const ballots = await prisma.ballots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BallotsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsUpdateArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ballots.
     * @param {BallotsDeleteManyArgs} args - Arguments to filter Ballots to delete.
     * @example
     * // Delete a few Ballots
     * const { count } = await prisma.ballots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BallotsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BallotsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ballots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ballots
     * const ballots = await prisma.ballots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BallotsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ballots.
     * @param {BallotsUpsertArgs} args - Arguments to update or create a Ballots.
     * @example
     * // Update or create a Ballots
     * const ballots = await prisma.ballots.upsert({
     *   create: {
     *     // ... data to create a Ballots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ballots we want to update
     *   }
     * })
    **/
    upsert<T extends BallotsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BallotsUpsertArgs<ExtArgs>>
    ): Prisma__BallotsClient<$Result.GetResult<Prisma.$BallotsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ballots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsCountArgs} args - Arguments to filter Ballots to count.
     * @example
     * // Count the number of Ballots
     * const count = await prisma.ballots.count({
     *   where: {
     *     // ... the filter for the Ballots we want to count
     *   }
     * })
    **/
    count<T extends BallotsCountArgs>(
      args?: Subset<T, BallotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BallotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ballots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BallotsAggregateArgs>(args: Subset<T, BallotsAggregateArgs>): Prisma.PrismaPromise<GetBallotsAggregateType<T>>

    /**
     * Group by Ballots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BallotsGroupByArgs} args - Group by arguments.
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
      T extends BallotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BallotsGroupByArgs['orderBy'] }
        : { orderBy?: BallotsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BallotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBallotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ballots model
   */
  readonly fields: BallotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ballots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BallotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    election<T extends ElectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionsDefaultArgs<ExtArgs>>): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Ballots model
   */ 
  interface BallotsFieldRefs {
    readonly id: FieldRef<"Ballots", 'String'>
    readonly election_id: FieldRef<"Ballots", 'String'>
    readonly user_id: FieldRef<"Ballots", 'String'>
    readonly is_used: FieldRef<"Ballots", 'Boolean'>
    readonly used_at: FieldRef<"Ballots", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ballots findUnique
   */
  export type BallotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter, which Ballots to fetch.
     */
    where: BallotsWhereUniqueInput
  }

  /**
   * Ballots findUniqueOrThrow
   */
  export type BallotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter, which Ballots to fetch.
     */
    where: BallotsWhereUniqueInput
  }

  /**
   * Ballots findFirst
   */
  export type BallotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter, which Ballots to fetch.
     */
    where?: BallotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ballots to fetch.
     */
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ballots.
     */
    cursor?: BallotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ballots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ballots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ballots.
     */
    distinct?: BallotsScalarFieldEnum | BallotsScalarFieldEnum[]
  }

  /**
   * Ballots findFirstOrThrow
   */
  export type BallotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter, which Ballots to fetch.
     */
    where?: BallotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ballots to fetch.
     */
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ballots.
     */
    cursor?: BallotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ballots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ballots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ballots.
     */
    distinct?: BallotsScalarFieldEnum | BallotsScalarFieldEnum[]
  }

  /**
   * Ballots findMany
   */
  export type BallotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter, which Ballots to fetch.
     */
    where?: BallotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ballots to fetch.
     */
    orderBy?: BallotsOrderByWithRelationInput | BallotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ballots.
     */
    cursor?: BallotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ballots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ballots.
     */
    skip?: number
    distinct?: BallotsScalarFieldEnum | BallotsScalarFieldEnum[]
  }

  /**
   * Ballots create
   */
  export type BallotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ballots.
     */
    data: XOR<BallotsCreateInput, BallotsUncheckedCreateInput>
  }

  /**
   * Ballots createMany
   */
  export type BallotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ballots.
     */
    data: BallotsCreateManyInput | BallotsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ballots update
   */
  export type BallotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ballots.
     */
    data: XOR<BallotsUpdateInput, BallotsUncheckedUpdateInput>
    /**
     * Choose, which Ballots to update.
     */
    where: BallotsWhereUniqueInput
  }

  /**
   * Ballots updateMany
   */
  export type BallotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ballots.
     */
    data: XOR<BallotsUpdateManyMutationInput, BallotsUncheckedUpdateManyInput>
    /**
     * Filter which Ballots to update
     */
    where?: BallotsWhereInput
  }

  /**
   * Ballots upsert
   */
  export type BallotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ballots to update in case it exists.
     */
    where: BallotsWhereUniqueInput
    /**
     * In case the Ballots found by the `where` argument doesn't exist, create a new Ballots with this data.
     */
    create: XOR<BallotsCreateInput, BallotsUncheckedCreateInput>
    /**
     * In case the Ballots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BallotsUpdateInput, BallotsUncheckedUpdateInput>
  }

  /**
   * Ballots delete
   */
  export type BallotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
    /**
     * Filter which Ballots to delete.
     */
    where: BallotsWhereUniqueInput
  }

  /**
   * Ballots deleteMany
   */
  export type BallotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ballots to delete
     */
    where?: BallotsWhereInput
  }

  /**
   * Ballots without action
   */
  export type BallotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ballots
     */
    select?: BallotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BallotsInclude<ExtArgs> | null
  }


  /**
   * Model Votes
   */

  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesMinAggregateOutputType = {
    id: string | null
    election_id: string | null
    created_at: Date | null
    ballot_proof: string | null
    proposition_proof: string | null
    validation_proof: string | null
  }

  export type VotesMaxAggregateOutputType = {
    id: string | null
    election_id: string | null
    created_at: Date | null
    ballot_proof: string | null
    proposition_proof: string | null
    validation_proof: string | null
  }

  export type VotesCountAggregateOutputType = {
    id: number
    election_id: number
    created_at: number
    ballot_proof: number
    proposition_proof: number
    validation_proof: number
    _all: number
  }


  export type VotesMinAggregateInputType = {
    id?: true
    election_id?: true
    created_at?: true
    ballot_proof?: true
    proposition_proof?: true
    validation_proof?: true
  }

  export type VotesMaxAggregateInputType = {
    id?: true
    election_id?: true
    created_at?: true
    ballot_proof?: true
    proposition_proof?: true
    validation_proof?: true
  }

  export type VotesCountAggregateInputType = {
    id?: true
    election_id?: true
    created_at?: true
    ballot_proof?: true
    proposition_proof?: true
    validation_proof?: true
    _all?: true
  }

  export type VotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to aggregate.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type VotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VotesWhereInput
    orderBy?: VotesOrderByWithAggregationInput | VotesOrderByWithAggregationInput[]
    by: VotesScalarFieldEnum[] | VotesScalarFieldEnum
    having?: VotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }

  export type VotesGroupByOutputType = {
    id: string
    election_id: string
    created_at: Date
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
    _count: VotesCountAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends VotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type VotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    election_id?: boolean
    created_at?: boolean
    ballot_proof?: boolean
    proposition_proof?: boolean
    validation_proof?: boolean
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["votes"]>

  export type VotesSelectScalar = {
    id?: boolean
    election_id?: boolean
    created_at?: boolean
    ballot_proof?: boolean
    proposition_proof?: boolean
    validation_proof?: boolean
  }


  export type VotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    election?: boolean | ElectionsDefaultArgs<ExtArgs>
  }


  export type $VotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Votes"
    objects: {
      election: Prisma.$ElectionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      election_id: string
      created_at: Date
      ballot_proof: string
      proposition_proof: string
      validation_proof: string
    }, ExtArgs["result"]["votes"]>
    composites: {}
  }


  type VotesGetPayload<S extends boolean | null | undefined | VotesDefaultArgs> = $Result.GetResult<Prisma.$VotesPayload, S>

  type VotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VotesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VotesCountAggregateInputType | true
    }

  export interface VotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Votes'], meta: { name: 'Votes' } }
    /**
     * Find zero or one Votes that matches the filter.
     * @param {VotesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VotesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VotesFindUniqueArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Votes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VotesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VotesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VotesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesFindFirstArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VotesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const votesWithIdOnly = await prisma.votes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VotesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Votes.
     * @param {VotesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
    **/
    create<T extends VotesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VotesCreateArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Votes.
     *     @param {VotesCreateManyArgs} args - Arguments to create many Votes.
     *     @example
     *     // Create many Votes
     *     const votes = await prisma.votes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VotesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Votes.
     * @param {VotesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
    **/
    delete<T extends VotesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VotesDeleteArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Votes.
     * @param {VotesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VotesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VotesUpdateArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Votes.
     * @param {VotesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VotesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VotesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VotesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VotesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Votes.
     * @param {VotesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
    **/
    upsert<T extends VotesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VotesUpsertArgs<ExtArgs>>
    ): Prisma__VotesClient<$Result.GetResult<Prisma.$VotesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VotesCountArgs>(
      args?: Subset<T, VotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): Prisma.PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesGroupByArgs} args - Group by arguments.
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
      T extends VotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VotesGroupByArgs['orderBy'] }
        : { orderBy?: VotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Votes model
   */
  readonly fields: VotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    election<T extends ElectionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ElectionsDefaultArgs<ExtArgs>>): Prisma__ElectionsClient<$Result.GetResult<Prisma.$ElectionsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Votes model
   */ 
  interface VotesFieldRefs {
    readonly id: FieldRef<"Votes", 'String'>
    readonly election_id: FieldRef<"Votes", 'String'>
    readonly created_at: FieldRef<"Votes", 'DateTime'>
    readonly ballot_proof: FieldRef<"Votes", 'String'>
    readonly proposition_proof: FieldRef<"Votes", 'String'>
    readonly validation_proof: FieldRef<"Votes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Votes findUnique
   */
  export type VotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes findUniqueOrThrow
   */
  export type VotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes findFirst
   */
  export type VotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes findFirstOrThrow
   */
  export type VotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes findMany
   */
  export type VotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VotesOrderByWithRelationInput | VotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * Votes create
   */
  export type VotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Votes.
     */
    data: XOR<VotesCreateInput, VotesUncheckedCreateInput>
  }

  /**
   * Votes createMany
   */
  export type VotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VotesCreateManyInput | VotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Votes update
   */
  export type VotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Votes.
     */
    data: XOR<VotesUpdateInput, VotesUncheckedUpdateInput>
    /**
     * Choose, which Votes to update.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes updateMany
   */
  export type VotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VotesUpdateManyMutationInput, VotesUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VotesWhereInput
  }

  /**
   * Votes upsert
   */
  export type VotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Votes to update in case it exists.
     */
    where: VotesWhereUniqueInput
    /**
     * In case the Votes found by the `where` argument doesn't exist, create a new Votes with this data.
     */
    create: XOR<VotesCreateInput, VotesUncheckedCreateInput>
    /**
     * In case the Votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VotesUpdateInput, VotesUncheckedUpdateInput>
  }

  /**
   * Votes delete
   */
  export type VotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
    /**
     * Filter which Votes to delete.
     */
    where: VotesWhereUniqueInput
  }

  /**
   * Votes deleteMany
   */
  export type VotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VotesWhereInput
  }

  /**
   * Votes without action
   */
  export type VotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Votes
     */
    select?: VotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VotesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ElectionsScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    name: 'name',
    description: 'description',
    created_at: 'created_at',
    start_at: 'start_at',
    end_at: 'end_at'
  };

  export type ElectionsScalarFieldEnum = (typeof ElectionsScalarFieldEnum)[keyof typeof ElectionsScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const TeamMembersScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    user_id: 'user_id',
    is_admin: 'is_admin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamMembersScalarFieldEnum = (typeof TeamMembersScalarFieldEnum)[keyof typeof TeamMembersScalarFieldEnum]


  export const InvitationsScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    state: 'state',
    invited_by_member_id: 'invited_by_member_id',
    email: 'email',
    is_admin: 'is_admin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvitationsScalarFieldEnum = (typeof InvitationsScalarFieldEnum)[keyof typeof InvitationsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    principal_id: 'principal_id',
    name: 'name',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PropositionsScalarFieldEnum: {
    id: 'id',
    election_id: 'election_id',
    name: 'name',
    description: 'description'
  };

  export type PropositionsScalarFieldEnum = (typeof PropositionsScalarFieldEnum)[keyof typeof PropositionsScalarFieldEnum]


  export const BallotsScalarFieldEnum: {
    id: 'id',
    election_id: 'election_id',
    user_id: 'user_id',
    is_used: 'is_used',
    used_at: 'used_at'
  };

  export type BallotsScalarFieldEnum = (typeof BallotsScalarFieldEnum)[keyof typeof BallotsScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id: 'id',
    election_id: 'election_id',
    created_at: 'created_at',
    ballot_proof: 'ballot_proof',
    proposition_proof: 'proposition_proof',
    validation_proof: 'validation_proof'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InviteStates'
   */
  export type EnumInviteStatesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStates'>
    


  /**
   * Reference to a field of type 'InviteStates[]'
   */
  export type ListEnumInviteStatesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InviteStates[]'>
    


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


  export type ElectionsWhereInput = {
    AND?: ElectionsWhereInput | ElectionsWhereInput[]
    OR?: ElectionsWhereInput[]
    NOT?: ElectionsWhereInput | ElectionsWhereInput[]
    id?: StringFilter<"Elections"> | string
    team_id?: StringFilter<"Elections"> | string
    name?: StringFilter<"Elections"> | string
    description?: StringNullableFilter<"Elections"> | string | null
    created_at?: DateTimeFilter<"Elections"> | Date | string
    start_at?: DateTimeFilter<"Elections"> | Date | string
    end_at?: DateTimeNullableFilter<"Elections"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    propositions?: PropositionsListRelationFilter
    ballots?: BallotsListRelationFilter
    votes?: VotesListRelationFilter
  }

  export type ElectionsOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrderInput | SortOrder
    team?: TeamsOrderByWithRelationInput
    propositions?: PropositionsOrderByRelationAggregateInput
    ballots?: BallotsOrderByRelationAggregateInput
    votes?: VotesOrderByRelationAggregateInput
  }

  export type ElectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ElectionsWhereInput | ElectionsWhereInput[]
    OR?: ElectionsWhereInput[]
    NOT?: ElectionsWhereInput | ElectionsWhereInput[]
    team_id?: StringFilter<"Elections"> | string
    name?: StringFilter<"Elections"> | string
    description?: StringNullableFilter<"Elections"> | string | null
    created_at?: DateTimeFilter<"Elections"> | Date | string
    start_at?: DateTimeFilter<"Elections"> | Date | string
    end_at?: DateTimeNullableFilter<"Elections"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    propositions?: PropositionsListRelationFilter
    ballots?: BallotsListRelationFilter
    votes?: VotesListRelationFilter
  }, "id">

  export type ElectionsOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrderInput | SortOrder
    _count?: ElectionsCountOrderByAggregateInput
    _max?: ElectionsMaxOrderByAggregateInput
    _min?: ElectionsMinOrderByAggregateInput
  }

  export type ElectionsScalarWhereWithAggregatesInput = {
    AND?: ElectionsScalarWhereWithAggregatesInput | ElectionsScalarWhereWithAggregatesInput[]
    OR?: ElectionsScalarWhereWithAggregatesInput[]
    NOT?: ElectionsScalarWhereWithAggregatesInput | ElectionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Elections"> | string
    team_id?: StringWithAggregatesFilter<"Elections"> | string
    name?: StringWithAggregatesFilter<"Elections"> | string
    description?: StringNullableWithAggregatesFilter<"Elections"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Elections"> | Date | string
    start_at?: DateTimeWithAggregatesFilter<"Elections"> | Date | string
    end_at?: DateTimeNullableWithAggregatesFilter<"Elections"> | Date | string | null
  }

  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    id?: StringFilter<"Teams"> | string
    name?: StringFilter<"Teams"> | string
    created_at?: DateTimeFilter<"Teams"> | Date | string
    updated_at?: DateTimeNullableFilter<"Teams"> | Date | string | null
    elections?: ElectionsListRelationFilter
    members?: TeamMembersListRelationFilter
    invitations?: InvitationsListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    elections?: ElectionsOrderByRelationAggregateInput
    members?: TeamMembersOrderByRelationAggregateInput
    invitations?: InvitationsOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    created_at?: DateTimeFilter<"Teams"> | Date | string
    updated_at?: DateTimeNullableFilter<"Teams"> | Date | string | null
    elections?: ElectionsListRelationFilter
    members?: TeamMembersListRelationFilter
    invitations?: InvitationsListRelationFilter
  }, "id" | "name">

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teams"> | string
    name?: StringWithAggregatesFilter<"Teams"> | string
    created_at?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Teams"> | Date | string | null
  }

  export type TeamMembersWhereInput = {
    AND?: TeamMembersWhereInput | TeamMembersWhereInput[]
    OR?: TeamMembersWhereInput[]
    NOT?: TeamMembersWhereInput | TeamMembersWhereInput[]
    id?: StringFilter<"TeamMembers"> | string
    team_id?: StringFilter<"TeamMembers"> | string
    user_id?: StringFilter<"TeamMembers"> | string
    is_admin?: BoolFilter<"TeamMembers"> | boolean
    created_at?: DateTimeFilter<"TeamMembers"> | Date | string
    updated_at?: DateTimeNullableFilter<"TeamMembers"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    Invitation?: InvitationsListRelationFilter
  }

  export type TeamMembersOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    team?: TeamsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    Invitation?: InvitationsOrderByRelationAggregateInput
  }

  export type TeamMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamMembersWhereInput | TeamMembersWhereInput[]
    OR?: TeamMembersWhereInput[]
    NOT?: TeamMembersWhereInput | TeamMembersWhereInput[]
    team_id?: StringFilter<"TeamMembers"> | string
    user_id?: StringFilter<"TeamMembers"> | string
    is_admin?: BoolFilter<"TeamMembers"> | boolean
    created_at?: DateTimeFilter<"TeamMembers"> | Date | string
    updated_at?: DateTimeNullableFilter<"TeamMembers"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    Invitation?: InvitationsListRelationFilter
  }, "id">

  export type TeamMembersOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TeamMembersCountOrderByAggregateInput
    _max?: TeamMembersMaxOrderByAggregateInput
    _min?: TeamMembersMinOrderByAggregateInput
  }

  export type TeamMembersScalarWhereWithAggregatesInput = {
    AND?: TeamMembersScalarWhereWithAggregatesInput | TeamMembersScalarWhereWithAggregatesInput[]
    OR?: TeamMembersScalarWhereWithAggregatesInput[]
    NOT?: TeamMembersScalarWhereWithAggregatesInput | TeamMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMembers"> | string
    team_id?: StringWithAggregatesFilter<"TeamMembers"> | string
    user_id?: StringWithAggregatesFilter<"TeamMembers"> | string
    is_admin?: BoolWithAggregatesFilter<"TeamMembers"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"TeamMembers"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"TeamMembers"> | Date | string | null
  }

  export type InvitationsWhereInput = {
    AND?: InvitationsWhereInput | InvitationsWhereInput[]
    OR?: InvitationsWhereInput[]
    NOT?: InvitationsWhereInput | InvitationsWhereInput[]
    id?: StringFilter<"Invitations"> | string
    team_id?: StringFilter<"Invitations"> | string
    state?: EnumInviteStatesFilter<"Invitations"> | $Enums.InviteStates
    invited_by_member_id?: StringFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    is_admin?: BoolFilter<"Invitations"> | boolean
    created_at?: DateTimeFilter<"Invitations"> | Date | string
    updated_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    invited_by_member?: XOR<TeamMembersRelationFilter, TeamMembersWhereInput>
  }

  export type InvitationsOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    state?: SortOrder
    invited_by_member_id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    team?: TeamsOrderByWithRelationInput
    invited_by_member?: TeamMembersOrderByWithRelationInput
  }

  export type InvitationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationsWhereInput | InvitationsWhereInput[]
    OR?: InvitationsWhereInput[]
    NOT?: InvitationsWhereInput | InvitationsWhereInput[]
    team_id?: StringFilter<"Invitations"> | string
    state?: EnumInviteStatesFilter<"Invitations"> | $Enums.InviteStates
    invited_by_member_id?: StringFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    is_admin?: BoolFilter<"Invitations"> | boolean
    created_at?: DateTimeFilter<"Invitations"> | Date | string
    updated_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
    team?: XOR<TeamsRelationFilter, TeamsWhereInput>
    invited_by_member?: XOR<TeamMembersRelationFilter, TeamMembersWhereInput>
  }, "id">

  export type InvitationsOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    state?: SortOrder
    invited_by_member_id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: InvitationsCountOrderByAggregateInput
    _max?: InvitationsMaxOrderByAggregateInput
    _min?: InvitationsMinOrderByAggregateInput
  }

  export type InvitationsScalarWhereWithAggregatesInput = {
    AND?: InvitationsScalarWhereWithAggregatesInput | InvitationsScalarWhereWithAggregatesInput[]
    OR?: InvitationsScalarWhereWithAggregatesInput[]
    NOT?: InvitationsScalarWhereWithAggregatesInput | InvitationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitations"> | string
    team_id?: StringWithAggregatesFilter<"Invitations"> | string
    state?: EnumInviteStatesWithAggregatesFilter<"Invitations"> | $Enums.InviteStates
    invited_by_member_id?: StringWithAggregatesFilter<"Invitations"> | string
    email?: StringWithAggregatesFilter<"Invitations"> | string
    is_admin?: BoolWithAggregatesFilter<"Invitations"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Invitations"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Invitations"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    principal_id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    member_of?: TeamMembersListRelationFilter
    ballots?: BallotsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    principal_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    member_of?: TeamMembersOrderByRelationAggregateInput
    ballots?: BallotsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    principal_id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    member_of?: TeamMembersListRelationFilter
    ballots?: BallotsListRelationFilter
  }, "id" | "principal_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    principal_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    principal_id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
  }

  export type PropositionsWhereInput = {
    AND?: PropositionsWhereInput | PropositionsWhereInput[]
    OR?: PropositionsWhereInput[]
    NOT?: PropositionsWhereInput | PropositionsWhereInput[]
    id?: StringFilter<"Propositions"> | string
    election_id?: StringFilter<"Propositions"> | string
    name?: StringFilter<"Propositions"> | string
    description?: StringNullableFilter<"Propositions"> | string | null
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
  }

  export type PropositionsOrderByWithRelationInput = {
    id?: SortOrder
    election_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    election?: ElectionsOrderByWithRelationInput
  }

  export type PropositionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PropositionsWhereInput | PropositionsWhereInput[]
    OR?: PropositionsWhereInput[]
    NOT?: PropositionsWhereInput | PropositionsWhereInput[]
    election_id?: StringFilter<"Propositions"> | string
    name?: StringFilter<"Propositions"> | string
    description?: StringNullableFilter<"Propositions"> | string | null
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
  }, "id">

  export type PropositionsOrderByWithAggregationInput = {
    id?: SortOrder
    election_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PropositionsCountOrderByAggregateInput
    _max?: PropositionsMaxOrderByAggregateInput
    _min?: PropositionsMinOrderByAggregateInput
  }

  export type PropositionsScalarWhereWithAggregatesInput = {
    AND?: PropositionsScalarWhereWithAggregatesInput | PropositionsScalarWhereWithAggregatesInput[]
    OR?: PropositionsScalarWhereWithAggregatesInput[]
    NOT?: PropositionsScalarWhereWithAggregatesInput | PropositionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Propositions"> | string
    election_id?: StringWithAggregatesFilter<"Propositions"> | string
    name?: StringWithAggregatesFilter<"Propositions"> | string
    description?: StringNullableWithAggregatesFilter<"Propositions"> | string | null
  }

  export type BallotsWhereInput = {
    AND?: BallotsWhereInput | BallotsWhereInput[]
    OR?: BallotsWhereInput[]
    NOT?: BallotsWhereInput | BallotsWhereInput[]
    id?: StringFilter<"Ballots"> | string
    election_id?: StringFilter<"Ballots"> | string
    user_id?: StringFilter<"Ballots"> | string
    is_used?: BoolFilter<"Ballots"> | boolean
    used_at?: DateTimeNullableFilter<"Ballots"> | Date | string | null
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type BallotsOrderByWithRelationInput = {
    id?: SortOrder
    election_id?: SortOrder
    user_id?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrderInput | SortOrder
    election?: ElectionsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type BallotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BallotsWhereInput | BallotsWhereInput[]
    OR?: BallotsWhereInput[]
    NOT?: BallotsWhereInput | BallotsWhereInput[]
    election_id?: StringFilter<"Ballots"> | string
    user_id?: StringFilter<"Ballots"> | string
    is_used?: BoolFilter<"Ballots"> | boolean
    used_at?: DateTimeNullableFilter<"Ballots"> | Date | string | null
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type BallotsOrderByWithAggregationInput = {
    id?: SortOrder
    election_id?: SortOrder
    user_id?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrderInput | SortOrder
    _count?: BallotsCountOrderByAggregateInput
    _max?: BallotsMaxOrderByAggregateInput
    _min?: BallotsMinOrderByAggregateInput
  }

  export type BallotsScalarWhereWithAggregatesInput = {
    AND?: BallotsScalarWhereWithAggregatesInput | BallotsScalarWhereWithAggregatesInput[]
    OR?: BallotsScalarWhereWithAggregatesInput[]
    NOT?: BallotsScalarWhereWithAggregatesInput | BallotsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ballots"> | string
    election_id?: StringWithAggregatesFilter<"Ballots"> | string
    user_id?: StringWithAggregatesFilter<"Ballots"> | string
    is_used?: BoolWithAggregatesFilter<"Ballots"> | boolean
    used_at?: DateTimeNullableWithAggregatesFilter<"Ballots"> | Date | string | null
  }

  export type VotesWhereInput = {
    AND?: VotesWhereInput | VotesWhereInput[]
    OR?: VotesWhereInput[]
    NOT?: VotesWhereInput | VotesWhereInput[]
    id?: StringFilter<"Votes"> | string
    election_id?: StringFilter<"Votes"> | string
    created_at?: DateTimeFilter<"Votes"> | Date | string
    ballot_proof?: StringFilter<"Votes"> | string
    proposition_proof?: StringFilter<"Votes"> | string
    validation_proof?: StringFilter<"Votes"> | string
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
  }

  export type VotesOrderByWithRelationInput = {
    id?: SortOrder
    election_id?: SortOrder
    created_at?: SortOrder
    ballot_proof?: SortOrder
    proposition_proof?: SortOrder
    validation_proof?: SortOrder
    election?: ElectionsOrderByWithRelationInput
  }

  export type VotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ballot_proof?: string
    proposition_proof?: string
    validation_proof?: string
    AND?: VotesWhereInput | VotesWhereInput[]
    OR?: VotesWhereInput[]
    NOT?: VotesWhereInput | VotesWhereInput[]
    election_id?: StringFilter<"Votes"> | string
    created_at?: DateTimeFilter<"Votes"> | Date | string
    election?: XOR<ElectionsRelationFilter, ElectionsWhereInput>
  }, "id" | "ballot_proof" | "proposition_proof" | "validation_proof">

  export type VotesOrderByWithAggregationInput = {
    id?: SortOrder
    election_id?: SortOrder
    created_at?: SortOrder
    ballot_proof?: SortOrder
    proposition_proof?: SortOrder
    validation_proof?: SortOrder
    _count?: VotesCountOrderByAggregateInput
    _max?: VotesMaxOrderByAggregateInput
    _min?: VotesMinOrderByAggregateInput
  }

  export type VotesScalarWhereWithAggregatesInput = {
    AND?: VotesScalarWhereWithAggregatesInput | VotesScalarWhereWithAggregatesInput[]
    OR?: VotesScalarWhereWithAggregatesInput[]
    NOT?: VotesScalarWhereWithAggregatesInput | VotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Votes"> | string
    election_id?: StringWithAggregatesFilter<"Votes"> | string
    created_at?: DateTimeWithAggregatesFilter<"Votes"> | Date | string
    ballot_proof?: StringWithAggregatesFilter<"Votes"> | string
    proposition_proof?: StringWithAggregatesFilter<"Votes"> | string
    validation_proof?: StringWithAggregatesFilter<"Votes"> | string
  }

  export type ElectionsCreateInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutElectionsInput
    propositions?: PropositionsCreateNestedManyWithoutElectionInput
    ballots?: BallotsCreateNestedManyWithoutElectionInput
    votes?: VotesCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUncheckedCreateInput = {
    id?: string
    team_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    propositions?: PropositionsUncheckedCreateNestedManyWithoutElectionInput
    ballots?: BallotsUncheckedCreateNestedManyWithoutElectionInput
    votes?: VotesUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutElectionsNestedInput
    propositions?: PropositionsUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUpdateManyWithoutElectionNestedInput
    votes?: VotesUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propositions?: PropositionsUncheckedUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VotesUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsCreateManyInput = {
    id?: string
    team_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
  }

  export type ElectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsCreateNestedManyWithoutTeamInput
    members?: TeamMembersCreateNestedManyWithoutTeamInput
    invitations?: InvitationsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMembersUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUpdateManyWithoutTeamNestedInput
    members?: TeamMembersUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMembersUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMembersCreateInput = {
    id?: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutMember_ofInput
    Invitation?: InvitationsCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersUncheckedCreateInput = {
    id?: string
    team_id: string
    user_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    Invitation?: InvitationsUncheckedCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutMember_ofNestedInput
    Invitation?: InvitationsUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Invitation?: InvitationsUncheckedUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersCreateManyInput = {
    id?: string
    team_id: string
    user_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type TeamMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsCreateInput = {
    id?: string
    state?: $Enums.InviteStates
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutInvitationsInput
    invited_by_member: TeamMembersCreateNestedOneWithoutInvitationInput
  }

  export type InvitationsUncheckedCreateInput = {
    id?: string
    team_id: string
    state?: $Enums.InviteStates
    invited_by_member_id: string
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutInvitationsNestedInput
    invited_by_member?: TeamMembersUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    invited_by_member_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsCreateManyInput = {
    id?: string
    team_id: string
    state?: $Enums.InviteStates
    invited_by_member_id: string
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    invited_by_member_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    member_of?: TeamMembersCreateNestedManyWithoutUserInput
    ballots?: BallotsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    member_of?: TeamMembersUncheckedCreateNestedManyWithoutUserInput
    ballots?: BallotsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    member_of?: TeamMembersUpdateManyWithoutUserNestedInput
    ballots?: BallotsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    member_of?: TeamMembersUncheckedUpdateManyWithoutUserNestedInput
    ballots?: BallotsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    principal_id: string
    name: string
    email: string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PropositionsCreateInput = {
    id?: string
    name: string
    description?: string | null
    election: ElectionsCreateNestedOneWithoutPropositionsInput
  }

  export type PropositionsUncheckedCreateInput = {
    id?: string
    election_id: string
    name: string
    description?: string | null
  }

  export type PropositionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    election?: ElectionsUpdateOneRequiredWithoutPropositionsNestedInput
  }

  export type PropositionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropositionsCreateManyInput = {
    id?: string
    election_id: string
    name: string
    description?: string | null
  }

  export type PropositionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropositionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BallotsCreateInput = {
    id?: string
    is_used?: boolean
    used_at?: Date | string | null
    election: ElectionsCreateNestedOneWithoutBallotsInput
    user: UsersCreateNestedOneWithoutBallotsInput
  }

  export type BallotsUncheckedCreateInput = {
    id?: string
    election_id: string
    user_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type BallotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    election?: ElectionsUpdateOneRequiredWithoutBallotsNestedInput
    user?: UsersUpdateOneRequiredWithoutBallotsNestedInput
  }

  export type BallotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BallotsCreateManyInput = {
    id?: string
    election_id: string
    user_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type BallotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BallotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VotesCreateInput = {
    id?: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
    election: ElectionsCreateNestedOneWithoutVotesInput
  }

  export type VotesUncheckedCreateInput = {
    id?: string
    election_id: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
  }

  export type VotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
    election?: ElectionsUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
  }

  export type VotesCreateManyInput = {
    id?: string
    election_id: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
  }

  export type VotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
  }

  export type VotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamsRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type PropositionsListRelationFilter = {
    every?: PropositionsWhereInput
    some?: PropositionsWhereInput
    none?: PropositionsWhereInput
  }

  export type BallotsListRelationFilter = {
    every?: BallotsWhereInput
    some?: BallotsWhereInput
    none?: BallotsWhereInput
  }

  export type VotesListRelationFilter = {
    every?: VotesWhereInput
    some?: VotesWhereInput
    none?: VotesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropositionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BallotsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectionsCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
  }

  export type ElectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
  }

  export type ElectionsMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    start_at?: SortOrder
    end_at?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ElectionsListRelationFilter = {
    every?: ElectionsWhereInput
    some?: ElectionsWhereInput
    none?: ElectionsWhereInput
  }

  export type TeamMembersListRelationFilter = {
    every?: TeamMembersWhereInput
    some?: TeamMembersWhereInput
    none?: TeamMembersWhereInput
  }

  export type InvitationsListRelationFilter = {
    every?: InvitationsWhereInput
    some?: InvitationsWhereInput
    none?: InvitationsWhereInput
  }

  export type ElectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TeamMembersCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamMembersMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumInviteStatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStates | EnumInviteStatesFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatesFilter<$PrismaModel> | $Enums.InviteStates
  }

  export type TeamMembersRelationFilter = {
    is?: TeamMembersWhereInput
    isNot?: TeamMembersWhereInput
  }

  export type InvitationsCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    state?: SortOrder
    invited_by_member_id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvitationsMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    state?: SortOrder
    invited_by_member_id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvitationsMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    state?: SortOrder
    invited_by_member_id?: SortOrder
    email?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumInviteStatesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStates | EnumInviteStatesFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatesWithAggregatesFilter<$PrismaModel> | $Enums.InviteStates
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatesFilter<$PrismaModel>
    _max?: NestedEnumInviteStatesFilter<$PrismaModel>
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    principal_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    principal_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    principal_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type ElectionsRelationFilter = {
    is?: ElectionsWhereInput
    isNot?: ElectionsWhereInput
  }

  export type PropositionsCountOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PropositionsMaxOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PropositionsMinOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BallotsCountOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    user_id?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
  }

  export type BallotsMaxOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    user_id?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
  }

  export type BallotsMinOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    user_id?: SortOrder
    is_used?: SortOrder
    used_at?: SortOrder
  }

  export type VotesCountOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    created_at?: SortOrder
    ballot_proof?: SortOrder
    proposition_proof?: SortOrder
    validation_proof?: SortOrder
  }

  export type VotesMaxOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    created_at?: SortOrder
    ballot_proof?: SortOrder
    proposition_proof?: SortOrder
    validation_proof?: SortOrder
  }

  export type VotesMinOrderByAggregateInput = {
    id?: SortOrder
    election_id?: SortOrder
    created_at?: SortOrder
    ballot_proof?: SortOrder
    proposition_proof?: SortOrder
    validation_proof?: SortOrder
  }

  export type TeamsCreateNestedOneWithoutElectionsInput = {
    create?: XOR<TeamsCreateWithoutElectionsInput, TeamsUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutElectionsInput
    connect?: TeamsWhereUniqueInput
  }

  export type PropositionsCreateNestedManyWithoutElectionInput = {
    create?: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput> | PropositionsCreateWithoutElectionInput[] | PropositionsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PropositionsCreateOrConnectWithoutElectionInput | PropositionsCreateOrConnectWithoutElectionInput[]
    createMany?: PropositionsCreateManyElectionInputEnvelope
    connect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
  }

  export type BallotsCreateNestedManyWithoutElectionInput = {
    create?: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput> | BallotsCreateWithoutElectionInput[] | BallotsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutElectionInput | BallotsCreateOrConnectWithoutElectionInput[]
    createMany?: BallotsCreateManyElectionInputEnvelope
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
  }

  export type VotesCreateNestedManyWithoutElectionInput = {
    create?: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput> | VotesCreateWithoutElectionInput[] | VotesUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VotesCreateOrConnectWithoutElectionInput | VotesCreateOrConnectWithoutElectionInput[]
    createMany?: VotesCreateManyElectionInputEnvelope
    connect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
  }

  export type PropositionsUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput> | PropositionsCreateWithoutElectionInput[] | PropositionsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PropositionsCreateOrConnectWithoutElectionInput | PropositionsCreateOrConnectWithoutElectionInput[]
    createMany?: PropositionsCreateManyElectionInputEnvelope
    connect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
  }

  export type BallotsUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput> | BallotsCreateWithoutElectionInput[] | BallotsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutElectionInput | BallotsCreateOrConnectWithoutElectionInput[]
    createMany?: BallotsCreateManyElectionInputEnvelope
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
  }

  export type VotesUncheckedCreateNestedManyWithoutElectionInput = {
    create?: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput> | VotesCreateWithoutElectionInput[] | VotesUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VotesCreateOrConnectWithoutElectionInput | VotesCreateOrConnectWithoutElectionInput[]
    createMany?: VotesCreateManyElectionInputEnvelope
    connect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeamsUpdateOneRequiredWithoutElectionsNestedInput = {
    create?: XOR<TeamsCreateWithoutElectionsInput, TeamsUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutElectionsInput
    upsert?: TeamsUpsertWithoutElectionsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutElectionsInput, TeamsUpdateWithoutElectionsInput>, TeamsUncheckedUpdateWithoutElectionsInput>
  }

  export type PropositionsUpdateManyWithoutElectionNestedInput = {
    create?: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput> | PropositionsCreateWithoutElectionInput[] | PropositionsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PropositionsCreateOrConnectWithoutElectionInput | PropositionsCreateOrConnectWithoutElectionInput[]
    upsert?: PropositionsUpsertWithWhereUniqueWithoutElectionInput | PropositionsUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: PropositionsCreateManyElectionInputEnvelope
    set?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    disconnect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    delete?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    connect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    update?: PropositionsUpdateWithWhereUniqueWithoutElectionInput | PropositionsUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: PropositionsUpdateManyWithWhereWithoutElectionInput | PropositionsUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: PropositionsScalarWhereInput | PropositionsScalarWhereInput[]
  }

  export type BallotsUpdateManyWithoutElectionNestedInput = {
    create?: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput> | BallotsCreateWithoutElectionInput[] | BallotsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutElectionInput | BallotsCreateOrConnectWithoutElectionInput[]
    upsert?: BallotsUpsertWithWhereUniqueWithoutElectionInput | BallotsUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: BallotsCreateManyElectionInputEnvelope
    set?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    disconnect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    delete?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    update?: BallotsUpdateWithWhereUniqueWithoutElectionInput | BallotsUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: BallotsUpdateManyWithWhereWithoutElectionInput | BallotsUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
  }

  export type VotesUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput> | VotesCreateWithoutElectionInput[] | VotesUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VotesCreateOrConnectWithoutElectionInput | VotesCreateOrConnectWithoutElectionInput[]
    upsert?: VotesUpsertWithWhereUniqueWithoutElectionInput | VotesUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VotesCreateManyElectionInputEnvelope
    set?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    disconnect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    delete?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    connect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    update?: VotesUpdateWithWhereUniqueWithoutElectionInput | VotesUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VotesUpdateManyWithWhereWithoutElectionInput | VotesUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VotesScalarWhereInput | VotesScalarWhereInput[]
  }

  export type PropositionsUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput> | PropositionsCreateWithoutElectionInput[] | PropositionsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: PropositionsCreateOrConnectWithoutElectionInput | PropositionsCreateOrConnectWithoutElectionInput[]
    upsert?: PropositionsUpsertWithWhereUniqueWithoutElectionInput | PropositionsUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: PropositionsCreateManyElectionInputEnvelope
    set?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    disconnect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    delete?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    connect?: PropositionsWhereUniqueInput | PropositionsWhereUniqueInput[]
    update?: PropositionsUpdateWithWhereUniqueWithoutElectionInput | PropositionsUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: PropositionsUpdateManyWithWhereWithoutElectionInput | PropositionsUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: PropositionsScalarWhereInput | PropositionsScalarWhereInput[]
  }

  export type BallotsUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput> | BallotsCreateWithoutElectionInput[] | BallotsUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutElectionInput | BallotsCreateOrConnectWithoutElectionInput[]
    upsert?: BallotsUpsertWithWhereUniqueWithoutElectionInput | BallotsUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: BallotsCreateManyElectionInputEnvelope
    set?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    disconnect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    delete?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    update?: BallotsUpdateWithWhereUniqueWithoutElectionInput | BallotsUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: BallotsUpdateManyWithWhereWithoutElectionInput | BallotsUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
  }

  export type VotesUncheckedUpdateManyWithoutElectionNestedInput = {
    create?: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput> | VotesCreateWithoutElectionInput[] | VotesUncheckedCreateWithoutElectionInput[]
    connectOrCreate?: VotesCreateOrConnectWithoutElectionInput | VotesCreateOrConnectWithoutElectionInput[]
    upsert?: VotesUpsertWithWhereUniqueWithoutElectionInput | VotesUpsertWithWhereUniqueWithoutElectionInput[]
    createMany?: VotesCreateManyElectionInputEnvelope
    set?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    disconnect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    delete?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    connect?: VotesWhereUniqueInput | VotesWhereUniqueInput[]
    update?: VotesUpdateWithWhereUniqueWithoutElectionInput | VotesUpdateWithWhereUniqueWithoutElectionInput[]
    updateMany?: VotesUpdateManyWithWhereWithoutElectionInput | VotesUpdateManyWithWhereWithoutElectionInput[]
    deleteMany?: VotesScalarWhereInput | VotesScalarWhereInput[]
  }

  export type ElectionsCreateNestedManyWithoutTeamInput = {
    create?: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput> | ElectionsCreateWithoutTeamInput[] | ElectionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ElectionsCreateOrConnectWithoutTeamInput | ElectionsCreateOrConnectWithoutTeamInput[]
    createMany?: ElectionsCreateManyTeamInputEnvelope
    connect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
  }

  export type TeamMembersCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type InvitationsCreateNestedManyWithoutTeamInput = {
    create?: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput> | InvitationsCreateWithoutTeamInput[] | InvitationsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutTeamInput | InvitationsCreateOrConnectWithoutTeamInput[]
    createMany?: InvitationsCreateManyTeamInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type ElectionsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput> | ElectionsCreateWithoutTeamInput[] | ElectionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ElectionsCreateOrConnectWithoutTeamInput | ElectionsCreateOrConnectWithoutTeamInput[]
    createMany?: ElectionsCreateManyTeamInputEnvelope
    connect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
  }

  export type TeamMembersUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type InvitationsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput> | InvitationsCreateWithoutTeamInput[] | InvitationsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutTeamInput | InvitationsCreateOrConnectWithoutTeamInput[]
    createMany?: InvitationsCreateManyTeamInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type ElectionsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput> | ElectionsCreateWithoutTeamInput[] | ElectionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ElectionsCreateOrConnectWithoutTeamInput | ElectionsCreateOrConnectWithoutTeamInput[]
    upsert?: ElectionsUpsertWithWhereUniqueWithoutTeamInput | ElectionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ElectionsCreateManyTeamInputEnvelope
    set?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    disconnect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    delete?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    connect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    update?: ElectionsUpdateWithWhereUniqueWithoutTeamInput | ElectionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ElectionsUpdateManyWithWhereWithoutTeamInput | ElectionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ElectionsScalarWhereInput | ElectionsScalarWhereInput[]
  }

  export type TeamMembersUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutTeamInput | TeamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutTeamInput | TeamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutTeamInput | TeamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type InvitationsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput> | InvitationsCreateWithoutTeamInput[] | InvitationsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutTeamInput | InvitationsCreateOrConnectWithoutTeamInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutTeamInput | InvitationsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: InvitationsCreateManyTeamInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutTeamInput | InvitationsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutTeamInput | InvitationsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type ElectionsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput> | ElectionsCreateWithoutTeamInput[] | ElectionsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ElectionsCreateOrConnectWithoutTeamInput | ElectionsCreateOrConnectWithoutTeamInput[]
    upsert?: ElectionsUpsertWithWhereUniqueWithoutTeamInput | ElectionsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ElectionsCreateManyTeamInputEnvelope
    set?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    disconnect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    delete?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    connect?: ElectionsWhereUniqueInput | ElectionsWhereUniqueInput[]
    update?: ElectionsUpdateWithWhereUniqueWithoutTeamInput | ElectionsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ElectionsUpdateManyWithWhereWithoutTeamInput | ElectionsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ElectionsScalarWhereInput | ElectionsScalarWhereInput[]
  }

  export type TeamMembersUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutTeamInput | TeamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutTeamInput | TeamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutTeamInput | TeamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type InvitationsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput> | InvitationsCreateWithoutTeamInput[] | InvitationsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutTeamInput | InvitationsCreateOrConnectWithoutTeamInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutTeamInput | InvitationsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: InvitationsCreateManyTeamInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutTeamInput | InvitationsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutTeamInput | InvitationsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type TeamsCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput
    connect?: TeamsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMember_ofInput = {
    create?: XOR<UsersCreateWithoutMember_ofInput, UsersUncheckedCreateWithoutMember_ofInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMember_ofInput
    connect?: UsersWhereUniqueInput
  }

  export type InvitationsCreateNestedManyWithoutInvited_by_memberInput = {
    create?: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput> | InvitationsCreateWithoutInvited_by_memberInput[] | InvitationsUncheckedCreateWithoutInvited_by_memberInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutInvited_by_memberInput | InvitationsCreateOrConnectWithoutInvited_by_memberInput[]
    createMany?: InvitationsCreateManyInvited_by_memberInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type InvitationsUncheckedCreateNestedManyWithoutInvited_by_memberInput = {
    create?: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput> | InvitationsCreateWithoutInvited_by_memberInput[] | InvitationsUncheckedCreateWithoutInvited_by_memberInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutInvited_by_memberInput | InvitationsCreateOrConnectWithoutInvited_by_memberInput[]
    createMany?: InvitationsCreateManyInvited_by_memberInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TeamsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput
    upsert?: TeamsUpsertWithoutMembersInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutMembersInput, TeamsUpdateWithoutMembersInput>, TeamsUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutMember_ofNestedInput = {
    create?: XOR<UsersCreateWithoutMember_ofInput, UsersUncheckedCreateWithoutMember_ofInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMember_ofInput
    upsert?: UsersUpsertWithoutMember_ofInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMember_ofInput, UsersUpdateWithoutMember_ofInput>, UsersUncheckedUpdateWithoutMember_ofInput>
  }

  export type InvitationsUpdateManyWithoutInvited_by_memberNestedInput = {
    create?: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput> | InvitationsCreateWithoutInvited_by_memberInput[] | InvitationsUncheckedCreateWithoutInvited_by_memberInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutInvited_by_memberInput | InvitationsCreateOrConnectWithoutInvited_by_memberInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutInvited_by_memberInput | InvitationsUpsertWithWhereUniqueWithoutInvited_by_memberInput[]
    createMany?: InvitationsCreateManyInvited_by_memberInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutInvited_by_memberInput | InvitationsUpdateWithWhereUniqueWithoutInvited_by_memberInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutInvited_by_memberInput | InvitationsUpdateManyWithWhereWithoutInvited_by_memberInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type InvitationsUncheckedUpdateManyWithoutInvited_by_memberNestedInput = {
    create?: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput> | InvitationsCreateWithoutInvited_by_memberInput[] | InvitationsUncheckedCreateWithoutInvited_by_memberInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutInvited_by_memberInput | InvitationsCreateOrConnectWithoutInvited_by_memberInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutInvited_by_memberInput | InvitationsUpsertWithWhereUniqueWithoutInvited_by_memberInput[]
    createMany?: InvitationsCreateManyInvited_by_memberInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutInvited_by_memberInput | InvitationsUpdateWithWhereUniqueWithoutInvited_by_memberInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutInvited_by_memberInput | InvitationsUpdateManyWithWhereWithoutInvited_by_memberInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type TeamsCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<TeamsCreateWithoutInvitationsInput, TeamsUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutInvitationsInput
    connect?: TeamsWhereUniqueInput
  }

  export type TeamMembersCreateNestedOneWithoutInvitationInput = {
    create?: XOR<TeamMembersCreateWithoutInvitationInput, TeamMembersUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: TeamMembersCreateOrConnectWithoutInvitationInput
    connect?: TeamMembersWhereUniqueInput
  }

  export type EnumInviteStatesFieldUpdateOperationsInput = {
    set?: $Enums.InviteStates
  }

  export type TeamsUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<TeamsCreateWithoutInvitationsInput, TeamsUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutInvitationsInput
    upsert?: TeamsUpsertWithoutInvitationsInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutInvitationsInput, TeamsUpdateWithoutInvitationsInput>, TeamsUncheckedUpdateWithoutInvitationsInput>
  }

  export type TeamMembersUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<TeamMembersCreateWithoutInvitationInput, TeamMembersUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: TeamMembersCreateOrConnectWithoutInvitationInput
    upsert?: TeamMembersUpsertWithoutInvitationInput
    connect?: TeamMembersWhereUniqueInput
    update?: XOR<XOR<TeamMembersUpdateToOneWithWhereWithoutInvitationInput, TeamMembersUpdateWithoutInvitationInput>, TeamMembersUncheckedUpdateWithoutInvitationInput>
  }

  export type TeamMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type BallotsCreateNestedManyWithoutUserInput = {
    create?: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput> | BallotsCreateWithoutUserInput[] | BallotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutUserInput | BallotsCreateOrConnectWithoutUserInput[]
    createMany?: BallotsCreateManyUserInputEnvelope
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
  }

  export type TeamMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type BallotsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput> | BallotsCreateWithoutUserInput[] | BallotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutUserInput | BallotsCreateOrConnectWithoutUserInput[]
    createMany?: BallotsCreateManyUserInputEnvelope
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
  }

  export type TeamMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutUserInput | TeamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutUserInput | TeamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutUserInput | TeamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type BallotsUpdateManyWithoutUserNestedInput = {
    create?: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput> | BallotsCreateWithoutUserInput[] | BallotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutUserInput | BallotsCreateOrConnectWithoutUserInput[]
    upsert?: BallotsUpsertWithWhereUniqueWithoutUserInput | BallotsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BallotsCreateManyUserInputEnvelope
    set?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    disconnect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    delete?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    update?: BallotsUpdateWithWhereUniqueWithoutUserInput | BallotsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BallotsUpdateManyWithWhereWithoutUserInput | BallotsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
  }

  export type TeamMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutUserInput | TeamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutUserInput | TeamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutUserInput | TeamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type BallotsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput> | BallotsCreateWithoutUserInput[] | BallotsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BallotsCreateOrConnectWithoutUserInput | BallotsCreateOrConnectWithoutUserInput[]
    upsert?: BallotsUpsertWithWhereUniqueWithoutUserInput | BallotsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BallotsCreateManyUserInputEnvelope
    set?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    disconnect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    delete?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    connect?: BallotsWhereUniqueInput | BallotsWhereUniqueInput[]
    update?: BallotsUpdateWithWhereUniqueWithoutUserInput | BallotsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BallotsUpdateManyWithWhereWithoutUserInput | BallotsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
  }

  export type ElectionsCreateNestedOneWithoutPropositionsInput = {
    create?: XOR<ElectionsCreateWithoutPropositionsInput, ElectionsUncheckedCreateWithoutPropositionsInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutPropositionsInput
    connect?: ElectionsWhereUniqueInput
  }

  export type ElectionsUpdateOneRequiredWithoutPropositionsNestedInput = {
    create?: XOR<ElectionsCreateWithoutPropositionsInput, ElectionsUncheckedCreateWithoutPropositionsInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutPropositionsInput
    upsert?: ElectionsUpsertWithoutPropositionsInput
    connect?: ElectionsWhereUniqueInput
    update?: XOR<XOR<ElectionsUpdateToOneWithWhereWithoutPropositionsInput, ElectionsUpdateWithoutPropositionsInput>, ElectionsUncheckedUpdateWithoutPropositionsInput>
  }

  export type ElectionsCreateNestedOneWithoutBallotsInput = {
    create?: XOR<ElectionsCreateWithoutBallotsInput, ElectionsUncheckedCreateWithoutBallotsInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutBallotsInput
    connect?: ElectionsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutBallotsInput = {
    create?: XOR<UsersCreateWithoutBallotsInput, UsersUncheckedCreateWithoutBallotsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBallotsInput
    connect?: UsersWhereUniqueInput
  }

  export type ElectionsUpdateOneRequiredWithoutBallotsNestedInput = {
    create?: XOR<ElectionsCreateWithoutBallotsInput, ElectionsUncheckedCreateWithoutBallotsInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutBallotsInput
    upsert?: ElectionsUpsertWithoutBallotsInput
    connect?: ElectionsWhereUniqueInput
    update?: XOR<XOR<ElectionsUpdateToOneWithWhereWithoutBallotsInput, ElectionsUpdateWithoutBallotsInput>, ElectionsUncheckedUpdateWithoutBallotsInput>
  }

  export type UsersUpdateOneRequiredWithoutBallotsNestedInput = {
    create?: XOR<UsersCreateWithoutBallotsInput, UsersUncheckedCreateWithoutBallotsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBallotsInput
    upsert?: UsersUpsertWithoutBallotsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBallotsInput, UsersUpdateWithoutBallotsInput>, UsersUncheckedUpdateWithoutBallotsInput>
  }

  export type ElectionsCreateNestedOneWithoutVotesInput = {
    create?: XOR<ElectionsCreateWithoutVotesInput, ElectionsUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutVotesInput
    connect?: ElectionsWhereUniqueInput
  }

  export type ElectionsUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ElectionsCreateWithoutVotesInput, ElectionsUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ElectionsCreateOrConnectWithoutVotesInput
    upsert?: ElectionsUpsertWithoutVotesInput
    connect?: ElectionsWhereUniqueInput
    update?: XOR<XOR<ElectionsUpdateToOneWithWhereWithoutVotesInput, ElectionsUpdateWithoutVotesInput>, ElectionsUncheckedUpdateWithoutVotesInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumInviteStatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStates | EnumInviteStatesFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatesFilter<$PrismaModel> | $Enums.InviteStates
  }

  export type NestedEnumInviteStatesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InviteStates | EnumInviteStatesFieldRefInput<$PrismaModel>
    in?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    notIn?: $Enums.InviteStates[] | ListEnumInviteStatesFieldRefInput<$PrismaModel>
    not?: NestedEnumInviteStatesWithAggregatesFilter<$PrismaModel> | $Enums.InviteStates
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInviteStatesFilter<$PrismaModel>
    _max?: NestedEnumInviteStatesFilter<$PrismaModel>
  }

  export type TeamsCreateWithoutElectionsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: TeamMembersCreateNestedManyWithoutTeamInput
    invitations?: InvitationsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutElectionsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    members?: TeamMembersUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutElectionsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutElectionsInput, TeamsUncheckedCreateWithoutElectionsInput>
  }

  export type PropositionsCreateWithoutElectionInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type PropositionsUncheckedCreateWithoutElectionInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type PropositionsCreateOrConnectWithoutElectionInput = {
    where: PropositionsWhereUniqueInput
    create: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput>
  }

  export type PropositionsCreateManyElectionInputEnvelope = {
    data: PropositionsCreateManyElectionInput | PropositionsCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type BallotsCreateWithoutElectionInput = {
    id?: string
    is_used?: boolean
    used_at?: Date | string | null
    user: UsersCreateNestedOneWithoutBallotsInput
  }

  export type BallotsUncheckedCreateWithoutElectionInput = {
    id?: string
    user_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type BallotsCreateOrConnectWithoutElectionInput = {
    where: BallotsWhereUniqueInput
    create: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput>
  }

  export type BallotsCreateManyElectionInputEnvelope = {
    data: BallotsCreateManyElectionInput | BallotsCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type VotesCreateWithoutElectionInput = {
    id?: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
  }

  export type VotesUncheckedCreateWithoutElectionInput = {
    id?: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
  }

  export type VotesCreateOrConnectWithoutElectionInput = {
    where: VotesWhereUniqueInput
    create: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput>
  }

  export type VotesCreateManyElectionInputEnvelope = {
    data: VotesCreateManyElectionInput | VotesCreateManyElectionInput[]
    skipDuplicates?: boolean
  }

  export type TeamsUpsertWithoutElectionsInput = {
    update: XOR<TeamsUpdateWithoutElectionsInput, TeamsUncheckedUpdateWithoutElectionsInput>
    create: XOR<TeamsCreateWithoutElectionsInput, TeamsUncheckedCreateWithoutElectionsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutElectionsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutElectionsInput, TeamsUncheckedUpdateWithoutElectionsInput>
  }

  export type TeamsUpdateWithoutElectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: TeamMembersUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutElectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: TeamMembersUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PropositionsUpsertWithWhereUniqueWithoutElectionInput = {
    where: PropositionsWhereUniqueInput
    update: XOR<PropositionsUpdateWithoutElectionInput, PropositionsUncheckedUpdateWithoutElectionInput>
    create: XOR<PropositionsCreateWithoutElectionInput, PropositionsUncheckedCreateWithoutElectionInput>
  }

  export type PropositionsUpdateWithWhereUniqueWithoutElectionInput = {
    where: PropositionsWhereUniqueInput
    data: XOR<PropositionsUpdateWithoutElectionInput, PropositionsUncheckedUpdateWithoutElectionInput>
  }

  export type PropositionsUpdateManyWithWhereWithoutElectionInput = {
    where: PropositionsScalarWhereInput
    data: XOR<PropositionsUpdateManyMutationInput, PropositionsUncheckedUpdateManyWithoutElectionInput>
  }

  export type PropositionsScalarWhereInput = {
    AND?: PropositionsScalarWhereInput | PropositionsScalarWhereInput[]
    OR?: PropositionsScalarWhereInput[]
    NOT?: PropositionsScalarWhereInput | PropositionsScalarWhereInput[]
    id?: StringFilter<"Propositions"> | string
    election_id?: StringFilter<"Propositions"> | string
    name?: StringFilter<"Propositions"> | string
    description?: StringNullableFilter<"Propositions"> | string | null
  }

  export type BallotsUpsertWithWhereUniqueWithoutElectionInput = {
    where: BallotsWhereUniqueInput
    update: XOR<BallotsUpdateWithoutElectionInput, BallotsUncheckedUpdateWithoutElectionInput>
    create: XOR<BallotsCreateWithoutElectionInput, BallotsUncheckedCreateWithoutElectionInput>
  }

  export type BallotsUpdateWithWhereUniqueWithoutElectionInput = {
    where: BallotsWhereUniqueInput
    data: XOR<BallotsUpdateWithoutElectionInput, BallotsUncheckedUpdateWithoutElectionInput>
  }

  export type BallotsUpdateManyWithWhereWithoutElectionInput = {
    where: BallotsScalarWhereInput
    data: XOR<BallotsUpdateManyMutationInput, BallotsUncheckedUpdateManyWithoutElectionInput>
  }

  export type BallotsScalarWhereInput = {
    AND?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
    OR?: BallotsScalarWhereInput[]
    NOT?: BallotsScalarWhereInput | BallotsScalarWhereInput[]
    id?: StringFilter<"Ballots"> | string
    election_id?: StringFilter<"Ballots"> | string
    user_id?: StringFilter<"Ballots"> | string
    is_used?: BoolFilter<"Ballots"> | boolean
    used_at?: DateTimeNullableFilter<"Ballots"> | Date | string | null
  }

  export type VotesUpsertWithWhereUniqueWithoutElectionInput = {
    where: VotesWhereUniqueInput
    update: XOR<VotesUpdateWithoutElectionInput, VotesUncheckedUpdateWithoutElectionInput>
    create: XOR<VotesCreateWithoutElectionInput, VotesUncheckedCreateWithoutElectionInput>
  }

  export type VotesUpdateWithWhereUniqueWithoutElectionInput = {
    where: VotesWhereUniqueInput
    data: XOR<VotesUpdateWithoutElectionInput, VotesUncheckedUpdateWithoutElectionInput>
  }

  export type VotesUpdateManyWithWhereWithoutElectionInput = {
    where: VotesScalarWhereInput
    data: XOR<VotesUpdateManyMutationInput, VotesUncheckedUpdateManyWithoutElectionInput>
  }

  export type VotesScalarWhereInput = {
    AND?: VotesScalarWhereInput | VotesScalarWhereInput[]
    OR?: VotesScalarWhereInput[]
    NOT?: VotesScalarWhereInput | VotesScalarWhereInput[]
    id?: StringFilter<"Votes"> | string
    election_id?: StringFilter<"Votes"> | string
    created_at?: DateTimeFilter<"Votes"> | Date | string
    ballot_proof?: StringFilter<"Votes"> | string
    proposition_proof?: StringFilter<"Votes"> | string
    validation_proof?: StringFilter<"Votes"> | string
  }

  export type ElectionsCreateWithoutTeamInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    propositions?: PropositionsCreateNestedManyWithoutElectionInput
    ballots?: BallotsCreateNestedManyWithoutElectionInput
    votes?: VotesCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    propositions?: PropositionsUncheckedCreateNestedManyWithoutElectionInput
    ballots?: BallotsUncheckedCreateNestedManyWithoutElectionInput
    votes?: VotesUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionsCreateOrConnectWithoutTeamInput = {
    where: ElectionsWhereUniqueInput
    create: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput>
  }

  export type ElectionsCreateManyTeamInputEnvelope = {
    data: ElectionsCreateManyTeamInput | ElectionsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMembersCreateWithoutTeamInput = {
    id?: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    user: UsersCreateNestedOneWithoutMember_ofInput
    Invitation?: InvitationsCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersUncheckedCreateWithoutTeamInput = {
    id?: string
    user_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    Invitation?: InvitationsUncheckedCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersCreateOrConnectWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    create: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembersCreateManyTeamInputEnvelope = {
    data: TeamMembersCreateManyTeamInput | TeamMembersCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type InvitationsCreateWithoutTeamInput = {
    id?: string
    state?: $Enums.InviteStates
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    invited_by_member: TeamMembersCreateNestedOneWithoutInvitationInput
  }

  export type InvitationsUncheckedCreateWithoutTeamInput = {
    id?: string
    state?: $Enums.InviteStates
    invited_by_member_id: string
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsCreateOrConnectWithoutTeamInput = {
    where: InvitationsWhereUniqueInput
    create: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput>
  }

  export type InvitationsCreateManyTeamInputEnvelope = {
    data: InvitationsCreateManyTeamInput | InvitationsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ElectionsUpsertWithWhereUniqueWithoutTeamInput = {
    where: ElectionsWhereUniqueInput
    update: XOR<ElectionsUpdateWithoutTeamInput, ElectionsUncheckedUpdateWithoutTeamInput>
    create: XOR<ElectionsCreateWithoutTeamInput, ElectionsUncheckedCreateWithoutTeamInput>
  }

  export type ElectionsUpdateWithWhereUniqueWithoutTeamInput = {
    where: ElectionsWhereUniqueInput
    data: XOR<ElectionsUpdateWithoutTeamInput, ElectionsUncheckedUpdateWithoutTeamInput>
  }

  export type ElectionsUpdateManyWithWhereWithoutTeamInput = {
    where: ElectionsScalarWhereInput
    data: XOR<ElectionsUpdateManyMutationInput, ElectionsUncheckedUpdateManyWithoutTeamInput>
  }

  export type ElectionsScalarWhereInput = {
    AND?: ElectionsScalarWhereInput | ElectionsScalarWhereInput[]
    OR?: ElectionsScalarWhereInput[]
    NOT?: ElectionsScalarWhereInput | ElectionsScalarWhereInput[]
    id?: StringFilter<"Elections"> | string
    team_id?: StringFilter<"Elections"> | string
    name?: StringFilter<"Elections"> | string
    description?: StringNullableFilter<"Elections"> | string | null
    created_at?: DateTimeFilter<"Elections"> | Date | string
    start_at?: DateTimeFilter<"Elections"> | Date | string
    end_at?: DateTimeNullableFilter<"Elections"> | Date | string | null
  }

  export type TeamMembersUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    update: XOR<TeamMembersUpdateWithoutTeamInput, TeamMembersUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembersUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    data: XOR<TeamMembersUpdateWithoutTeamInput, TeamMembersUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMembersUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMembersScalarWhereInput
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamMembersScalarWhereInput = {
    AND?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
    OR?: TeamMembersScalarWhereInput[]
    NOT?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
    id?: StringFilter<"TeamMembers"> | string
    team_id?: StringFilter<"TeamMembers"> | string
    user_id?: StringFilter<"TeamMembers"> | string
    is_admin?: BoolFilter<"TeamMembers"> | boolean
    created_at?: DateTimeFilter<"TeamMembers"> | Date | string
    updated_at?: DateTimeNullableFilter<"TeamMembers"> | Date | string | null
  }

  export type InvitationsUpsertWithWhereUniqueWithoutTeamInput = {
    where: InvitationsWhereUniqueInput
    update: XOR<InvitationsUpdateWithoutTeamInput, InvitationsUncheckedUpdateWithoutTeamInput>
    create: XOR<InvitationsCreateWithoutTeamInput, InvitationsUncheckedCreateWithoutTeamInput>
  }

  export type InvitationsUpdateWithWhereUniqueWithoutTeamInput = {
    where: InvitationsWhereUniqueInput
    data: XOR<InvitationsUpdateWithoutTeamInput, InvitationsUncheckedUpdateWithoutTeamInput>
  }

  export type InvitationsUpdateManyWithWhereWithoutTeamInput = {
    where: InvitationsScalarWhereInput
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyWithoutTeamInput>
  }

  export type InvitationsScalarWhereInput = {
    AND?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
    OR?: InvitationsScalarWhereInput[]
    NOT?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
    id?: StringFilter<"Invitations"> | string
    team_id?: StringFilter<"Invitations"> | string
    state?: EnumInviteStatesFilter<"Invitations"> | $Enums.InviteStates
    invited_by_member_id?: StringFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    is_admin?: BoolFilter<"Invitations"> | boolean
    created_at?: DateTimeFilter<"Invitations"> | Date | string
    updated_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
  }

  export type TeamsCreateWithoutMembersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsCreateNestedManyWithoutTeamInput
    invitations?: InvitationsCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsUncheckedCreateNestedManyWithoutTeamInput
    invitations?: InvitationsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutMembersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutMember_ofInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    ballots?: BallotsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMember_ofInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    ballots?: BallotsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMember_ofInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMember_ofInput, UsersUncheckedCreateWithoutMember_ofInput>
  }

  export type InvitationsCreateWithoutInvited_by_memberInput = {
    id?: string
    state?: $Enums.InviteStates
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationsUncheckedCreateWithoutInvited_by_memberInput = {
    id?: string
    team_id: string
    state?: $Enums.InviteStates
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsCreateOrConnectWithoutInvited_by_memberInput = {
    where: InvitationsWhereUniqueInput
    create: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput>
  }

  export type InvitationsCreateManyInvited_by_memberInputEnvelope = {
    data: InvitationsCreateManyInvited_by_memberInput | InvitationsCreateManyInvited_by_memberInput[]
    skipDuplicates?: boolean
  }

  export type TeamsUpsertWithoutMembersInput = {
    update: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
  }

  export type TeamsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUncheckedUpdateManyWithoutTeamNestedInput
    invitations?: InvitationsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UsersUpsertWithoutMember_ofInput = {
    update: XOR<UsersUpdateWithoutMember_ofInput, UsersUncheckedUpdateWithoutMember_ofInput>
    create: XOR<UsersCreateWithoutMember_ofInput, UsersUncheckedCreateWithoutMember_ofInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMember_ofInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMember_ofInput, UsersUncheckedUpdateWithoutMember_ofInput>
  }

  export type UsersUpdateWithoutMember_ofInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ballots?: BallotsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMember_ofInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    ballots?: BallotsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvitationsUpsertWithWhereUniqueWithoutInvited_by_memberInput = {
    where: InvitationsWhereUniqueInput
    update: XOR<InvitationsUpdateWithoutInvited_by_memberInput, InvitationsUncheckedUpdateWithoutInvited_by_memberInput>
    create: XOR<InvitationsCreateWithoutInvited_by_memberInput, InvitationsUncheckedCreateWithoutInvited_by_memberInput>
  }

  export type InvitationsUpdateWithWhereUniqueWithoutInvited_by_memberInput = {
    where: InvitationsWhereUniqueInput
    data: XOR<InvitationsUpdateWithoutInvited_by_memberInput, InvitationsUncheckedUpdateWithoutInvited_by_memberInput>
  }

  export type InvitationsUpdateManyWithWhereWithoutInvited_by_memberInput = {
    where: InvitationsScalarWhereInput
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyWithoutInvited_by_memberInput>
  }

  export type TeamsCreateWithoutInvitationsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsCreateNestedManyWithoutTeamInput
    members?: TeamMembersCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string | null
    elections?: ElectionsUncheckedCreateNestedManyWithoutTeamInput
    members?: TeamMembersUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutInvitationsInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutInvitationsInput, TeamsUncheckedCreateWithoutInvitationsInput>
  }

  export type TeamMembersCreateWithoutInvitationInput = {
    id?: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutMember_ofInput
  }

  export type TeamMembersUncheckedCreateWithoutInvitationInput = {
    id?: string
    team_id: string
    user_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type TeamMembersCreateOrConnectWithoutInvitationInput = {
    where: TeamMembersWhereUniqueInput
    create: XOR<TeamMembersCreateWithoutInvitationInput, TeamMembersUncheckedCreateWithoutInvitationInput>
  }

  export type TeamsUpsertWithoutInvitationsInput = {
    update: XOR<TeamsUpdateWithoutInvitationsInput, TeamsUncheckedUpdateWithoutInvitationsInput>
    create: XOR<TeamsCreateWithoutInvitationsInput, TeamsUncheckedCreateWithoutInvitationsInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutInvitationsInput, TeamsUncheckedUpdateWithoutInvitationsInput>
  }

  export type TeamsUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUpdateManyWithoutTeamNestedInput
    members?: TeamMembersUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    elections?: ElectionsUncheckedUpdateManyWithoutTeamNestedInput
    members?: TeamMembersUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamMembersUpsertWithoutInvitationInput = {
    update: XOR<TeamMembersUpdateWithoutInvitationInput, TeamMembersUncheckedUpdateWithoutInvitationInput>
    create: XOR<TeamMembersCreateWithoutInvitationInput, TeamMembersUncheckedCreateWithoutInvitationInput>
    where?: TeamMembersWhereInput
  }

  export type TeamMembersUpdateToOneWithWhereWithoutInvitationInput = {
    where?: TeamMembersWhereInput
    data: XOR<TeamMembersUpdateWithoutInvitationInput, TeamMembersUncheckedUpdateWithoutInvitationInput>
  }

  export type TeamMembersUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutMember_ofNestedInput
  }

  export type TeamMembersUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMembersCreateWithoutUserInput = {
    id?: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutMembersInput
    Invitation?: InvitationsCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersUncheckedCreateWithoutUserInput = {
    id?: string
    team_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
    Invitation?: InvitationsUncheckedCreateNestedManyWithoutInvited_by_memberInput
  }

  export type TeamMembersCreateOrConnectWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    create: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput>
  }

  export type TeamMembersCreateManyUserInputEnvelope = {
    data: TeamMembersCreateManyUserInput | TeamMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BallotsCreateWithoutUserInput = {
    id?: string
    is_used?: boolean
    used_at?: Date | string | null
    election: ElectionsCreateNestedOneWithoutBallotsInput
  }

  export type BallotsUncheckedCreateWithoutUserInput = {
    id?: string
    election_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type BallotsCreateOrConnectWithoutUserInput = {
    where: BallotsWhereUniqueInput
    create: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput>
  }

  export type BallotsCreateManyUserInputEnvelope = {
    data: BallotsCreateManyUserInput | BallotsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    update: XOR<TeamMembersUpdateWithoutUserInput, TeamMembersUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput>
  }

  export type TeamMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    data: XOR<TeamMembersUpdateWithoutUserInput, TeamMembersUncheckedUpdateWithoutUserInput>
  }

  export type TeamMembersUpdateManyWithWhereWithoutUserInput = {
    where: TeamMembersScalarWhereInput
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type BallotsUpsertWithWhereUniqueWithoutUserInput = {
    where: BallotsWhereUniqueInput
    update: XOR<BallotsUpdateWithoutUserInput, BallotsUncheckedUpdateWithoutUserInput>
    create: XOR<BallotsCreateWithoutUserInput, BallotsUncheckedCreateWithoutUserInput>
  }

  export type BallotsUpdateWithWhereUniqueWithoutUserInput = {
    where: BallotsWhereUniqueInput
    data: XOR<BallotsUpdateWithoutUserInput, BallotsUncheckedUpdateWithoutUserInput>
  }

  export type BallotsUpdateManyWithWhereWithoutUserInput = {
    where: BallotsScalarWhereInput
    data: XOR<BallotsUpdateManyMutationInput, BallotsUncheckedUpdateManyWithoutUserInput>
  }

  export type ElectionsCreateWithoutPropositionsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutElectionsInput
    ballots?: BallotsCreateNestedManyWithoutElectionInput
    votes?: VotesCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUncheckedCreateWithoutPropositionsInput = {
    id?: string
    team_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    ballots?: BallotsUncheckedCreateNestedManyWithoutElectionInput
    votes?: VotesUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionsCreateOrConnectWithoutPropositionsInput = {
    where: ElectionsWhereUniqueInput
    create: XOR<ElectionsCreateWithoutPropositionsInput, ElectionsUncheckedCreateWithoutPropositionsInput>
  }

  export type ElectionsUpsertWithoutPropositionsInput = {
    update: XOR<ElectionsUpdateWithoutPropositionsInput, ElectionsUncheckedUpdateWithoutPropositionsInput>
    create: XOR<ElectionsCreateWithoutPropositionsInput, ElectionsUncheckedCreateWithoutPropositionsInput>
    where?: ElectionsWhereInput
  }

  export type ElectionsUpdateToOneWithWhereWithoutPropositionsInput = {
    where?: ElectionsWhereInput
    data: XOR<ElectionsUpdateWithoutPropositionsInput, ElectionsUncheckedUpdateWithoutPropositionsInput>
  }

  export type ElectionsUpdateWithoutPropositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutElectionsNestedInput
    ballots?: BallotsUpdateManyWithoutElectionNestedInput
    votes?: VotesUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateWithoutPropositionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ballots?: BallotsUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VotesUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsCreateWithoutBallotsInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutElectionsInput
    propositions?: PropositionsCreateNestedManyWithoutElectionInput
    votes?: VotesCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUncheckedCreateWithoutBallotsInput = {
    id?: string
    team_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    propositions?: PropositionsUncheckedCreateNestedManyWithoutElectionInput
    votes?: VotesUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionsCreateOrConnectWithoutBallotsInput = {
    where: ElectionsWhereUniqueInput
    create: XOR<ElectionsCreateWithoutBallotsInput, ElectionsUncheckedCreateWithoutBallotsInput>
  }

  export type UsersCreateWithoutBallotsInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    member_of?: TeamMembersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBallotsInput = {
    id?: string
    principal_id: string
    name: string
    email: string
    member_of?: TeamMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBallotsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBallotsInput, UsersUncheckedCreateWithoutBallotsInput>
  }

  export type ElectionsUpsertWithoutBallotsInput = {
    update: XOR<ElectionsUpdateWithoutBallotsInput, ElectionsUncheckedUpdateWithoutBallotsInput>
    create: XOR<ElectionsCreateWithoutBallotsInput, ElectionsUncheckedCreateWithoutBallotsInput>
    where?: ElectionsWhereInput
  }

  export type ElectionsUpdateToOneWithWhereWithoutBallotsInput = {
    where?: ElectionsWhereInput
    data: XOR<ElectionsUpdateWithoutBallotsInput, ElectionsUncheckedUpdateWithoutBallotsInput>
  }

  export type ElectionsUpdateWithoutBallotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutElectionsNestedInput
    propositions?: PropositionsUpdateManyWithoutElectionNestedInput
    votes?: VotesUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateWithoutBallotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propositions?: PropositionsUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VotesUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type UsersUpsertWithoutBallotsInput = {
    update: XOR<UsersUpdateWithoutBallotsInput, UsersUncheckedUpdateWithoutBallotsInput>
    create: XOR<UsersCreateWithoutBallotsInput, UsersUncheckedCreateWithoutBallotsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBallotsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBallotsInput, UsersUncheckedUpdateWithoutBallotsInput>
  }

  export type UsersUpdateWithoutBallotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    member_of?: TeamMembersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBallotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    principal_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    member_of?: TeamMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ElectionsCreateWithoutVotesInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    team: TeamsCreateNestedOneWithoutElectionsInput
    propositions?: PropositionsCreateNestedManyWithoutElectionInput
    ballots?: BallotsCreateNestedManyWithoutElectionInput
  }

  export type ElectionsUncheckedCreateWithoutVotesInput = {
    id?: string
    team_id: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
    propositions?: PropositionsUncheckedCreateNestedManyWithoutElectionInput
    ballots?: BallotsUncheckedCreateNestedManyWithoutElectionInput
  }

  export type ElectionsCreateOrConnectWithoutVotesInput = {
    where: ElectionsWhereUniqueInput
    create: XOR<ElectionsCreateWithoutVotesInput, ElectionsUncheckedCreateWithoutVotesInput>
  }

  export type ElectionsUpsertWithoutVotesInput = {
    update: XOR<ElectionsUpdateWithoutVotesInput, ElectionsUncheckedUpdateWithoutVotesInput>
    create: XOR<ElectionsCreateWithoutVotesInput, ElectionsUncheckedCreateWithoutVotesInput>
    where?: ElectionsWhereInput
  }

  export type ElectionsUpdateToOneWithWhereWithoutVotesInput = {
    where?: ElectionsWhereInput
    data: XOR<ElectionsUpdateWithoutVotesInput, ElectionsUncheckedUpdateWithoutVotesInput>
  }

  export type ElectionsUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutElectionsNestedInput
    propositions?: PropositionsUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propositions?: PropositionsUncheckedUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type PropositionsCreateManyElectionInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type BallotsCreateManyElectionInput = {
    id?: string
    user_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type VotesCreateManyElectionInput = {
    id?: string
    created_at?: Date | string
    ballot_proof: string
    proposition_proof: string
    validation_proof: string
  }

  export type PropositionsUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropositionsUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PropositionsUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BallotsUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutBallotsNestedInput
  }

  export type BallotsUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BallotsUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VotesUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
  }

  export type VotesUncheckedUpdateWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
  }

  export type VotesUncheckedUpdateManyWithoutElectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ballot_proof?: StringFieldUpdateOperationsInput | string
    proposition_proof?: StringFieldUpdateOperationsInput | string
    validation_proof?: StringFieldUpdateOperationsInput | string
  }

  export type ElectionsCreateManyTeamInput = {
    id?: string
    name: string
    description?: string | null
    created_at?: Date | string
    start_at: Date | string
    end_at?: Date | string | null
  }

  export type TeamMembersCreateManyTeamInput = {
    id?: string
    user_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsCreateManyTeamInput = {
    id?: string
    state?: $Enums.InviteStates
    invited_by_member_id: string
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type ElectionsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propositions?: PropositionsUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUpdateManyWithoutElectionNestedInput
    votes?: VotesUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    propositions?: PropositionsUncheckedUpdateManyWithoutElectionNestedInput
    ballots?: BallotsUncheckedUpdateManyWithoutElectionNestedInput
    votes?: VotesUncheckedUpdateManyWithoutElectionNestedInput
  }

  export type ElectionsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    start_at?: DateTimeFieldUpdateOperationsInput | Date | string
    end_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMembersUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutMember_ofNestedInput
    Invitation?: InvitationsUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Invitation?: InvitationsUncheckedUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    invited_by_member?: TeamMembersUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    invited_by_member_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    invited_by_member_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsCreateManyInvited_by_memberInput = {
    id?: string
    team_id: string
    state?: $Enums.InviteStates
    email: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type InvitationsUpdateWithoutInvited_by_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationsUncheckedUpdateWithoutInvited_by_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InvitationsUncheckedUpdateManyWithoutInvited_by_memberInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    state?: EnumInviteStatesFieldUpdateOperationsInput | $Enums.InviteStates
    email?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TeamMembersCreateManyUserInput = {
    id?: string
    team_id: string
    is_admin?: boolean
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BallotsCreateManyUserInput = {
    id?: string
    election_id: string
    is_used?: boolean
    used_at?: Date | string | null
  }

  export type TeamMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    team?: TeamsUpdateOneRequiredWithoutMembersNestedInput
    Invitation?: InvitationsUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Invitation?: InvitationsUncheckedUpdateManyWithoutInvited_by_memberNestedInput
  }

  export type TeamMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BallotsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    election?: ElectionsUpdateOneRequiredWithoutBallotsNestedInput
  }

  export type BallotsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BallotsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    election_id?: StringFieldUpdateOperationsInput | string
    is_used?: BoolFieldUpdateOperationsInput | boolean
    used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ElectionsCountOutputTypeDefaultArgs instead
     */
    export type ElectionsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ElectionsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamsCountOutputTypeDefaultArgs instead
     */
    export type TeamsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMembersCountOutputTypeDefaultArgs instead
     */
    export type TeamMembersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMembersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ElectionsDefaultArgs instead
     */
    export type ElectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ElectionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamsDefaultArgs instead
     */
    export type TeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMembersDefaultArgs instead
     */
    export type TeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvitationsDefaultArgs instead
     */
    export type InvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvitationsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PropositionsDefaultArgs instead
     */
    export type PropositionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PropositionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BallotsDefaultArgs instead
     */
    export type BallotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BallotsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VotesDefaultArgs instead
     */
    export type VotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VotesDefaultArgs<ExtArgs>

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