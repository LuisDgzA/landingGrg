const goToBottom = document.querySelector('.go-to-bottom')
    console.log(goToBottom)
    goToBottom?.addEventListener('click', () => {
        window.scrollTo(0, document.body.scrollHeight);
    })