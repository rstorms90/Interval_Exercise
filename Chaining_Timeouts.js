document.addEventListener(`DOMContentLoaded`, function(e){


    let button = document.getElementById(`transition`)
    let selectA = document.getElementById(`change-A`)
    let selectB = document.getElementById(`change-B`)
    let element = document.getElementById(`changing`)


    button.addEventListener(`click`, function(e) {
    
        element.removeAttribute(`style`)

        if (selectA.value === ``|| selectB.value === ``){
            alert(`You need an option selected!`)
        }


        setTimeout(function(){
            switch (selectA.value){
                case selectA.value = `color`:
                    element.style.color = `purple`
                    break
        
                case selectA.value = `background`:
                    element.style.backgroundColor = `teal`
                    break
        
                case selectA.value = `font-style`:
                    element.style.fontStyle = `italic`
                    break
        
                case selectA.value = `font-weight`:
                    element.style.fontWeight = `bold`
                    break
                }
        
        


        setTimeout(function(){

        switch (selectB.value){
        case selectB.value = `color`:
            
            element.style.color = `teal`
            break
    
        case selectB.value = `background`:
            element.style.backgroundColor = `steelblue`
            break
    
        case selectB.value = `font-style`:
            element.style.fontStyle = `oblique`
            break
    
        case selectB.value = `font-weight`:
            element.style.fontWeight = `lighter`
            break
        }
        }, 2000)

    }, 2000)

    })




})
