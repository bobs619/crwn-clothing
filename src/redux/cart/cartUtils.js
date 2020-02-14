export const addItemToCart = (items, item) => {

    var ret = [...items];

    const idx = ret.findIndex(x=>x.id===item.id);

    if(idx>-1)
        ret[idx] = {...item, quantity: ret[idx].quantity + 1};
    else
        return [...ret, {...item,quantity: 1 }]

    //console.log(ret);

    return ret;
}