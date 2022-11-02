time_ = 0;
time = document.getElementById("time_spent");

function convert(num) {
  m = (Math.floor(num/60));
  num = num%60
  h = (Math.floor(m/60));


  m = String(m%60);
  h = String(h%60);
  num = String(num);
  if (Number(num)<10){
    num = "0"+num;
  }
  if (Number(m)<10){
    m = "0"+m;
  }
  if (Number(h)<10){
    h = "0"+h;
  }

  return h+" : "+m+" : "+num;
}


running = false;

function start() {
  running = true;
}

function stop() {
  running = false;
}

function reset() {
  time_ = 0;
}

setInterval(function update() {
  time.innerHTML = convert(time_);
  if (running == true){
    time_ ++;
  }
},1000);
