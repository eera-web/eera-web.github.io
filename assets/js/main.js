const body = document.querySelector("body")
const presentation = document.getElementById('presentation')
const firstBand = document.getElementById('first-band')
const secondBand = document.getElementById('second-band')
const thirdBand = document.getElementById('third-band')
const fourthBand = document.getElementById('fourth-band') 
const aditionalInfo = document.getElementById('aditional-information')
const eventTitle = document.querySelector(".event-title")
const eventTitle2 = document.getElementById("event-title-bg")
const eventBackgroundOffsetX = 50
const eventBackgroundOffsetY = 20


body.onscroll = (e) => {
    let x = body.getBoundingClientRect().y

    let presentationEnd = presentation.getBoundingClientRect().bottom
    let firstSectionEnd = firstBand.getBoundingClientRect().bottom
    let secondSectionEnd = secondBand.getBoundingClientRect().bottom
    let thirdSectionEnd = thirdBand.getBoundingClientRect().bottom
    let fourthSectionEnd = fourthBand.getBoundingClientRect().bottom

    if ( presentationEnd <= 0 && firstSectionEnd > 0 )
    {
        console.log('presentacion')
    }
    else if ( firstSectionEnd <= 0 && secondSectionEnd > 0 )
    {
        console.log('presentacion')
    }
    else if ( secondSectionEnd <= 0 && thirdSectionEnd > 0 )
    {

    }
    else if ( thirdSectionEnd <= 0 && fourthSectionEnd > 0 )
    {

    }
    else if ( fourthSectionEnd <= 0 && aditionalInfo > 0 )
    {

    }

    console.log(x, firstSectionEnd)
    // if ( x >= -5000 )
    // {
    //     body.style.backgroundColor = "#ffffff"
    // }
    // else {
    //     body.style.background = "#ffa500"
    // }
}

const setBackgroundEventText = () => {
    let boundingBoxEvent = eventTitle.getBoundingClientRect()
    eventTitle2.style.left = `${boundingBoxEvent.left - eventBackgroundOffsetX}px`
    eventTitle2.style.top = `${boundingBoxEvent.top - eventBackgroundOffsetY}px`
}
window.onresize = () => setBackgroundEventText()
setBackgroundEventText()