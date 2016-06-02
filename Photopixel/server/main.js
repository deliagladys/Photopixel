

Meteor.startup(function(){
  // code to run on server at startup
  UploadServer.init({
  	tmpDir: process.env.pwd + '/.tmp',
  	uploadDir: process.env.pwd +'/.uploads',
  	checkCreateDirectories: true
  });
});
