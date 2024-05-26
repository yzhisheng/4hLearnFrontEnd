import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue';



function toFixedTwo(num) {
    return parseFloat(num.toFixed(2));
}

// //1.Option Store
// // 与 Vue 的选项式 API 类似，我们也可以传入一个带有 state、actions 与 getters 属性的 Option 对象


// // 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// // (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// // 第一个参数是你的应用中 Store 的唯一 ID。
// export const useMoneyStore = defineStore('money', {
//     // 其他配置...
//     state: () => ({ money: 100 }),
//     getters: {
//         rmb: (state) => state.money * 1,
//         dollar: (state) => toFixedTwo(state.money * 0.14),
//         eur: (state) => toFixedTwo(state.money * 0.13),
//     },
//     actions: {
//         win(arg) {
//             this.money += arg;
//         },
//         pay(arg) {
//             this.money -= arg;
//         },
//     },
// })




// 2.Setup Store  推荐写法
// 也存在另一种定义 store 的可用语法。与 Vue 组合式 API 的 setup 函数 相似，
// 我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象。


// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
// 注意，要让 pinia 正确识别 state，你必须在 setup store 中返回 state 的所有属性。这意味着，
// 你不能在 store 中使用私有属性。不完整返回会影响 SSR ，开发工具和其他插件的正常运行。

// Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，
// 并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂


export const useMoneyStore = defineStore('money', () => {
    const money = ref(100);
    const rmb = computed(() => money.value * 1);
    const dollar = computed(() => toFixedTwo(money.value * 0.14));
    const eur = computed(() => toFixedTwo(money.value * 0.13));
    function win(arg) {
        money.value += arg;
    }

    const pay = (arg) => {
        money.value -= arg;
    }

    return { money, rmb, dollar, eur, win, pay }
})

