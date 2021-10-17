var a = setInterval(MyCall, 1000);

function MyCall() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
