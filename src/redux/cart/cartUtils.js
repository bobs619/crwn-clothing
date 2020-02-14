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

export const removeItemFromCart = (items, item) => {

    const ret = [...items];

    const idx = ret.findIndex(x=>x.id===item.id);

    if(idx>-1){
        
        const qty = ret[idx].quantity - item.quantity;
        
        if(qty){
            ret[idx] = {...ret[idx], quantity: qty};

            return ret;
        }
    }



    return ret.filter(x=>x.id!==item.id);


}