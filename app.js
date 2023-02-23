



$(() => {
    const $homeDivButton = $('#home')
    const $bioDivButton = $('#bio')
    const $resumeDivButton = $('#resume')
    const $projectDivButton = $('#projects')
    const $linkWindowButton = $('#links')
    const $contentDiv = $('.contentDiv')
    const $closeButton = $('.close')
    
   
    $homeDivButton.on('click', () => {
        $contentDiv.css('display', 'none')
        $('#homeDiv').css('display', 'block')
    })

    $bioDivButton.on('click', () => {
        $contentDiv.css('display', 'none')
        $('#bioDiv').css('display', 'block')
    })

    $resumeDivButton.on('click', () => {
        $contentDiv.css('display', 'none')
        $('#resumeDiv').css('display', 'block')
    })

    $projectDivButton.on('click', () => {
        $contentDiv.css('display', 'none')
        $('#projectDiv').css('display', 'block')
    })

    $linkWindowButton.on('click', () => {
        $('.linkModal').css('display', 'block')
    })

    $closeButton.on('click', () => {
        $('.linkModal').css('display', 'none')
    })

})