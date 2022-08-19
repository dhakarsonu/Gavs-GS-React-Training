import React from 'react';

const Comments = (props) =>{

    return(
        <div key={props.comment.id} className="code-wrapper">
            <header>
                {props.comment.name}
            </header>
            <div>
                {props.comment.body}
            </div>
            <footer>
                <div>{props.comment.email}</div>
            </footer>
        </div>
    )

};

export default Comments;