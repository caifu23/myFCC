// 1、获取数字数组的最大值
function getMaxArray(numArr) {
    return Math.max.apply(null, numArr);
}

// 2、获取数字数组的最小值
function getMinArray(numArr) {
    return Math.min.apply(null, numArr);
}

// 数组去重 （）
var arr = [1,2,3,4,5,2,3,2];
function getArray(arr){
   return arr.filter(function(item,index,array){
     return array.indexOf(item) === index;
   })
}

// 3、传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和
//    Math.max()   Math.min()  Array.reduce()
//    题目来源：https://freecodecamp.cn/challenges/sum-all-numbers-in-a-range

function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    //将2个数之间的数添加进数组
    for(var i=min+1; i<max; i++) {
        arr.push(i);
    }
    // return arr.reduce(function(a,b) {
    //     return a+b;
    // });
    return arr.reduce((a,b) => a+b);
}

// 4、Diff Two Arrays
// 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
// 练习来源：https://freecodecamp.cn/challenges/diff-two-arrays
function diff(arr1, arr2) {
    var newArr = [];
    var index = [];
    for(var i=0; i<arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) === -1){
            newArr.push(arr1[i]);
        }else {
            index.push(arr2.indexOf(arr1[i]));
        }

        arr1.slice(i+1);
    }
    var arr3 = arr2.filter(function(val,ind) {
        // console.log(val +'---' +ind + '---' +index)
        return index.indexOf(ind) === -1;
    });
    // console.log(arr3);
    newArr = newArr.concat(arr3);
    // Same, same; but different.
    return newArr;
  }

  //时间耗费在 (m+n)×(m+n)
function diff(arr1, arr2) {
    var newArr = [];
    newArr = arr1.concat(arr2);

    function search(num) {
        if(arr1.indexOf(num) ===-1 || arr2.indexOf(num) ===-1) {
            return num;
        }
    }

    newArr = newArr.filter(search);

    return newArr;
}

//时间耗费在 m×n×2
function diff(arr1, arr2) {
    var newArr = [];

    // 用来查询 arr2数组的值不在arr1中，并返回
    function check(num) {
        if(arr1.indexOf(num) === -1) {
            return num;
        }
    }
    // 用来查询 arr1数组的值不在arr2中，并返回
    function check2(num) {
        if(arr2.indexOf(num) === -1) {
            return num;
        }
    }
    newArr = newArr.concat(arr1.filter(check2),arr2.filter(check));
    return newArr;

}


// 5、Roman Numeral Converter
// 将给定的数字转换成罗马数字。所有返回的 罗马数字（https://www.mathsisfun.com/roman-numerals.html） 都应该是大写形式。
// 练习来源：https://freecodecamp.cn/challenges/roman-numeral-converter

//从最大的数字开始遍历
//如果num大于当前数，则减去当前数，继续进入循环。字符串则加上对应的罗马字符
function convert(num) {
    var numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var strArr = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var result = "";
    while (num > 0) {
        var i = numArr.length;
        while (i >= 0) {
            if (num >= numArr[i]) {
                result += strArr[i];
                num -= numArr[i];
            } else {
                i--;
            }
        }
    }
    return result;
}

function convert(num) {

    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  
  }


//6 、Where art thou
// 写一个 function，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
// 例如，如果第一个参数是 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，
// 第二个参数是 { last: "Capulet" }，
// 那么你必须从数组（第一个参数）返回其中的第三个对象，
// 因为它包含了作为第二个参数传递的属性-值对。
//练习来源： https://freecodecamp.cn/challenges/where-art-thou

function where( collection, source) {
    var arr = [];
    var flag = true;
    // 遍历数组
    for(var i in collection) {
        // 每一个数组对象假设 为flag=true
        flag = true;
        console.log(i + '----1' + collection[i]);
        // 遍历第二个参数对象里  的键值对，如果有遍历到不在数组当前对象，返回false并跳出当前for
        for(var k in source) {
            if(collection[i].hasOwnProperty(k) && collection[i][k] === source[k]) {
               
            }else {
                flag = false;
                continue;
            }
        }
        //第二个参数对象里的键值对都在数组当前对象里存在
        if(flag) {
            arr.push(collection[i]);
        }
    }

    return arr;
}

//其他解法1 （ https://www.jianshu.com/p/73b6e60a69a2 ）
function where(collection,source){
    var arr = [];
    arr = collection.filter(function(item,index){
        for(var key in source){
            if(!item.hasOwnProperty(key) || item[key] !== source[key]){
                return false;
            }
        }
        return true;
    });
    return arr;
}

//其他解法2 （ https://www.jianshu.com/p/73b6e60a69a2 ）
function where(collection,source){
    var arr = [];
    var keys = Object.keys(source);
    arr = collection.filter(function(item,index){
        return keys.every(function(key){
            return item.hasOwnProperty(key) && item[key] === source[key];
        });
    });
    return arr;
}


// 7、Search and Replace
// 使用给定的参数对句子执行一次查找和替换，然后返回新句子。
// 第一个参数是将要对其执行查找和替换的句子。
// 第二个参数是将被替换掉的单词（替换前的单词）。
// 第三个参数用于替换第二个参数（替换后的单词）
// 注意：替换时保持原单词的大小写。
// 例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
// 练习来源： https://freecodecamp.cn/challenges/search-and-replace

function myReplace(str, before, after) {
    if(before[0].toUpperCase() === before[0]) {
        after = after.replace(after[0], after[0].toUpperCase());
    }
    str = str.replace(before, after);
    return str;
  }

//这里顺便说一下访问单个字符时， str[index] 和 charAt(index) 的区别：
//对于 超出范围的索引值 ， str[index] 将返回 undefined ，而 charAt(index) 将返回一个空字符串。
//对于 IE8以下版本 ， str[index] 不被兼容，将返回 undefined。

// 解法2 ( https://www.jianshu.com/p/4d72dfe478b5 )
function myReplace(str,before,after){
    var reg = /^[A-Z]/;
    if(reg.text(before.charAt(0))){
      after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before,after);
    return str;
  }


// 8、 Pig Latin
// 把指定的字符串翻译成 pig latin
// Pig Latin ( http://en.wikipedia.org/wiki/Pig_Latin )
//  把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
// 如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
// 练习来源：https://freecodecamp.cn/challenges/pig-latin
//辅音：
//元音：a e i o u 
//对于以辅音开头的单词，所有在元音字母前面的字母都放在单词序列的末尾。然后，添加“ay”
//当单词以辅音群(组成一个发音的多个辅音)开头时，在说或写的时候，整个发音被加到结尾。
//sm st gl tr fl 
//如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
function translate(str) {
    //先找到字符串中的第一个元音字母，然后判断这个元音字母的位置,
    //该位置为第一位时加'way'
    //如果不是第一位，那就记录下这个元音在该字符串的位置，
    //然后将该位置前面的字符全部移到字符串末尾，最后再加上ay
    var yuanStr = ['a','e','i','o','u'];
    var index;
    for(var i=0; i<str.length; i++){
        if(yuanStr.indexOf(str[i].toLowerCase()) > -1) {
            index = i;
            console.log(i);
            break;
        }
    }
    if(index === 0) {
        str += 'way';
    }else {
        str = str.slice(index) + str.substr(0,index) + 'ay';
    }
    return str;
  }


  //其他解法
  //可以用正则匹配来查找元音在字符串的位置，exec()可以返回匹配到的第一个字符的下标
  function translate(str) {
    var vowelIndex = /[aeuio]/.exec(str).index;
  
    return str.substr(vowelIndex) + (str.substr(0,vowelIndex) || "w") + "ay";
  }



// 9、DNA Pairing
// Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基
// 练习来源：https://freecodecamp.cn/challenges/dna-pairing

function pair(str) {
    var basePair = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    var strIn = [];
    for(var i=0; i<str.length; i++) {
      console.log(str[i]);
      console.log(basePair[str[i]]);
      strIn.push([ str[i], basePair[str[i]] ]);
    }
    str = strIn; 
  }

  //解法二：
  function pair(str) {
    var basePair = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    str = str.split('');
    str = str.map(function(val) {
        return [val, basePair[val]];
    });
    return str;
  }



// 10、Missing letters
// 从传递进来的字母序列中找到缺失的字母并返回它。
// 如果所有字母都在序列中，返回 undefined
// 练习来源：https://freecodecamp.cn/challenges/missing-letters


function fearNotLetter(str) {
    for(var i=0; i<str.length; i++) {
        if(str.charCodeAt(i) !== str.charCodeAt(0) + i) {
            str =  String.fromCharCode( str.charCodeAt(0) + i );
            break;
        }
    }
    if(str.length > 1) {
        return undefined;
    }
    return str;
  }
  

// 11、 Boo who
// 检查一个值是否是基本布尔类型，并返回 true 或 false。
// 基本布尔类型即 true 和 false。
// 练习来源：https://freecodecamp.cn/challenges/boo-who

function boo(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    if(typeof(bool) === 'boolean') {
      bool = true;
    }else {
      bool = false;
    }
    return bool;
  }

function boo(bool) {
    return typeof bool === 'boolean';
} 


// 12、Sorted Union
// 写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
// 换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
// 非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序
// 练习来源： https://freecodecamp.cn/challenges/sorted-union

function unite(arr1, arr2, arr3) {
    //将参数转换为真实数组
    var args = Array.from(arguments);
    //将二维数组转化为一维 
    arr1 = args.reduce(function(a,b) {
        return a.concat(b);
    },
    []
    );
    arr1.reverse(); //逆序数组，以便遍历从尾部开始，如若在前面有重复，当前的不返回
    arr1 = arr1.filter(function(val,key) {
        return arr1.slice(key+1).indexOf(val) == -1;

    });
    arr1.reverse();
    return arr1;
  }

//解法二：
function unite(arr1, arr2, arr3) {
    //将参数转换为真实数组
    var args = Array.from(arguments);
    //将二维数组转化为一维 
    arr1 = args.reduce(function(a,b) {
        return a.concat(b);
    },
    []
    );
    //也就是位置靠后的重复项 在indexof返回的索引是靠前的索引 来舍弃
    arr1 = arr1.filter(function(item, index, array) { //item 是当前遍历值， index当前索引， array当前整个数组
        return array.indexOf(item) === index;
    });
    return arr1;
  }


// 13、Convert HTML Entities
// 将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
// 练习来源：https://freecodecamp.cn/challenges/convert-html-entities
// 
function convert(str) {
    // &colon;&rpar;
    var htmlEntities = {
      "&": '&amp;',
      "<": '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'   
    };
    //正则表达式
    var reg = new RegExp(/[&<>"']/, 'g');
    //在str里匹配到的项 返回的数组，没有匹配到 则是null
    var regArr = str.match(reg);
    if(regArr !== null) {
      regArr.map(function(val) {
      str = str.replace(val, htmlEntities[val]);
    });
    }
    return str;
  }



// 14、Spinal Tap Case
// 将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，
// 也就是以连字符连接所有小写单词。
// 练习来源：https://freecodecamp.cn/challenges/spinal-tap-case
function spinalCase(str) {
    //匹配空格或者 _ （下划线）
      var reg = /\s+|_+/g;
    //如果匹配到小写大写 转换为 “小写空格大写”
      str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    //将 空格或者下划线替换，再转为小写
      str = str.replace(reg, "-").toLowerCase();
      return str;
    }



// 15、Sum All Odd Fibonacci Numbers
// 给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
// 斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和
// 例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3
// 提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
// 练习来源： https://freecodecamp.cn/challenges/sum-all-odd-fibonacci-numbers
var sumFibs = function() {
    var cache = [1, 1];
    return function (n) {
        if (n >= cache.length) {
            for (var i = cache.length; cache[i-1] < n ; i++ ) {
                cache[i] = cache[i - 2] + cache[i - 1];
            }
        }
        var arr = cache.filter(function(val){
           return val%2 !== 0 && val <= n;
         });
        return arr.reduce(function(pre,next){
          return pre+next;
        });
    };

}();



// 16、Sum All Primes
// 求小于等于给定数值的质数之和。
// 只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
// 给定的数不一定是质数。
// 练习来源： https://freecodecamp.cn/challenges/sum-all-primes
function sumPrimes(num) {
    // 判断是否为质数
    function isPrimes(num) {
        var flag = true;
        if(num <= 1) {
            flag = false;
          }
        for(var i=2; i<num; i++) {
            if(num % i === 0) {
                flag = false;
            }
        }
        return flag;
    }

    var sum = [];
    for(var i=2; i<=num; i++) {
        if(isPrimes(i)) {
            sum.push(i);
        }       
    }
    return sum.reduce(function(a, b) {
        return a+b;
    });
  }



// 17、Smallest Common Multiple
// 找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。
// 范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
// 例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
// 练习来源： https://freecodecamp.cn/challenges/smallest-common-multiple
function smallestCommons(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    for(var i=min+1; i<max; i++) {
        arr.push(i);
    }
    var smalllestNum;
    for(var i=1; ; i++) {
        smalllestNum = max * i;
        var flag = arr.every(function(val) {
            return smalllestNum % val === 0;
        });
        if(flag) {
            break;
        }
        
    }

    
    return smalllestNum;
  }



// 18、Finders Keepers
// 写一个 function，它遍历数组 arr，并返回数组中第一个满足 func 返回值的元素。
// 举个例子，如果 arr 为 [1, 2, 3]，func 为 function(num) {return num === 2; }，那么 find 的返回值应为 2
// 练习来源： https://freecodecamp.cn/challenges/finders-keepers
function find(arr, func) {
    var num = 0;
    arr = arr.filter(func);
    num = arr[0];
    return num;
  }

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });




// 19、Drop it
// 练习来源：https://freecodecamp.cn/challenges/drop-it
// 
function dropElements(arr, func) {
    while(arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }

  drop([1, 2, 3], function(n) {return n < 3; });




// 20、Steamroller
// 对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套
// 练习来源：https://freecodecamp.cn/challenges/steamroller
// 
function steamroller(arr) {
    // 保存扁平化的数组
    var steamResult = [];
    // 当前值不是数组，添加进去，是数组则遍历并回调该函数
    function steamArr(arg) {
        if(Array.isArray(arg)) {
            for(var k in arg) {
                steamArr(arg[k]);
            }
        }else {
            steamResult.push(arg);
        }
    }
    arr.forEach(steamArr);
    return steamResult;
  }

  steamroller([1, [2], [3, [[4]]]]);




// 21、Binary Agents
// 传入二进制字符串，翻译成英语句子并返回。
// 二进制字符串是以空格分隔的。
// 练习来源：https://freecodecamp.cn/challenges/binary-agents
//parseInt(str[i],2)  二进制转换成十进制
function binaryAgent(str) {
    str = str.split(' ');
    var newStr = [];
    for(var i in str) {
        newStr.push(String.fromCharCode(parseInt(str[i],2)));
    }
    
    return newStr.join('');
  }

//解法二
// https://github.com/congtou221/blog/issues/1
function binaryAgent(str) {
    return str.split(' ').map(function(e) {
        return String.fromCharCode(parseInt(e, 2));
    }).join('')
}




// 22、Everything Be True
// 所有的东西都是真的！
// 完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(pre)，并且属性(pre)对应的值为真。
//函数返回ture。反之，返回false。
// 记住：你只能通过中括号来访问对象的变量属性(pre)。
// 练习来源：https://freecodecamp.cn/challenges/everything-be-true
// 如果第一个参数不是布尔值，则会将其转换为布尔值。如果省略该参数，或者其值为 0、-0、null、false、NaN、undefined、或者空字符串（""），则生成的 Boolean 对象的值为 false
// Boolean(expression)
function every(collection, pre) {
    return collection.every(function(val) {
        // return val.hasOwnProperty(pre) && val[pre]; 
        return val.hasOwnProperty(pre) && Boolean(val[pre]);
    });
    // Is everyone being true?
    // return pre;
  }




// 23、Arguments Optional
// 创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
// 例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。
// 调用这个有一个参数的返回的 function，返回求和的结果：
// var sumTwoAnd = add(2);
// sumTwoAnd(3) 返回 5。
// 如果两个参数都不是有效的数字，则返回 undefined。
// 练习来源：https://freecodecamp.cn/challenges/arguments-optional
function add() {
    // arguments[0];
    // arguments[1];
    if(arguments.length === 2){
        if(typeof(arguments[0]) !== 'number' || typeof(arguments[1]) !== 'number' ) {
            return undefined;
        }
        return arguments[0] +  arguments[1];
    }else {
        if(typeof(arguments[0]) !== 'number' ) {
            return undefined;
        }
        return function(next) {
            if(typeof next === 'number') {
                return arguments[0] + next;
            }
        }
    }
    
    // return false;
  }
// 待修改××××××××××××××××××××××××


  function add() {
    var arg = [].slice.call(arguments);
    // 边界条件
    if (!isNum(arg[0]) || arg.length === 2 && !isNum(arg[1])) return;

    if (arg.length === 2) {
        // 直接返回两数的和
        return arg[0] + arg[1];
    }

    // 返回匿名函数，接收下一个参数
    return function(next) {
        if (isNum(next)) {
            return arg[0] + next;
        }
        // 可以不写 else，因为如果不声明返回值，那么返回的就是 undefined
    };

    function isNum(e) {
        return typeof e === 'number' && isFinite(e);
    }
}
  
  
