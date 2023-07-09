// we have a promise class and we create it's object using new promise

// const x = new Promise (function(resolve,reject){

//     setTimeout(() => {
//         let randomnumber = Math.random();
//         console.log(randomnumber);

//         if(randomnumber>0.5){
//             resolve();
//         }else{
//             reject();
//         }

        
//     }, 2000);
// });

// x.then(function (){
//     console.log('inside resolve');
// }).catch(function(){
//     console.log('inside reject');
// })

// .then and .catch are also functions and inside .then we pass resolve and inside .catch we pass reject 


// better code-----------------------------


function DownloadFile(url){
    return new Promise ((resolve,reject)=>{
        if(!url.startsWith('http')){
            throw new Error('Invalid url');
        }
        console.log("file started downloading");
        setTimeout( ()=>{
            const path = url.split('/').pop();
            resolve(path);
        },3000)

    })
  }

 function compressedFile(path){
   return new Promise((resolve,reject)=>{
    console.log('file started compressing');
    setTimeout(()=>{
        let compressedpath= path.split('.')[0]+'.zip';
        resolve(compressedpath);
    },2000)
})
}


function uploadfile(compressedpath){
    return new Promise ((resolve,reject)=>{
        console.log('file started upoading');
        setTimeout(()=>{
            const uploadedPath= 'http://localsystem/' + compressedpath
            console.log(uploadedPath);
             resolve(uploadedPath);
         },3000);
        })
    } 


//  DownloadFile('https://facebook.com/profile.jpg').then((path)=>{
//     console.log(`file downloaded successfully from ${path}`);
//     compressedFile(path).then((compressedpath)=>{
//         console.log(`file compressed successfully at ${compressedpath}`);
//         uploadfile(compressedpath).then((uploadedPath)=>{
//             console.log(`file uploaded at the path ${uploadedPath}` );
//         })
//     });
//  })


// this is also creating nesting hence we'll use more improved  and better code 

DownloadFile('htps://facebook.com/profile.jpg').then(compressedFile).then(uploadfile).then((uploadedPath)=>{
    console.log(`file uploaded at the path ${uploadedPath}`);
    console.log("Eerything done");
}).catch((err)=>{
    console.log("somethig went wrong");
    console.log(err.message);
});






 

