In mongo i was having this error while putting databases at mongo atlas--------
   MongoServerError: E11000 duplicate key error collection: myFirstDatabase.users index: email_1 dup key: { email: null }
    at /Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/operations/insert.js:51:33
    at /Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/cmap/connection_pool.js:272:25
    at handleOperationResult (/Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/sdam/server.js:370:9)
    at MessageStream.messageHandler (/Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/cmap/connection.js:479:9)
    at MessageStream.emit (events.js:400:28)
    at processIncomingData (/Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/cmap/message_stream.js:108:16)
    at MessageStream._write (/Users/apple/Desktop/node_jwt/server/node_modules/mongoose/node_modules/mongodb/lib/cmap/message_stream.js:28:9)
    at writeOrBuffer (internal/streams/writable.js:358:12)
    at MessageStream.Writable.write (internal/streams/writable.js:303:10)
    at TLSSocket.ondata (internal/streams/readable.js:726:22) {
  index: 0,
  code: 11000,
  keyPattern: { email: 1 },
  keyValue: { email: null }
}


So, i deleted the whole database at atlas and created new and then it didn't show any error.
