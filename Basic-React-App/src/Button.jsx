function handleClick() {
    console.log("Hello world!");
    console.log(event);
}

function handleMouseover() {
    console.log("byeee");

}

function handleDblClick() {
    console.log("you double cliked");

}


export default function Button() {
    return (
        <div><button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseover}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat dicta consectetur tempora ipsam, reiciendis
                perspiciatis mollitia. Soluta autem eum sunt id magnam officiis
                consequatur blanditiis quo asperiores, doloribus error illo.</p>
            <button onDoubleClick={handleDblClick}>double click me!</button>
        </div >
    );
}