
// ---------------------------------Callback-------------------------------------

//  when a function accepts another function as an argument and invoke that function to perform some task 

// Example :
function fun(f) {
    f();

}

/* function a() {
    console.log('inside a');
}
*/

// fun(a)
fun (function a() {
    console.log('inside a');
})