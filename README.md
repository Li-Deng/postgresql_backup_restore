# postgresql backup & restore

Create Postgresql database dump and restore

**Features**

- Create dump sql file of database
- Restore dump sql file to database



because the scripts run commands in linux, so postgresql-client with version 9.6 or above is needed,  if its not included in your version of linux, you can go check the method of installing latest version of postgresql-client on the official postgresql website, what is below is the shell l used in ubuntu 16.04:

``` shell
sudo bash -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \
sudo apt-key add -
sudo apt-get update 

check if the version of postgresql-client is updated: 

dpkg -l | grep postgresql

or :

sudo apt-cache policy postgresql-client

if so 

apt-get install postgresql-9.6
```

### Example

    var  postgresql_backup_restore= require('postgresql_backup_restore');
​    

```javascript
// create database dump sql file
var tool = new postgresql_backup_restore();
 tool.dumpDatabase({
    host: 'localhost'
    , port: 5432
    , user: 'postgres'
    , password: ''
    , dumpPath: 'path/to/backup_file'
    , database: 'name_database'
}, function (error, output, message, dumpFileName) {
    if (error instanceof Error) {
       console.log(code);
    } else {
       console.log(output);
       console.log(message);
       console.log(dumpFileName);
    }
});
// restore dump sql file to database
var tool = new postgresql_backup_restore();
 tool.restoreDatabase({
    host: 'localhost'
    , port: 5432
    , user: 'postgres'
    , password: ''
    , sqlFilePath: '/path/to/sql_file'
    , database: 'name_database'
}, function (error, output, message) {
    if (error instanceof Error) {
       console.log(code);
    } else {
       console.log(output);
       console.log(message);
    }
});
```
