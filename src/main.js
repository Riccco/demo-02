console.log("链接成功")
window.dom = {

    // 实现查找和设置元素
    find(tagName){
        // 记得return 总是忘记return一个结果造成报错
        if(arguments.length === 1){
            return document.querySelectorAll(tagName)
        }
        
    },
    style(tagName,style,color){
        return tagName.style.color = color
    },
    each(divList,n){

        let a = []
        for(let i  = 0; i<divList.length;i++){
          a = n.call(null,divList[i])
        }
            return n;
    }
}


const find1 = dom.find("#test>.red")[0]
const style2 = dom.style(test,"style","red")
const divList = dom.find('.red')
const each1 = dom.each(divList, (n)=> console.log(n)) 
console.log(find1,style2,divList)


