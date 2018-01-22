var path = require('path');
var Emps = require('./models/emps');

module.exports = function(app){
	app.post('/api/save_emp', function(req, res){
		var result = { success: false, errors: [], result:[] };
		var data = req.body;
		console.log(data);
		var errors = []; 
		if(!data.username){
			errors.push('username is required');
		} 
		if(!data.password){
			errors.push('password is required');
		}
		if(errors.length){
			result.errors = errors;
			return res.json(result);
		}else{
			var empsInfo = new Emps(data);
			empsInfo.save(function(err,resEmp){
				if(err){
					result.errors.push(err.messsage);
					return res.json(result)
				}else{
					result.success =true;
					result.result = resEmp;
					return res.json(result);
				}
			})
		}
	});
	app.get('/api/get_emp',function(req, res){
		var result = { success: false, errors:[], result:[]}
		Emps.find({},function(err, resEmp){
			if(err){
				result.errors.push(err.message);
				res.json(result);
			}else if(resEmp.length){
				result.success = true;
				result.result = resEmp;
				res.json(result);
			}else{
				result.errors.push(' no employee found');
				res.json(result);
			}
		})
	});

	app.get('*', function(req,res){
		res.sendFile(path.resolve('public/index.html'))
	});
}