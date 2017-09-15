

var Class = require('ee-class')
, log = require('ee-log')
, assert = require('assert')
, os = require('os')
, Promise = require('es6-promise').Promise
, postgresql_backup_restore = require('../');

describe('Postgresql Backup Restore', function () {
    var dumpSqlFileName = os.tmpdir()+'/dumppostgres'+new Date().getTime()+'.sql';
    it('Should create dump sql file', function (done) {
        var tool = new postgresql_backup_restore();
        tool.dumpDatabase({
            host: 'localhost'
            , port: 5432
            , user: 'postgres'
            , password: ''
            , dumpPath: dumpSqlFileName
            , database: 'postgres'
        },done);
    });

    it('Should restore dump sql file', function (done) {
        var tool = new postgresql_backup_restore();
        tool.restoreDatabase({
            host: 'localhost'
            , port: 5432
            , user: 'postgres'
            , password: ''
            , sqlFilePath: dumpSqlFileName
            , database: 'test'
        }, done);
    });
});