const btn = document.querySelector('button');

btn.addEventListener('click', ()=>{
    Notification.requestPermission().then(perm =>{
        if(perm === 'granted'){
            new Notification("GOOD")
        }
    })
})