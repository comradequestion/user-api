# Simple api to retrieve user data from mongodb

## To run

Add MongoDB connection information to config.js

    node ./user-api/src/app.js

## Approach:

I split the project into the major concerns: router, application, and routes. Static configuration information lives in its own file. 

The business logic itself is in user_routes.js. It creates a database client on import so all calls to the get_user method will query the same client.

The end-user can specify a minimum age parameter to only include results with an age greater than the specified minimum.

## Possible Improvements

* For a more complicated api, standard add, update, and delete routes would be necessary.
* The get api parameters would also need to be more robust, with a route for getting all users matching specific criteria.
* The singular mongodb client would likely need to be migrated to a connection pool for better performance.
* The config would also need to be altered to support secure retrieval of credentials.
* Object ID parsing could be more robust and have better error handling.
