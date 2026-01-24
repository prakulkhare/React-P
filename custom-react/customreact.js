function customRender(reactElement, container) {


    //METHOD - 1 (Using innerHTML)
//     //creation of DOM element
//     const domElement = document.createElement(reactElement.type)

//    domElement.innerHTML = reactElement.childern
//    domElement.setAttribute('href', reactElement.props.href)
//    domElement.setAttribute('target', reactElement.props.target) 

//     container.appendChild(domElement)



    //METHOD - 2 (Custom Render Method)


    document.createElement(reactElement.type)

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])

    }    
    container.appendChild(domElement)
}


//elemet Creation in react

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },

    //object

    childern: 'Click me to go to Google'
}


const mainContainer = document.querySelector('#root')

//we want a element to render this react element

customRender(reactElement, mainContainer)
