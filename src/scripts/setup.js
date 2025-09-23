document.addEventListener('DOMContentLoaded',() => {
    const goToBottom = document.querySelector('.go-to-bottom')
    // console.log(goToBottom)
    goToBottom?.addEventListener('click', () => {
        window.scrollTo(0, document.body.scrollHeight);
    })

    const btnNavBarResponsive = document.querySelector('#btnNavBarResponsive')
    const btnCloseNavBar = document.querySelector('#btnCloseNavBar')
    const navBarResponsive = document.querySelector('#navBarResponsive')

    const Dropdowns = document.querySelectorAll('.dropdown')

    const FixedTopbar = document.querySelector('.fixed-topbar')


    

    document.addEventListener('click', (e) => {

        const isClickInsideDropdown = e.target.closest('.submenu-dropdown');
        // console.log("🚀 ~ isClickInsideDropdown:", isClickInsideDropdown)
        const isClickInsideSidebar = e.target.closest('.navbar-content');
        // console.log("🚀 ~ isClickInsideSidebar:", isClickInsideSidebar)
        const isClickOnToggle = e.target.closest('#btnNavBarResponsive');
        // console.log("🚀 ~ isClickOnToggle:", isClickOnToggle)
        // 3. if the click target isn’t inside *any* dropdown…
        if (isClickInsideDropdown) {
            // …handle your “outside” click here
            // console.log('Clicked outside all dropdowns!');
            // e.g. close all dropdowns
            // Dropdowns.forEach(dd => dd.classList.add('hidden'));
            // navBarResponsive.classList.add('hidden')
        }
        console.log(navbarContent.classList.contains('hidden'))
        if (!navbarContent.classList.contains('hidden') && !isClickInsideSidebar && !isClickOnToggle) {
            navBarResponsive.classList.add('hidden')
            document.body.classList.remove('active')
        }
        if(!isClickInsideDropdown && !isClickInsideDropdown){
            Dropdowns.forEach(dd => {
                dd.classList.add('hidden')
            })
        }
    });

    btnNavBarResponsive.addEventListener('click', () => {
        // console.log('clicknab')
        navBarResponsive.classList.toggle('hidden')
        document.body.classList.toggle('active')
    })

    btnCloseNavBar.addEventListener('click', () => {
        // console.log('clicknab')
        navBarResponsive.classList.add('hidden')
        document.body.classList.toggle('active')

    })

    const DropdownsMenus = document.querySelectorAll('.submenu-dropdown')
    const navbarContent = document.querySelector('.navbar-content')
    DropdownsMenus.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            console.log('drop')
            Dropdowns.forEach(dd => {
                dd.classList.add('hidden')
            })
            const DropdownItem = dropdown.querySelector('.dropdown')
            console.log("🚀 ~ DropdownItem:", DropdownItem)
            DropdownItem?.classList.toggle('hidden')
        })
    })

    document.addEventListener('scroll', () => {
        // console.log('scroll')
        if(window.scrollY > 100){
            // console.log('pase el 50')
            FixedTopbar.classList.add('bg-cafe')
        }else{
            FixedTopbar.classList.remove('bg-cafe')
        }
    })
    
})

