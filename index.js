const btns = document.querySelectorAll('.button')
const btnWraps = document.querySelectorAll('.button-wrap')
const btnFills = document.querySelectorAll('.button-fill')
const mouse = document.querySelector('.mouse')

window.addEventListener('mousemove', (e) => {
    mouse.style.top = `${e.clientY}px`
    mouse.style.left = `${e.clientX}px`
})

btnWraps.forEach((item, index) => {
    const btnWrapRect = item.getBoundingClientRect()
    item.addEventListener('mouseover', () => {
        mouse.classList.add('active')
    })
    item.addEventListener('mouseout', (e) => {
        mouse.classList.remove('active')
        btns[index].style.transform = `translate3d(0,0,0)`
        btnFills[index].style.left = `${e.clientX - btnWrapRect.left}px`

        btnFills[index].style.top = `${e.clientY - btnWrapRect.top}px`
    })

    item.addEventListener('mousemove', (e) => {
        let x = (e.clientX - item.offsetLeft) / 5
        let y = (e.clientY - item.offsetTop) / 5
        btns[index].style.transform = `translate3d(${x}px, ${y}px, 0)`
    })

})