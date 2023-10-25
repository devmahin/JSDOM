function getUser(userID1){
    return new Promise((resolve,reject) => {
        console.log("Get user.")
        setTimeout(() =>{
            resolve({
                userID1: userID1,
                userName : "antor"
            })
        }, 1000)
    })
}

function getServices(user){
    return new Promise((resolve,reject) => {
        console.log(`Get service of ${user.userName} from the API`)
        setTimeout(() =>{
            resolve(["Email", "VPN", "CDN", "mahin"])
        },2* 1000)
    })
}

function getServicesCost(service){
    return new Promise((resolve,reject) => {
        console.log(`Calculater sevice cost if ${service}.`)
        // console.log(`yoy have complet this work.`)
        setTimeout(() =>{
            resolve(service.length * 100)
        }, 3* 1000)
    })
}


// GetUser(100)
//     .then(getServices)
//     .then(getServicesCost)
//     .then(console.log)

async function loadData (){
    let user = await getUser(100);
    let service =await  getServices(user)
    let cost =await getServicesCost(service)


}
loadData()