var mysql = require('mysql');
var async = require('async');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database:'nodejs',
    port: 3306
});

var sqls = {
	'insertSQL': 'insert into t_user(name) values("conan"),("fens.me")',
	'selectSQL': 'select * from t_user litmit 10',
	'deleteSQL': 'delete from t_user',
	'updateSQL': 'update t_user set name="conan update" where name="conan"'
}

var tasks = ['deleteSQL', 'insertSQL', 'selectSQL', 'updateSQL', 'selectSQL'];
async.eachSeries(tasks, function (item, callback) {
    console.log(item + " ==> " + sqls[item]);
    conn.query(sqls[item], function (err, res) {
        console.log(res);
        callback(err, res);
    });
}, function (err) {
    console.log("err: " + err);
});