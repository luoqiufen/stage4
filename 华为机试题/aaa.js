// 1. 字符串最后一个单词的长度
{
    let str = readline();
    function countStr(str){
        let arr = str.split(' ');
        let a = arr[arr.length-1];
        return a.length;
    }
    console.log(countStr(str));
}
// 2. 计算字符串的个数
{
    let str = readline();
    let a = readline();
    function getCount(str,a){
        let str1 = str.toLowerCase();
        let a1 = a.toLowerCase();
        let count = 0;
        for(let key in str1){
            if(str1[key] === a1){
                count++;
            }
        }
        return count;
    }
    console.log(getCount(str,a));
}
// 3. 明明的随机数
{
    while(line=readline()){
        let arr = [];
        for(let i=0;i<line;i++){
            arr.push(readline());
        }
        let tSet = [...new Set(arr)];
        let setSort = tSet.sort(function(a,b){
            return a-b;
        })
        for(let j=0;j<setSort.length;j++){
            console.log(setSort[j]);
        }
    }
}
// 4. 字符串分隔
{
    let q = '00000000';
    let arr = [];
    for(let i=0;i<2;i++){
        arr.push(readline());
    }
    for(let j=0;j<arr.length;j++){
        if(arr[j].length<=8){
            let t = arr[j]+q;
            console.log(t.slice(0,8))
        }else{
            let len = arr[j].length;
            for(let i=0;i<len;i+=8){
                let s = arr[j].slice(i,i+8);
                if(s.length<8){
                    let p = s+q;
                    console.log(p.slice(0,8));
                }else{
                    console.log(s)
                }
            }
        }
    }
}
// 5. 进制转换
{
    let readline = require('readline');
    const rl = readline.createInterface({
        input:process.stdin,
        ouput:process.stdout
    });
    rl.on('line',function(line){
        let output = parseInt(line,16);
        console.log(output)
    })
}

// 6. 质数因子
{
    let num = readline();
    let arr = [];
    for(let i = 2;i<=num;i++){
        if(num%i==0){
            arr.push(i);
            num = num/i;//返回继续循环
            i = 1;
        }
    }
    let res = arr.sort(function(a,b){
        return a-b;
    }).join(' ') + ' ';
    console.log(res);
}

// 7. 取近似值
{
    let num = readline();
    console.log(Math.round(num));
}
{
    let num = readline();
    let t = parseInt(num);
    let p = num - t;
    if(p>=0.5){
        t+=1;
    }
    console.log(t);
}

// 8. 合并表记录
{
    let k = parseInt(readline());
    let obj = {};
    for(let i = 0; i<k; i++){
        arr = readline().split(' ').map(function(item){
            return parseInt(item);
        })
        if(arr[0] in obj){
            obj[arr[0]]+=arr[1];
        }else{
            obj[arr[0]] = arr[i];
        }
    }
    let newArr = Object.keys(obj);
    for(let i=0;i<newArr.length;i++){
        console.log(newArr[i]+' '+obj[newArr[i]]);
    }
}



