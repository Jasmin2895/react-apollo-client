export const debounce = (func, interval) => {
    let timer = 0;

    return function(...args) {
        const context = this;
        if(timer) clearInterval(timer)
        timer = setTimeout(()=>{
            console.log("args", ...args)
            timer = null;
            func.apply(context, args)
        }, interval)
    }
}