console.log("clock is ready");
setInterval(() => {
            d = new Date();
            htime = d.getHours();
            mtime = d.getMinutes();
            stime = d.getSeconds();

            hrotation = 30 * htime + mtime / 2;
            mrotation = 6 * mtime;
            srotation = 6 * stime;

            hours.style.transform = `rotate(${hrotation}deg)`;
            mintues.style.transform = `rotate(${mrotation}deg)`;
            seconds.style.transform = `rotate(${srotation}deg)`;

}, 1000);


let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
            a = new Date();
            date = a.toLocaleDateString(undefined, options);
            time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            document.getElementById('time').innerHTML = time + "<br>  on " + date;
}, 1000);