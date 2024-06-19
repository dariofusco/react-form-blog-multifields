import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Form() {

    const [posts, setPosts] = useState([]);
    //const [title, setTitle] = useState('');

    const defaultPostData = {
        title: "",
        image: "",
        content: ""
    }

    const [postData, setPostData] = useState(defaultPostData);

    const handleSubmit = (event) => {
        event.preventDefault();

        setPosts(array => ([...array, postData]));
        //setTitle('');
        setPostData(defaultPostData);
    }

    const changePostData = (key, newValue) => {
        setPostData(data => ({ ...data, [key]: newValue }));
    }

    const removePost = (indexToDelete) => {
        setPosts(array => array.filter((post, index) => index !== indexToDelete));
    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <h1>Aggiungi un Post:</h1>

                <div className="form-element">
                    <label>Titolo:</label>
                    <input
                        type="text"
                        value={postData.title}
                        onChange={event => changePostData('title', event.target.value)}
                    />
                </div>

                <div className="form-element">
                    <label>Immagine:</label>
                    <input
                        type="text"
                        value={postData.image}
                        onChange={event => changePostData('image', event.target.value)}
                    />
                </div>

                <div className="form-element">
                    <label>Contenuto:</label>
                    <input
                        type="text"
                        value={postData.content}
                        onChange={event => changePostData('content', event.target.value)}
                    />
                </div>

                <button>Aggiungi</button>

            </form>


            <div className="container">

                {posts.map((post, index) => (
                    <div className="card" key={index}>
                        <img src={post.image} alt="" />
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <button onClick={() => removePost(index)}><FaTrashAlt /></button>
                    </div>
                ))}

            </div>

        </>
    )
}

export default Form