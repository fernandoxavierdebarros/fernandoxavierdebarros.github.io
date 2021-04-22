function content(){
    
    var content = document.createElement("div")
    document.body.appendChild(content)

    var contentClass = document.createAttribute("class")
    var contentId = document.createAttribute("id")
    contentClass.value = "content"
    contentId.value = "content"
    content.setAttributeNode(contentClass)
    content.setAttributeNode(contentId)


    content.style.position = "absolute"
    content.style.height = "99%"
    content.style.width = "99%"
    content.style.top = ".5%"
    content.style.left = ".5%"
    content.style.backgroundColor = "#EEEEEE"

    home()
}