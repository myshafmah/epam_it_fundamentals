function get_average(a,b){
    var average=(a+b)/2;
    return average;
};

var result = get_average(7,11);

function log_result(){
    console.log('avarage is '+result+ " inside function");
}

log_result();