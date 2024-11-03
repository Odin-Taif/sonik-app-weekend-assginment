"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.posts = (0, pg_core_1.pgTable)("posts", {
    id: (0, pg_core_1.varchar)("id").primaryKey(),
    content: (0, pg_core_1.text)("post"),
    authorId: (0, pg_core_1.varchar)("authorId").notNull(),
    createdAt: (0, pg_core_1.timestamp)("createdAt").defaultNow().notNull(),
});
//# sourceMappingURL=schema.js.map