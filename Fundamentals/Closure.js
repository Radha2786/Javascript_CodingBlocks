// -------------------(1:50)-----video 13--------------

// closure---- functions bundled together along with uts lexical environment
// functions bundled together + lexical environment


function a() {
    let b=100;
    function c(){
        b++;
        console.log(b);
    }

    return c;
}

let f = a();
f(); // 101
f(); // 102
f(); // 103
// here b also gets returned along with the function defination of c and hence this will be present in closure
// op =101