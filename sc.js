fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature ")
    .then(res=>res.json())
    .then(data=>{
        
        document.body.style.backgroundImage=`url(${data.urls.full})`
        document.getElementById("author").textContent+=data.user.name;
    })
    .catch(error=>{
        document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRv
        bXx8fHx8fHx8fDE2Nzc5MjkxMzU&ixlib=rb-4.0.3&q=80)`

    })


fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res=>res.json())
    .then(data=>{
        document.getElementById("coin-info").innerHTML=`
            <img src="${data.image.small}" id="coinImg"/>
            <span> ${data.name}</span>
        `
        document.getElementById("coin-price").innerHTML=`
            <p>Current price ₹${data.market_data.current_price.inr}</p>
            <p>High ₹${data.market_data.high_24h.inr}</p>
            <p>Low ₹${data.market_data.low_24h.inr}</p> 
        `
    })
    .catch(err=>console.error(err))

function TimeD(){
    const d=new Date();
    document.getElementById("time").textContent=d.toLocaleTimeString("en-us", {timeStyle:"short"});
}
setInterval(TimeD,1000)
navigator.geolocation.getCurrentPosition(position=>{
    console.log(position);
    let lati=1;
    let long=2;
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res=>{
            if(!res.ok){
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data=>{
            console.log(data)
            let weaIcon=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            console.log(weaIcon)
            document.getElementById("weather").innerHTML=`
                <img src=${weaIcon} />
                <span>${Math.floor(data.main.temp)}F</span>
                <p class="city">${data.name}
            `
        })
        .catch(err=>console.error(err))
})
