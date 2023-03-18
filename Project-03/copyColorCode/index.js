window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn')
    const colorCode = document.getElementById('output');
    const copyCode = document.getElementById('copy-btn');

    changeBtn.addEventListener('click',function(){
        const bgColor = generateHexCode();
        root.style.backgroundColor = bgColor;
        colorCode.value = bgColor;
        copyCode.innerHTML = 'Copy';
    });

    copyCode.addEventListener('click', function(){
        navigator.clipboard.writeText(colorCode.value);
        copyCode.innerHTML = 'Code Copied';
    });
}

function generateHexCode(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}