function orderError(error: string): never {
  throw new Error(error);
  // nothing below this will run
}

orderError("Something went wrong");
