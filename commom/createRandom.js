var createBless = function(){
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
                break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                break;
            default:
                return 0;
                break;
        }
    }
    var arr = [];
    for(var i = 0;i<4;i++){
        arr.push(randomNum(i*15,(i+1)*15))
    }
    return arr;
};
export default createBless;