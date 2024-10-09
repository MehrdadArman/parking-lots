import { db } from "./db";

export const handlers = [...db.parkLots.toHandlers("graphql")];
