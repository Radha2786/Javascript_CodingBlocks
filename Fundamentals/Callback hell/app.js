//callback hell

// here we are calling callback inside another callback which will eventually create callback hell so we use promise

function DownloadFile(url,Downlaoded){
    console.log(`downloading file from ${url}`);
    setTimeout(()=>{
        const path = url.split('/').pop();
        Downlaoded(path);
    },3000)
}

function compressedFile(path,compressedpath){
    console.log(`file started compressing from ${path}`);

    setTimeout(()=>{
        const cp= path.split('.')[0]+'.zip';
        compressedpath(cp);
    },2000)
}

function uploadedfile(cp,uploadedPath){
    console.log(`file started uploading from ${cp}`);
    setTimeout(()=>{
        const uploaded = 'http://localsystem/' + cp;
        uploadedPath(uploaded); 
    },3000)
}

DownloadFile('https://facebook.com/profile.jpg',function(path){
    console.log(`file downloaded successfully as ${path}`);
    compressedFile(path,function(cp){
        console.log(`file compressed successfully as ${cp}`);
        uploadedfile(cp,function(uploaded){
            console.log(`file uploaded successfully as ${uploaded}`);
        })
    })
})


