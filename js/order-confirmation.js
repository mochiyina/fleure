document.addEventListener("DOMContentLoaded", () => {
    const pickupEl = document.getElementById("pickupMessage");

    const now = new Date();
    let pickupTime = new Date(now.getTime() + 2*60*60*1000);

    const openHour = 9;
    const closeHour = 21;


    if(pickupTime.getHours() >= closeHour){
        pickupTime = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, openHour, 0, 0);
    }

    const options = { weekday: 'long', year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' };
    const pickupTimeStr = pickupTime.toLocaleString('en-US', options);


    pickupEl.innerHTML = `
        <p>Your flowers will be ready to pickup at <strong>${pickupTimeStr}</strong>.</p>
        <p>Store: <strong>${storeInfo.name}</strong></p>
        <p>Address: <strong>${storeInfo.address}</strong></p>
        <p>Open Hours: <strong>${storeInfo.hours}</strong></p>    
        `;
});
