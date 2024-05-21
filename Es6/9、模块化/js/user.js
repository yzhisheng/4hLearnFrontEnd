const user = {
    name: '猪猪侠',
    age: 18
}

const isAdult = (age) => {
    if (age > 18) {
        console.log('age > 18 ')
    } else {
        console.log('age <= 18 ')
    }
}


//导出
export { user, isAdult }