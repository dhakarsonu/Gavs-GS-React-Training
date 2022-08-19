import React from 'react';
import Comments from  './Comments';
import Loader from './Common/Loader';

const Code = (props) =>{

    const [comments,setComments] = React.useState([]);
    const [initLoading, setInitLoading] = React.useState(false);

    const laodComments = (postId) =>{
        const options = {
            method: 'GET'
        };
        setInitLoading(true);
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, options)
            .then(response => response.json())
            .then(response => {setComments(response);})
            .catch(err => console.error(err));
    }

    const renderComments = () =>{
        if(comments && !comments.length && initLoading)
            return <Loader />
        
        let components = [];

        comments.map((comment)=>{
            components.push(<Comments comment={comment}/>)
        })

        return components;
    }

    return(
        <div key={props.code.id} className="code-wrapper">
            <header>
                {props.code.title}
            </header>
            <div>
                {props.code.body}
            </div>
            <footer>
                <a href="#" onClick={_=>{
                    laodComments(props.code.id);
                }}>Show Comments</a>
                <div>{props.code.userId}</div>
                <div className="comments-wrapper">
                    {
                        renderComments()
                    }
                </div>
            </footer>
        </div>
    )

};

export default Code;