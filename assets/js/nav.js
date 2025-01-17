function toggleDisplayNavBox() {

    window.scrollTo(0, 0)
    console.log('nav box display toggle triggered', new Date(), event.target);

    if (document.getElementById('navBox').className.split('d-none').length > 1) {
        closeOtherLightboxBeforeOpening()
        showLightboxShadow()
        document.getElementById('navBox').className = document.getElementById('navBox').className.split('d-none').join('')
    } else {
        document.getElementById('navBox').className = document.getElementById('navBox').className + ' d-none'
    }
}

function toggleDisplayAccountBox() {
    console.log('attempting to display account box', window.innerWidth)
    makeMagicHappen();
    if (window.innerWidth > 992) {
        window.scrollTo(0, 0)
        // console.log('toggle displayNavbOX TRIGGERED')
        var accountBox = document.getElementById('accountDropdown');

        if (accountBox.className.split('d-none').length > 1) {
            closeOtherLightboxBeforeOpening()
            showLightboxShadow()
            document.getElementById('accountDropdown').className = accountBox.className.split('d-none').join('')
        } else {
            document.getElementById('accountDropdown').className = accountBox.className + ' d-none'
        }
    } else {
        window.toggleNavBarDisplay()
    }
}

function closeOtherLightboxBeforeOpening() {

    var boxes = [
        document.getElementById('navBox'),
        document.getElementById('accountDropdown'),
        document.getElementById('searchLightbox')
    ]

    for (box of boxes) {
        if (!box.className.includes('d-none')) {
            box.className += 'd-none'
        }
    }

}

function showLightboxShadow() {
    document.getElementById('navAutoCloseCover').className = document.getElementById('navAutoCloseCover').className.split('d-none').join('')
}

function closeAllLightboxes() {
    document.getElementById('navAutoCloseCover').className += " d-none"
    closeOtherLightboxBeforeOpening()
}