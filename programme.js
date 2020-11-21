exports.init = function(data) {

var files="" ; fs = require('fs') ; path = require('path') ; var chemin="C:/program files" ; var chemin1="c:/program files (x86)"////changer si cela beug
var recursiveReadSync = require('recursiveprogramme'), files  ;

var colour = require('colour')
console.log("le chemin des logiciels est : "+chemin+" changer dans le :   programmemathilde.js    :si cela beug".red)

try {
 var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programme/memoireprogramme/listprogramme.json').replace('\\%CD%', '')
  var content = fs.readFileSync(filePathphrasescles1,'utf8') 
  console.log("fichier programme existe")
}//fin try

catch(err){
  console.log("mise à jour des fichiers, peut etre long (3 à 4 minutes), seulement cette fois ci")
     
      try { 
        var files = recursiveReadSync(chemin);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err
     try { 
        var files1 = recursiveReadSync(chemin1);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err

//on concatene
var temporaire = files.concat(files1); //fusion des deux tableaux
var files=temporaire

         var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programme/memoireprogramme/listprogramme.json').replace('\\%CD%', '')
          fs.writeFileSync(filePathphrasescles1,files)

}//fin catch (err)
}//fin export










exports.action = function(data) {
try{
////////////////////////////////////
if(data.listprog==1){
  console.log("mise à jour des logiciels")

    //var colour = require(colour)
    var files="" ; fs = require('fs') ; var path = require('path') ; var chemin="C:/program files" ; var chemin1="c:/program files (x86)"////changer si cela beug

   var recursiveReadSync = require('recursiveprogramme'), files  ;
     //var recursiveReadSync = require(path.resolve('%CD%', './plugins/modules/recursiveprogramme').replace('\\%CD%', '')), files  ;
    console.log("le chemin des logiciels est : "+chemin+" changer dans le :   programmemathilde.js    :si cela beug")

    try {
        var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programme/memoireprogramme/listprogramme.json').replace('\\%CD%', '')
        var content = fs.readFileSync(filePathphrasescles1,'utf8') 
        console.log("fichier programme existe, je le mets à jour")
        fs.writeFileSync(filePathphrasescles1,"")
 
  console.log("mise à jour des fichiers, peut etre long (3 à 4 minutes)")
     
      try { 
        var files = recursiveReadSync(chemin);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err
     try { 
        var files1 = recursiveReadSync(chemin1);
      }//fin try 
      catch(err){ 
        if(err.errno === 34){ console.log('Path does not exist')  }
          else {  console.log(err.red) }
      }//fin catch err

//on concatene
var temporaire = files.concat(files1); //fusion des deux tableaux
var files=temporaire

         var  filePathphrasescles1 = path.resolve('%CD%', './plugins/programme/memoireprogramme/listprogramme.json').replace('\\%CD%', '')
          fs.writeFileSync(filePathphrasescles1,files)
console.log("Fichier mis à jour")
JarvisIASpeech("fichier mis à jour|pas trop long ?|j'espere que j'ai tout trouvé")
 return false  
   }//fin try

catch(err){console.log("une ereur s'est produite : "+err)}
return false
}//fin mise à jour


///////////////////////////////////////////////////////////////

var recherche=JarvisIA.reco
//var recherche =data.dictation;
console.log(recherche+" recu ")
if (recherche.indexOf("ferme")>-1){var on=0}else{var on=1};

var rgxp = /logiciel (.+)/i; var match1 = recherche.match(rgxp);

var recherche=match1[1]
var recherche=recherche.toLowerCase()
var recherche1=recherche.replace(new RegExp(" ","gi"),"");
var recherche1=recherche1.replace(new RegExp("-","gi"),"");
var recherche1=recherche1.replace(new RegExp("_","gi"),"");
var recherche1=recherche1.replace("à" ,"a");//console.log('********'+recherche1)

//console.log("en attente de : "+recherche + " ou : " + recherche1)
fs = require('fs') ; p = require('path') ; exec = require('child_process').exec ; path = require('path') ;var  list1=[]
var filePathphrasescles1 = path.resolve('%CD%', './plugins/programme/memoireprogramme/listprogramme.json').replace('\\%CD%', '')

var content = fs.readFileSync(filePathphrasescles1,'utf8')
var contentsplit=content.split(",")

for(var i=0;i<contentsplit.length;i++){
  
  var contentsplit1=contentsplit[i].replace(new RegExp(" ","gi"),"");
  var contentsplit1=contentsplit1.replace(new RegExp("-","gi"),"");
  var contentsplit1=contentsplit1.replace(new RegExp("_","gi"),"");
  var contentsplit1=contentsplit1.toLowerCase();
var contentsplit1=contentsplit1+" "
        if ( ( contentsplit1.search(recherche+".exe ","gi")>-1 ) || ( contentsplit1.search(recherche1+".exe ","gi")>-1 ) ){
  
                   var substring=recherche.toLowerCase();
                   var  string=contentsplit[i].toLowerCase()

                    var a=[],x=-1;
                    while((x=string.indexOf(substring,x+1)) >= 0) a.push(i);

                    console.log("lancement de : "+contentsplit[i]+ a.length)
    
                        //if(a.length>1){
                            
                            if(on==0){

                                //console.log('on ferme')
                                
                                var exec = require('child_process').exec;
                                //var nircmd =path.resolve('./plugins/infomathilde/nircmd/nircmd.exe').replace('\\%CD%', '')
                                var nircmd=JarvisIANircmd
                                var nircmd=nircmd+' closeprocess '+'" '+contentsplit[i]+'"'
                                var child2 = exec(nircmd);//console.log(nircmd)
                                
                                var nomduplugin="programmemathilde"//ou autre nom....
                                var valeurduspeak="|je ferme|tu est sur|tu n'en as plus besoin ?"//phrase à dire
                                //SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
JarvisIASpeech(valeurduspeak)
                                return false
                            }//fin if on
                            
                            else{
var exec = require('child_process').exec;
                                //var nircmd =path.resolve('./plugins/infomathilde/nircmd/nircmd.exe').replace('\\%CD%', '')
                                var nircmd=JarvisIANircmd
                                var nircmd=nircmd+'exec show '+'"'+contentsplit[i]+'"'
                                //exec max "c:\temp\test.exe"
                                console.log("**",nircmd,"hhhh")
                                var child2 = exec(nircmd);//console.log(nircmd)
                                //console.log('on ouvre')
                           //"C:\Program Files\CCleaner\CCleaner.exe"     
                                //SARAH.runApp(contentsplit[i])
                                var nomduplugin="programmemathilde"//ou autre nom....
                                var valeurduspeak="|j'ouvre|n'y passe pas trop de temps|as tu acheté la licence"//phrase à dire
                         //       SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});

JarvisIASpeech(valeurduspeak)
                                 return false
                        
                            }//fin else on
                        
                       // }//fin if
        }

}//fin for  

console.log("pas trouvé !!!") ;
var nomduplugin="programmemathilde"//ou autre nom....
var valeurduspeak="je n'ai pas trouvé|tu devrais l'installer avant|est tu sur qu'il est dans tes programmes ?"//phrase à dire
//SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
//ScribeSpeak('rien trouvé')
JarvisIASpeech(valeurduspeak)
 return false
}catch(err){console.log(err,'!!!!!!!!!!!!!!!');return false}
}