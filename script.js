function change(){

    let button = document.getElementById('changeColor');

    let background = document.getElementById('body');

    let colors = [
        'aliceblue',
        'green', 
        'red', 
        'blue', 
        'yellow', 
        'brown', 
        'orange', 
        'burlywood', 
        'white', 
        'black',
        'bisque',
        'purple',
        'pink',
        'crimson',
        'limegreen',
        'skyblue',
        'cyan',
        'darkkhaki'
    ]

    let colorPicker = Math.floor(Math.random()*Math.floor(colors.length));

    background.style.backgroundColor = colors[colorPicker];


}