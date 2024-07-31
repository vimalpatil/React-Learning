function handleSubmit() {
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="write something" type="text"></input>
            <button>submit</button>
        </form>
    );
}