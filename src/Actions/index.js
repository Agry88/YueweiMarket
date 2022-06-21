export const APIURL = "https://script.google.com/macros/s/AKfycbwFgYL1Scca4JFb-QKtZn5P2KbG52da48V64CtK7tBgjffyUqQZwcqUki_ZI2yIjUJNdA/exec";

export const SetProductStore = () => {
    const newApiurl = APIURL + "?sheetName=commodity&ways=檢視商品"
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                dispatch({
                    type: 'SetProductStore',
                    Data: datas
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const GetsailTitle = () => {
    const newApiurl = APIURL + "?sheetName=sailtitle&ways=檢視商品"
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                dispatch({
                    type: 'SetSailTitleStore',
                    Data: datas
                })
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const SetMemberStore = (sheetName, ways, memberAccount, memberPassword) => {
    const newApiurl = `${APIURL}?sheetName=${sheetName}&ways=${ways}&memberAccount=${memberAccount}&memberPassword=${memberPassword}`;
    return (dispatch) => {
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                if (datas.length == 0) {
                    dispatch({
                        type: 'SetMemberStore',
                        Data: {}
                    })
                } else {
                    dispatch({
                        type: 'SetMemberStore',
                        Data: datas
                    })
                }
            })
            .catch(e => {
                console.log("error occured");
            });
    }
}

export const SetMemberStoreEmpty = () => {
    return (dispatch) => {
        dispatch({
            type: 'SetMemberStore',
            Data: {}

        })
    }
}

export const AddMember = (sheetName, ways, memberAccount, memberAddress, memberPhone, memberPassword) => {
    const newApiurl = `${APIURL}?sheetName=${sheetName}&ways=${ways}&memberAccount=${memberAccount}&memberPassword=${memberPassword}&memberAddress=${memberAddress}&memberPhone=${memberPhone}`;
    fetch(newApiurl, { method: 'POST' })
}

export const AddCar = (ProductID, memberAccount, Amount, CarID) => {
    const newApiurl = `${APIURL}?sheetName=car&ways=新增購物車&ProductID=${ProductID}&memberAccount=${memberAccount}&Amount=${Amount}&CarID=${CarID}`;
    fetch(newApiurl, { method: 'POST' })
}

export const AddSailTitle = (CarID, Radio, memberAccount) => {
    const newApiurl = `${APIURL}?sheetName=sailtitle&ways=新增訂單&CarID=${CarID}&Radio=${Radio}&memberAccount=${memberAccount}`;
    console.log(newApiurl);
    fetch(newApiurl, { method: 'POST' })
}


export const AddShopCar = (datas) => {
    return {
        type: 'AddShopCar',
        Data: datas
    }
}

export const SetShopCar = (datas) => {
    return {
        type: 'SetShopCar',
        Data: datas
    }
}