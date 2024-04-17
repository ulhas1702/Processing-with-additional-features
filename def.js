    const progress = document.getElementById('progress')
    const prev = document.getElementById('prev')
    const next = document.getElementById('next')
    const circles = document.querySelectorAll('.circle')
    //const number = document.getElementById('user')
    //const btn = document.getElementById('button')
    const text = document.getElementById('name')
    const btn1 = document.getElementById('button1')
    const inputElement = document.getElementById('inputElement')
    const drop = document.getElementById('drop')


    let inputname = 0

    function showname(inputname){
        text.innerText = inputname
        return inputname
    }

    //console.log(inputname)

    //btn.addEventListener('click', () => {
        
    //})

    drop.addEventListener('input', (e) => {
        inputname = parseInt(e.target.value)
    })

    inputElement.addEventListener('input', (e) => {
        inputname = parseInt(e.target.value)
    })

    let currentActive = 1

    btn1.addEventListener("click", () => {
        console.log(inputname)
        showname(inputElement.value)
        if(inputname > circles.length){
            inputname = circles.length
        }
        update1()
    })


    next.addEventListener("click", () => {
        currentActive++

        if(currentActive > circles.length){
            currentActive = circles.length
        }

        update()
    })

    prev.addEventListener("click", () => {
        currentActive--
        
        if(currentActive < 1){
            currentActive = 1
        }

        update()
    })

    function update1(){
        circles.forEach((circles, idx) => {
            if(idx < inputname){
            circles.classList.add('active')
            } else {
                circles.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')

        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

        if(inputname === 1){
            prev.disabled = true
        } else if(inputname === circles.length){
            next.disabled = true
        } else{
            prev.disabled = false
            next.disabled = false
        }
    }

    function update(){
        circles.forEach((circle, idx) => {
            if(idx < currentActive){
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')

        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

        if(currentActive === 1){
            prev.disabled = true
        } else if(currentActive === circles.length){
            next.disabled = true
        } else{
            prev.disabled = false
            next.disabled = false
        }
    }