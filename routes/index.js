const { dir } = require('console');
var express = require('express');
var router = express.Router();
var fs = require("fs")


router.get("/",function(req,res){
  var duplicatefolder = []
  fs.readdir("./uploads",{withFileTypes:true},function(err,files){
    files.forEach(function(dirent){
      duplicatefolder.push({name:dirent.name , isfolder:dirent.isDirectory()})
    })
    res.render("index",{files:duplicatefolder})
  })
})

//----------------------------------- file creation ----------------------------------


router.get("/createfile",function(req,res){
  fs.writeFile(`./uploads/${req.query.filename}`,"",function(err,files){
    if(err){
      console.log(err``)
    }
    else(
      res.redirect("/")
    )
  })
})



//----------------------------------- folder creation ----------------------------------

router.get("/createfolder",function(req,res){
  fs.mkdir(`./uploads/${req.query.foldername}`,function(err){
    res.redirect("/")
  })
})


//----------------------------------- file deletion ----------------------------------


router.get("/deletefile/:filename",function(req,res){
  fs.unlink(`./uploads/${req.params.filename}`,function(err){
    if(err){
      console.log(err)
    }
    else{
      res.redirect("/")
    }
  })
})


//----------------------------------- folder deletion----------------------------------


router.get("/deletefolder/:foldername",function(req,res){
  fs.rmdir(`./uploads/${req.params.foldername}`,function(err){
    if(err){
      console.log(err)
    }
    else{
      res.redirect("/")
    }
  })
})







router.get('/file/:filename', function(req, res) {
  var dupfolder =[];
  fs.readdir("./uploads",{ withFileTypes :true },function(err, files){
  files.forEach(function(dirent){
    dupfolder.push({name: dirent.name,isfolder:dirent.isDirectory()})
  })
  fs.readFile(`./uploads/${req.params.filename}`, "utf-8" ,function(err,data){
    res.render('opened', { files: dupfolder, filename: req.params.filename, filedata: data });
  })          
  })
});


module.exports = router;
