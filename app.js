



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
        $('#projectDiv').css({'display': 'block'})
    })

    $linkWindowButton.on('click', () => {
        $('.linkModal').css('display', 'block')
    })

    $closeButton.on('click', () => {
        $('.linkModal').css('display', 'none')
    })


    let projectIndex = 0
    let numOfProjects = $('.project-list').children().length - 1
    $('.next').on('click', () => {
        $('.project-list').children().eq(projectIndex).css('display', 'none')
        if (projectIndex < numOfProjects) {
            projectIndex++
        } else {
            projectIndex = 0
        }
        $('.project-images').children().eq(projectIndex).css('display', 'block')
    })


    $('.previous').on('click', () => {
        $('.project-images').children().eq(projectIndex).css('display', 'none')
        if (projectIndex > 0) {
            projectIndex--
        } else {
            projectIndex = numOfProjects
        }
        $('.project-images').children().eq(projectIndex).css('display', 'block')
 
    })

})