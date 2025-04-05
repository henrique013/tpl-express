export interface ActionFn<TIn, TOut> {
  (input: TIn): Promise<TOut>
}
