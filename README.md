#  temp_storage
_A simple storage for temperature and humidity data which can be accessed via REST-API_

## Get this to run
- Make sure that _node_ and _sqlite3_ are installed on your machine
- Run `sqlite3 #filename# < tables.sql` to extend an existing database-file or create a new one with the necessary table already imported
- Copy the file _src/.environment.ts.example_ to _src/.environment.ts_  and fill it with your data
- Run `npm run-script start` to start the server 

Done.
