/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  float8: { input: number; output: number };
  json: { input: string; output: string };
  timestamptz: { input: string; output: string };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "darts_positions" */
export type Darts_Positions = {
  id: Scalars['Int']['output'];
  multiplier: Scalars['Int']['output'];
  position_code: Scalars['String']['output'];
  score: Scalars['Int']['output'];
  sector: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  throws: Array<Throws>;
  /** An aggregate relationship */
  throws_aggregate: Throws_Aggregate;
};

/** columns and relationships of "darts_positions" */
export type Darts_PositionsThrowsArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

/** columns and relationships of "darts_positions" */
export type Darts_PositionsThrows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

/** aggregated selection of "darts_positions" */
export type Darts_Positions_Aggregate = {
  aggregate: Maybe<Darts_Positions_Aggregate_Fields>;
  nodes: Array<Darts_Positions>;
};

/** aggregate fields of "darts_positions" */
export type Darts_Positions_Aggregate_Fields = {
  avg: Maybe<Darts_Positions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Darts_Positions_Max_Fields>;
  min: Maybe<Darts_Positions_Min_Fields>;
  stddev: Maybe<Darts_Positions_Stddev_Fields>;
  stddev_pop: Maybe<Darts_Positions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Darts_Positions_Stddev_Samp_Fields>;
  sum: Maybe<Darts_Positions_Sum_Fields>;
  var_pop: Maybe<Darts_Positions_Var_Pop_Fields>;
  var_samp: Maybe<Darts_Positions_Var_Samp_Fields>;
  variance: Maybe<Darts_Positions_Variance_Fields>;
};

/** aggregate fields of "darts_positions" */
export type Darts_Positions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Darts_Positions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Darts_Positions_Avg_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "darts_positions". All fields are combined with a logical 'AND'. */
export type Darts_Positions_Bool_Exp = {
  _and?: InputMaybe<Array<Darts_Positions_Bool_Exp>>;
  _not?: InputMaybe<Darts_Positions_Bool_Exp>;
  _or?: InputMaybe<Array<Darts_Positions_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  multiplier?: InputMaybe<Int_Comparison_Exp>;
  position_code?: InputMaybe<String_Comparison_Exp>;
  score?: InputMaybe<Int_Comparison_Exp>;
  sector?: InputMaybe<String_Comparison_Exp>;
  throws?: InputMaybe<Throws_Bool_Exp>;
  throws_aggregate?: InputMaybe<Throws_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "darts_positions" */
export type Darts_Positions_Constraint =
  /** unique or primary key constraint on columns "id" */
  'dart_positions_pkey';

/** input type for incrementing numeric columns in table "darts_positions" */
export type Darts_Positions_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  multiplier?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "darts_positions" */
export type Darts_Positions_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  multiplier?: InputMaybe<Scalars['Int']['input']>;
  position_code?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
  throws?: InputMaybe<Throws_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Darts_Positions_Max_Fields = {
  id: Maybe<Scalars['Int']['output']>;
  multiplier: Maybe<Scalars['Int']['output']>;
  position_code: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['Int']['output']>;
  sector: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Darts_Positions_Min_Fields = {
  id: Maybe<Scalars['Int']['output']>;
  multiplier: Maybe<Scalars['Int']['output']>;
  position_code: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['Int']['output']>;
  sector: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "darts_positions" */
export type Darts_Positions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Darts_Positions>;
};

/** input type for inserting object relation for remote table "darts_positions" */
export type Darts_Positions_Obj_Rel_Insert_Input = {
  data: Darts_Positions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Darts_Positions_On_Conflict>;
};

/** on_conflict condition type for table "darts_positions" */
export type Darts_Positions_On_Conflict = {
  constraint: Darts_Positions_Constraint;
  update_columns?: Array<Darts_Positions_Update_Column>;
  where?: InputMaybe<Darts_Positions_Bool_Exp>;
};

/** Ordering options when selecting data from "darts_positions". */
export type Darts_Positions_Order_By = {
  id?: InputMaybe<Order_By>;
  multiplier?: InputMaybe<Order_By>;
  position_code?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  sector?: InputMaybe<Order_By>;
  throws_aggregate?: InputMaybe<Throws_Aggregate_Order_By>;
};

/** primary key columns input for table: darts_positions */
export type Darts_Positions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "darts_positions" */
export type Darts_Positions_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'multiplier'
  /** column name */
  | 'position_code'
  /** column name */
  | 'score'
  /** column name */
  | 'sector';

/** input type for updating data in table "darts_positions" */
export type Darts_Positions_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  multiplier?: InputMaybe<Scalars['Int']['input']>;
  position_code?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Darts_Positions_Stddev_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Darts_Positions_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Darts_Positions_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "darts_positions" */
export type Darts_Positions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Darts_Positions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Darts_Positions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  multiplier?: InputMaybe<Scalars['Int']['input']>;
  position_code?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  sector?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Darts_Positions_Sum_Fields = {
  id: Maybe<Scalars['Int']['output']>;
  multiplier: Maybe<Scalars['Int']['output']>;
  score: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "darts_positions" */
export type Darts_Positions_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'multiplier'
  /** column name */
  | 'position_code'
  /** column name */
  | 'score'
  /** column name */
  | 'sector';

export type Darts_Positions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Darts_Positions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Darts_Positions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Darts_Positions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Darts_Positions_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Darts_Positions_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Darts_Positions_Variance_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  multiplier: Maybe<Scalars['Float']['output']>;
  score: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "game_sessions" */
export type Game_Sessions = {
  created_at: Scalars['timestamptz']['output'];
  game_type_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  played_at: Scalars['timestamptz']['output'];
  rate_80: Scalars['float8']['output'];
  rate_100: Scalars['float8']['output'];
  score_summary: Scalars['json']['output'];
  /** An array relationship */
  throws: Array<Throws>;
  /** An aggregate relationship */
  throws_aggregate: Throws_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid']['output'];
};

/** columns and relationships of "game_sessions" */
export type Game_SessionsScore_SummaryArgs = {
  path: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "game_sessions" */
export type Game_SessionsThrowsArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

/** columns and relationships of "game_sessions" */
export type Game_SessionsThrows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

/** aggregated selection of "game_sessions" */
export type Game_Sessions_Aggregate = {
  aggregate: Maybe<Game_Sessions_Aggregate_Fields>;
  nodes: Array<Game_Sessions>;
};

export type Game_Sessions_Aggregate_Bool_Exp = {
  avg?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp_Var_Samp>;
};

export type Game_Sessions_Aggregate_Bool_Exp_Avg = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Corr = {
  arguments: Game_Sessions_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Game_Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Game_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Game_Sessions_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Game_Sessions_Aggregate_Bool_Exp_Max = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Min = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Sum = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

export type Game_Sessions_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Game_Sessions_Bool_Exp>;
  predicate: Float8_Comparison_Exp;
};

/** aggregate fields of "game_sessions" */
export type Game_Sessions_Aggregate_Fields = {
  avg: Maybe<Game_Sessions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Game_Sessions_Max_Fields>;
  min: Maybe<Game_Sessions_Min_Fields>;
  stddev: Maybe<Game_Sessions_Stddev_Fields>;
  stddev_pop: Maybe<Game_Sessions_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Game_Sessions_Stddev_Samp_Fields>;
  sum: Maybe<Game_Sessions_Sum_Fields>;
  var_pop: Maybe<Game_Sessions_Var_Pop_Fields>;
  var_samp: Maybe<Game_Sessions_Var_Samp_Fields>;
  variance: Maybe<Game_Sessions_Variance_Fields>;
};

/** aggregate fields of "game_sessions" */
export type Game_Sessions_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Game_Sessions_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "game_sessions" */
export type Game_Sessions_Aggregate_Order_By = {
  avg?: InputMaybe<Game_Sessions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Game_Sessions_Max_Order_By>;
  min?: InputMaybe<Game_Sessions_Min_Order_By>;
  stddev?: InputMaybe<Game_Sessions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Game_Sessions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Game_Sessions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Game_Sessions_Sum_Order_By>;
  var_pop?: InputMaybe<Game_Sessions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Game_Sessions_Var_Samp_Order_By>;
  variance?: InputMaybe<Game_Sessions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_sessions" */
export type Game_Sessions_Arr_Rel_Insert_Input = {
  data: Array<Game_Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Game_Sessions_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Sessions_Avg_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "game_sessions" */
export type Game_Sessions_Avg_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_sessions". All fields are combined with a logical 'AND'. */
export type Game_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Sessions_Bool_Exp>>;
  _not?: InputMaybe<Game_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Sessions_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_type_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  played_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  rate_80?: InputMaybe<Float8_Comparison_Exp>;
  rate_100?: InputMaybe<Float8_Comparison_Exp>;
  score_summary?: InputMaybe<Json_Comparison_Exp>;
  throws?: InputMaybe<Throws_Bool_Exp>;
  throws_aggregate?: InputMaybe<Throws_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_sessions" */
export type Game_Sessions_Constraint =
  /** unique or primary key constraint on columns "game_type_id" */
  | 'game_sessions_game_type_id_key'
  /** unique or primary key constraint on columns "id" */
  | 'game_sessions_pkey';

/** input type for incrementing numeric columns in table "game_sessions" */
export type Game_Sessions_Inc_Input = {
  game_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rate_80?: InputMaybe<Scalars['float8']['input']>;
  rate_100?: InputMaybe<Scalars['float8']['input']>;
};

/** input type for inserting data into table "game_sessions" */
export type Game_Sessions_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  played_at?: InputMaybe<Scalars['timestamptz']['input']>;
  rate_80?: InputMaybe<Scalars['float8']['input']>;
  rate_100?: InputMaybe<Scalars['float8']['input']>;
  score_summary?: InputMaybe<Scalars['json']['input']>;
  throws?: InputMaybe<Throws_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Game_Sessions_Max_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  game_type_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  played_at: Maybe<Scalars['timestamptz']['output']>;
  rate_80: Maybe<Scalars['float8']['output']>;
  rate_100: Maybe<Scalars['float8']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "game_sessions" */
export type Game_Sessions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  played_at?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Sessions_Min_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  game_type_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  played_at: Maybe<Scalars['timestamptz']['output']>;
  rate_80: Maybe<Scalars['float8']['output']>;
  rate_100: Maybe<Scalars['float8']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "game_sessions" */
export type Game_Sessions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  played_at?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "game_sessions" */
export type Game_Sessions_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Game_Sessions>;
};

/** input type for inserting object relation for remote table "game_sessions" */
export type Game_Sessions_Obj_Rel_Insert_Input = {
  data: Game_Sessions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Game_Sessions_On_Conflict>;
};

/** on_conflict condition type for table "game_sessions" */
export type Game_Sessions_On_Conflict = {
  constraint: Game_Sessions_Constraint;
  update_columns?: Array<Game_Sessions_Update_Column>;
  where?: InputMaybe<Game_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "game_sessions". */
export type Game_Sessions_Order_By = {
  created_at?: InputMaybe<Order_By>;
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  played_at?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
  score_summary?: InputMaybe<Order_By>;
  throws_aggregate?: InputMaybe<Throws_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_sessions */
export type Game_Sessions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "game_sessions" */
export type Game_Sessions_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'game_type_id'
  /** column name */
  | 'id'
  /** column name */
  | 'played_at'
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100'
  /** column name */
  | 'score_summary'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** select "game_sessions_aggregate_bool_exp_avg_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Avg_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_corr_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Corr_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_max_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Max_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_min_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Min_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_sum_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Sum_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** select "game_sessions_aggregate_bool_exp_var_samp_arguments_columns" columns of table "game_sessions" */
export type Game_Sessions_Select_Column_Game_Sessions_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns =
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100';

/** input type for updating data in table "game_sessions" */
export type Game_Sessions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  played_at?: InputMaybe<Scalars['timestamptz']['input']>;
  rate_80?: InputMaybe<Scalars['float8']['input']>;
  rate_100?: InputMaybe<Scalars['float8']['input']>;
  score_summary?: InputMaybe<Scalars['json']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Game_Sessions_Stddev_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "game_sessions" */
export type Game_Sessions_Stddev_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Sessions_Stddev_Pop_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "game_sessions" */
export type Game_Sessions_Stddev_Pop_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Sessions_Stddev_Samp_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "game_sessions" */
export type Game_Sessions_Stddev_Samp_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "game_sessions" */
export type Game_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Sessions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_type_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  played_at?: InputMaybe<Scalars['timestamptz']['input']>;
  rate_80?: InputMaybe<Scalars['float8']['input']>;
  rate_100?: InputMaybe<Scalars['float8']['input']>;
  score_summary?: InputMaybe<Scalars['json']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Game_Sessions_Sum_Fields = {
  game_type_id: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  rate_80: Maybe<Scalars['float8']['output']>;
  rate_100: Maybe<Scalars['float8']['output']>;
};

/** order by sum() on columns of table "game_sessions" */
export type Game_Sessions_Sum_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** update columns of table "game_sessions" */
export type Game_Sessions_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'game_type_id'
  /** column name */
  | 'id'
  /** column name */
  | 'played_at'
  /** column name */
  | 'rate_80'
  /** column name */
  | 'rate_100'
  /** column name */
  | 'score_summary'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

export type Game_Sessions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Game_Sessions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Game_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Game_Sessions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Game_Sessions_Var_Pop_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "game_sessions" */
export type Game_Sessions_Var_Pop_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Sessions_Var_Samp_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "game_sessions" */
export type Game_Sessions_Var_Samp_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Sessions_Variance_Fields = {
  game_type_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  rate_80: Maybe<Scalars['Float']['output']>;
  rate_100: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "game_sessions" */
export type Game_Sessions_Variance_Order_By = {
  game_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rate_80?: InputMaybe<Order_By>;
  rate_100?: InputMaybe<Order_By>;
};

/** columns and relationships of "game_types" */
export type Game_Types = {
  created_at: Scalars['timestamptz']['output'];
  game_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

/** aggregated selection of "game_types" */
export type Game_Types_Aggregate = {
  aggregate: Maybe<Game_Types_Aggregate_Fields>;
  nodes: Array<Game_Types>;
};

/** aggregate fields of "game_types" */
export type Game_Types_Aggregate_Fields = {
  avg: Maybe<Game_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Game_Types_Max_Fields>;
  min: Maybe<Game_Types_Min_Fields>;
  stddev: Maybe<Game_Types_Stddev_Fields>;
  stddev_pop: Maybe<Game_Types_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Game_Types_Stddev_Samp_Fields>;
  sum: Maybe<Game_Types_Sum_Fields>;
  var_pop: Maybe<Game_Types_Var_Pop_Fields>;
  var_samp: Maybe<Game_Types_Var_Samp_Fields>;
  variance: Maybe<Game_Types_Variance_Fields>;
};

/** aggregate fields of "game_types" */
export type Game_Types_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Game_Types_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Game_Types_Avg_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "game_types". All fields are combined with a logical 'AND'. */
export type Game_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Game_Types_Bool_Exp>>;
  _not?: InputMaybe<Game_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Game_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  game_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_types" */
export type Game_Types_Constraint =
  /** unique or primary key constraint on columns "game_name" */
  | 'game_types_game_name_key'
  /** unique or primary key constraint on columns "id" */
  | 'game_types_pkey';

/** input type for incrementing numeric columns in table "game_types" */
export type Game_Types_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "game_types" */
export type Game_Types_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Game_Types_Max_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  game_name: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Game_Types_Min_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  game_name: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "game_types" */
export type Game_Types_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Game_Types>;
};

/** on_conflict condition type for table "game_types" */
export type Game_Types_On_Conflict = {
  constraint: Game_Types_Constraint;
  update_columns?: Array<Game_Types_Update_Column>;
  where?: InputMaybe<Game_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "game_types". */
export type Game_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  game_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: game_types */
export type Game_Types_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "game_types" */
export type Game_Types_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'game_name'
  /** column name */
  | 'id';

/** input type for updating data in table "game_types" */
export type Game_Types_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Game_Types_Stddev_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Game_Types_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Game_Types_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "game_types" */
export type Game_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Game_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Game_Types_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  game_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Game_Types_Sum_Fields = {
  id: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "game_types" */
export type Game_Types_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'game_name'
  /** column name */
  | 'id';

export type Game_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Game_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Game_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Game_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Game_Types_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Game_Types_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Game_Types_Variance_Fields = {
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "darts_positions" */
  delete_darts_positions: Maybe<Darts_Positions_Mutation_Response>;
  /** delete single row from the table: "darts_positions" */
  delete_darts_positions_by_pk: Maybe<Darts_Positions>;
  /** delete data from the table: "game_sessions" */
  delete_game_sessions: Maybe<Game_Sessions_Mutation_Response>;
  /** delete single row from the table: "game_sessions" */
  delete_game_sessions_by_pk: Maybe<Game_Sessions>;
  /** delete data from the table: "game_types" */
  delete_game_types: Maybe<Game_Types_Mutation_Response>;
  /** delete single row from the table: "game_types" */
  delete_game_types_by_pk: Maybe<Game_Types>;
  /** delete data from the table: "throws" */
  delete_throws: Maybe<Throws_Mutation_Response>;
  /** delete single row from the table: "throws" */
  delete_throws_by_pk: Maybe<Throws>;
  /** delete data from the table: "users" */
  delete_users: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** insert data into the table: "darts_positions" */
  insert_darts_positions: Maybe<Darts_Positions_Mutation_Response>;
  /** insert a single row into the table: "darts_positions" */
  insert_darts_positions_one: Maybe<Darts_Positions>;
  /** insert data into the table: "game_sessions" */
  insert_game_sessions: Maybe<Game_Sessions_Mutation_Response>;
  /** insert a single row into the table: "game_sessions" */
  insert_game_sessions_one: Maybe<Game_Sessions>;
  /** insert data into the table: "game_types" */
  insert_game_types: Maybe<Game_Types_Mutation_Response>;
  /** insert a single row into the table: "game_types" */
  insert_game_types_one: Maybe<Game_Types>;
  /** insert data into the table: "throws" */
  insert_throws: Maybe<Throws_Mutation_Response>;
  /** insert a single row into the table: "throws" */
  insert_throws_one: Maybe<Throws>;
  /** insert data into the table: "users" */
  insert_users: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** update data of the table: "darts_positions" */
  update_darts_positions: Maybe<Darts_Positions_Mutation_Response>;
  /** update single row of the table: "darts_positions" */
  update_darts_positions_by_pk: Maybe<Darts_Positions>;
  /** update multiples rows of table: "darts_positions" */
  update_darts_positions_many: Maybe<
    Array<Maybe<Darts_Positions_Mutation_Response>>
  >;
  /** update data of the table: "game_sessions" */
  update_game_sessions: Maybe<Game_Sessions_Mutation_Response>;
  /** update single row of the table: "game_sessions" */
  update_game_sessions_by_pk: Maybe<Game_Sessions>;
  /** update multiples rows of table: "game_sessions" */
  update_game_sessions_many: Maybe<
    Array<Maybe<Game_Sessions_Mutation_Response>>
  >;
  /** update data of the table: "game_types" */
  update_game_types: Maybe<Game_Types_Mutation_Response>;
  /** update single row of the table: "game_types" */
  update_game_types_by_pk: Maybe<Game_Types>;
  /** update multiples rows of table: "game_types" */
  update_game_types_many: Maybe<Array<Maybe<Game_Types_Mutation_Response>>>;
  /** update data of the table: "throws" */
  update_throws: Maybe<Throws_Mutation_Response>;
  /** update single row of the table: "throws" */
  update_throws_by_pk: Maybe<Throws>;
  /** update multiples rows of table: "throws" */
  update_throws_many: Maybe<Array<Maybe<Throws_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Darts_PositionsArgs = {
  where: Darts_Positions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Darts_Positions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Game_SessionsArgs = {
  where: Game_Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Sessions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_Game_TypesArgs = {
  where: Game_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_ThrowsArgs = {
  where: Throws_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Throws_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** mutation root */
export type Mutation_RootInsert_Darts_PositionsArgs = {
  objects: Array<Darts_Positions_Insert_Input>;
  on_conflict: InputMaybe<Darts_Positions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Darts_Positions_OneArgs = {
  object: Darts_Positions_Insert_Input;
  on_conflict: InputMaybe<Darts_Positions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_SessionsArgs = {
  objects: Array<Game_Sessions_Insert_Input>;
  on_conflict: InputMaybe<Game_Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Sessions_OneArgs = {
  object: Game_Sessions_Insert_Input;
  on_conflict: InputMaybe<Game_Sessions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_TypesArgs = {
  objects: Array<Game_Types_Insert_Input>;
  on_conflict: InputMaybe<Game_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Types_OneArgs = {
  object: Game_Types_Insert_Input;
  on_conflict: InputMaybe<Game_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ThrowsArgs = {
  objects: Array<Throws_Insert_Input>;
  on_conflict: InputMaybe<Throws_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Throws_OneArgs = {
  object: Throws_Insert_Input;
  on_conflict: InputMaybe<Throws_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Darts_PositionsArgs = {
  _inc: InputMaybe<Darts_Positions_Inc_Input>;
  _set: InputMaybe<Darts_Positions_Set_Input>;
  where: Darts_Positions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Darts_Positions_By_PkArgs = {
  _inc: InputMaybe<Darts_Positions_Inc_Input>;
  _set: InputMaybe<Darts_Positions_Set_Input>;
  pk_columns: Darts_Positions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Darts_Positions_ManyArgs = {
  updates: Array<Darts_Positions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Game_SessionsArgs = {
  _inc: InputMaybe<Game_Sessions_Inc_Input>;
  _set: InputMaybe<Game_Sessions_Set_Input>;
  where: Game_Sessions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Sessions_By_PkArgs = {
  _inc: InputMaybe<Game_Sessions_Inc_Input>;
  _set: InputMaybe<Game_Sessions_Set_Input>;
  pk_columns: Game_Sessions_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Sessions_ManyArgs = {
  updates: Array<Game_Sessions_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Game_TypesArgs = {
  _inc: InputMaybe<Game_Types_Inc_Input>;
  _set: InputMaybe<Game_Types_Set_Input>;
  where: Game_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Types_By_PkArgs = {
  _inc: InputMaybe<Game_Types_Inc_Input>;
  _set: InputMaybe<Game_Types_Set_Input>;
  pk_columns: Game_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Types_ManyArgs = {
  updates: Array<Game_Types_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ThrowsArgs = {
  _inc: InputMaybe<Throws_Inc_Input>;
  _set: InputMaybe<Throws_Set_Input>;
  where: Throws_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Throws_By_PkArgs = {
  _inc: InputMaybe<Throws_Inc_Input>;
  _set: InputMaybe<Throws_Set_Input>;
  pk_columns: Throws_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Throws_ManyArgs = {
  updates: Array<Throws_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  /** fetch data from the table: "darts_positions" */
  darts_positions: Array<Darts_Positions>;
  /** fetch aggregated fields from the table: "darts_positions" */
  darts_positions_aggregate: Darts_Positions_Aggregate;
  /** fetch data from the table: "darts_positions" using primary key columns */
  darts_positions_by_pk: Maybe<Darts_Positions>;
  /** An array relationship */
  game_sessions: Array<Game_Sessions>;
  /** An aggregate relationship */
  game_sessions_aggregate: Game_Sessions_Aggregate;
  /** fetch data from the table: "game_sessions" using primary key columns */
  game_sessions_by_pk: Maybe<Game_Sessions>;
  /** fetch data from the table: "game_types" */
  game_types: Array<Game_Types>;
  /** fetch aggregated fields from the table: "game_types" */
  game_types_aggregate: Game_Types_Aggregate;
  /** fetch data from the table: "game_types" using primary key columns */
  game_types_by_pk: Maybe<Game_Types>;
  /** An array relationship */
  throws: Array<Throws>;
  /** An aggregate relationship */
  throws_aggregate: Throws_Aggregate;
  /** fetch data from the table: "throws" using primary key columns */
  throws_by_pk: Maybe<Throws>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
};

export type Query_RootDarts_PositionsArgs = {
  distinct_on: InputMaybe<Array<Darts_Positions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Darts_Positions_Order_By>>;
  where: InputMaybe<Darts_Positions_Bool_Exp>;
};

export type Query_RootDarts_Positions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Darts_Positions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Darts_Positions_Order_By>>;
  where: InputMaybe<Darts_Positions_Bool_Exp>;
};

export type Query_RootDarts_Positions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootGame_SessionsArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

export type Query_RootGame_Sessions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

export type Query_RootGame_Sessions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootGame_TypesArgs = {
  distinct_on: InputMaybe<Array<Game_Types_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Types_Order_By>>;
  where: InputMaybe<Game_Types_Bool_Exp>;
};

export type Query_RootGame_Types_AggregateArgs = {
  distinct_on: InputMaybe<Array<Game_Types_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Types_Order_By>>;
  where: InputMaybe<Game_Types_Bool_Exp>;
};

export type Query_RootGame_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootThrowsArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

export type Query_RootThrows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

export type Query_RootThrows_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Query_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "darts_positions" */
  darts_positions: Array<Darts_Positions>;
  /** fetch aggregated fields from the table: "darts_positions" */
  darts_positions_aggregate: Darts_Positions_Aggregate;
  /** fetch data from the table: "darts_positions" using primary key columns */
  darts_positions_by_pk: Maybe<Darts_Positions>;
  /** fetch data from the table in a streaming manner: "darts_positions" */
  darts_positions_stream: Array<Darts_Positions>;
  /** An array relationship */
  game_sessions: Array<Game_Sessions>;
  /** An aggregate relationship */
  game_sessions_aggregate: Game_Sessions_Aggregate;
  /** fetch data from the table: "game_sessions" using primary key columns */
  game_sessions_by_pk: Maybe<Game_Sessions>;
  /** fetch data from the table in a streaming manner: "game_sessions" */
  game_sessions_stream: Array<Game_Sessions>;
  /** fetch data from the table: "game_types" */
  game_types: Array<Game_Types>;
  /** fetch aggregated fields from the table: "game_types" */
  game_types_aggregate: Game_Types_Aggregate;
  /** fetch data from the table: "game_types" using primary key columns */
  game_types_by_pk: Maybe<Game_Types>;
  /** fetch data from the table in a streaming manner: "game_types" */
  game_types_stream: Array<Game_Types>;
  /** An array relationship */
  throws: Array<Throws>;
  /** An aggregate relationship */
  throws_aggregate: Throws_Aggregate;
  /** fetch data from the table: "throws" using primary key columns */
  throws_by_pk: Maybe<Throws>;
  /** fetch data from the table in a streaming manner: "throws" */
  throws_stream: Array<Throws>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootDarts_PositionsArgs = {
  distinct_on: InputMaybe<Array<Darts_Positions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Darts_Positions_Order_By>>;
  where: InputMaybe<Darts_Positions_Bool_Exp>;
};

export type Subscription_RootDarts_Positions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Darts_Positions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Darts_Positions_Order_By>>;
  where: InputMaybe<Darts_Positions_Bool_Exp>;
};

export type Subscription_RootDarts_Positions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootDarts_Positions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Darts_Positions_Stream_Cursor_Input>>;
  where: InputMaybe<Darts_Positions_Bool_Exp>;
};

export type Subscription_RootGame_SessionsArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

export type Subscription_RootGame_Sessions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

export type Subscription_RootGame_Sessions_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootGame_Sessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Sessions_Stream_Cursor_Input>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

export type Subscription_RootGame_TypesArgs = {
  distinct_on: InputMaybe<Array<Game_Types_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Types_Order_By>>;
  where: InputMaybe<Game_Types_Bool_Exp>;
};

export type Subscription_RootGame_Types_AggregateArgs = {
  distinct_on: InputMaybe<Array<Game_Types_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Types_Order_By>>;
  where: InputMaybe<Game_Types_Bool_Exp>;
};

export type Subscription_RootGame_Types_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootGame_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Game_Types_Stream_Cursor_Input>>;
  where: InputMaybe<Game_Types_Bool_Exp>;
};

export type Subscription_RootThrowsArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

export type Subscription_RootThrows_AggregateArgs = {
  distinct_on: InputMaybe<Array<Throws_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Throws_Order_By>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

export type Subscription_RootThrows_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootThrows_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Throws_Stream_Cursor_Input>>;
  where: InputMaybe<Throws_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on: InputMaybe<Array<Users_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Users_Order_By>>;
  where: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "throws" */
export type Throws = {
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  darts_position: Maybe<Darts_Positions>;
  /** An object relationship */
  game_session: Game_Sessions;
  id: Scalars['Int']['output'];
  position_id: Maybe<Scalars['Int']['output']>;
  session_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "throws" */
export type Throws_Aggregate = {
  aggregate: Maybe<Throws_Aggregate_Fields>;
  nodes: Array<Throws>;
};

export type Throws_Aggregate_Bool_Exp = {
  count?: InputMaybe<Throws_Aggregate_Bool_Exp_Count>;
};

export type Throws_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Throws_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Throws_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "throws" */
export type Throws_Aggregate_Fields = {
  avg: Maybe<Throws_Avg_Fields>;
  count: Scalars['Int']['output'];
  max: Maybe<Throws_Max_Fields>;
  min: Maybe<Throws_Min_Fields>;
  stddev: Maybe<Throws_Stddev_Fields>;
  stddev_pop: Maybe<Throws_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Throws_Stddev_Samp_Fields>;
  sum: Maybe<Throws_Sum_Fields>;
  var_pop: Maybe<Throws_Var_Pop_Fields>;
  var_samp: Maybe<Throws_Var_Samp_Fields>;
  variance: Maybe<Throws_Variance_Fields>;
};

/** aggregate fields of "throws" */
export type Throws_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Throws_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "throws" */
export type Throws_Aggregate_Order_By = {
  avg?: InputMaybe<Throws_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Throws_Max_Order_By>;
  min?: InputMaybe<Throws_Min_Order_By>;
  stddev?: InputMaybe<Throws_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Throws_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Throws_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Throws_Sum_Order_By>;
  var_pop?: InputMaybe<Throws_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Throws_Var_Samp_Order_By>;
  variance?: InputMaybe<Throws_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "throws" */
export type Throws_Arr_Rel_Insert_Input = {
  data: Array<Throws_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Throws_On_Conflict>;
};

/** aggregate avg on columns */
export type Throws_Avg_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "throws" */
export type Throws_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "throws". All fields are combined with a logical 'AND'. */
export type Throws_Bool_Exp = {
  _and?: InputMaybe<Array<Throws_Bool_Exp>>;
  _not?: InputMaybe<Throws_Bool_Exp>;
  _or?: InputMaybe<Array<Throws_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  darts_position?: InputMaybe<Darts_Positions_Bool_Exp>;
  game_session?: InputMaybe<Game_Sessions_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  position_id?: InputMaybe<Int_Comparison_Exp>;
  session_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "throws" */
export type Throws_Constraint =
  /** unique or primary key constraint on columns "id" */
  'throws_pkey';

/** input type for incrementing numeric columns in table "throws" */
export type Throws_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  position_id?: InputMaybe<Scalars['Int']['input']>;
  session_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "throws" */
export type Throws_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  darts_position?: InputMaybe<Darts_Positions_Obj_Rel_Insert_Input>;
  game_session?: InputMaybe<Game_Sessions_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']['input']>;
  position_id?: InputMaybe<Scalars['Int']['input']>;
  session_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Throws_Max_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  position_id: Maybe<Scalars['Int']['output']>;
  session_id: Maybe<Scalars['Int']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "throws" */
export type Throws_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Throws_Min_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  position_id: Maybe<Scalars['Int']['output']>;
  session_id: Maybe<Scalars['Int']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "throws" */
export type Throws_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "throws" */
export type Throws_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Throws>;
};

/** on_conflict condition type for table "throws" */
export type Throws_On_Conflict = {
  constraint: Throws_Constraint;
  update_columns?: Array<Throws_Update_Column>;
  where?: InputMaybe<Throws_Bool_Exp>;
};

/** Ordering options when selecting data from "throws". */
export type Throws_Order_By = {
  created_at?: InputMaybe<Order_By>;
  darts_position?: InputMaybe<Darts_Positions_Order_By>;
  game_session?: InputMaybe<Game_Sessions_Order_By>;
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: throws */
export type Throws_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "throws" */
export type Throws_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'position_id'
  /** column name */
  | 'session_id'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "throws" */
export type Throws_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  position_id?: InputMaybe<Scalars['Int']['input']>;
  session_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Throws_Stddev_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "throws" */
export type Throws_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Throws_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "throws" */
export type Throws_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Throws_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "throws" */
export type Throws_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "throws" */
export type Throws_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Throws_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Throws_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  position_id?: InputMaybe<Scalars['Int']['input']>;
  session_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Throws_Sum_Fields = {
  id: Maybe<Scalars['Int']['output']>;
  position_id: Maybe<Scalars['Int']['output']>;
  session_id: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "throws" */
export type Throws_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** update columns of table "throws" */
export type Throws_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'position_id'
  /** column name */
  | 'session_id'
  /** column name */
  | 'updated_at';

export type Throws_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Throws_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Throws_Set_Input>;
  /** filter the rows which have to be updated */
  where: Throws_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Throws_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "throws" */
export type Throws_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Throws_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "throws" */
export type Throws_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Throws_Variance_Fields = {
  id: Maybe<Scalars['Float']['output']>;
  position_id: Maybe<Scalars['Float']['output']>;
  session_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "throws" */
export type Throws_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  position_id?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  /** An array relationship */
  game_sessions: Array<Game_Sessions>;
  /** An aggregate relationship */
  game_sessions_aggregate: Game_Sessions_Aggregate;
  id: Scalars['uuid']['output'];
  picture: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  user_name: Scalars['String']['output'];
};

/** columns and relationships of "users" */
export type UsersGame_SessionsArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersGame_Sessions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Game_Sessions_Select_Column>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  order_by: InputMaybe<Array<Game_Sessions_Order_By>>;
  where: InputMaybe<Game_Sessions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max: Maybe<Users_Max_Fields>;
  min: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Users_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  game_sessions?: InputMaybe<Game_Sessions_Bool_Exp>;
  game_sessions_aggregate?: InputMaybe<Game_Sessions_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  picture?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  game_sessions?: InputMaybe<Game_Sessions_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  picture: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_name: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  created_at: Maybe<Scalars['timestamptz']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  picture: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_name: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  game_sessions_aggregate?: InputMaybe<Game_Sessions_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  picture?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'picture'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_name';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'id'
  /** column name */
  | 'picture'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_name';

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type InsertGameSessionWithThrowsMutationVariables = Exact<{
  gameSession: Game_Sessions_Insert_Input;
}>;

export type InsertGameSessionWithThrowsMutation = {
  insert_game_sessions_one: {
    game_type_id: number;
    rate_80: number;
    rate_100: number;
    score_summary: string;
    user_id: string;
    throws: Array<{ id: number; position_id: number | null }>;
  } | null;
};

export const InsertGameSessionWithThrowsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'InsertGameSessionWithThrows' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gameSession' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'game_sessions_insert_input' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'insert_game_sessions_one' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'object' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'gameSession' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'game_type_id' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'rate_80' } },
                { kind: 'Field', name: { kind: 'Name', value: 'rate_100' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'score_summary' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'throws' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'position_id' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertGameSessionWithThrowsMutation,
  InsertGameSessionWithThrowsMutationVariables
>;
