// Description: Custom React render function

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.props.children

    for (const prop in props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = { 
    type: 'a',
    props: {
        href: 'https://www.github.com',
        target: '_blank',
    },
    children: 'Click me'
}
const mainContainer = document.querySelector('mainArea')

customRender(reactElement, mainContainer)