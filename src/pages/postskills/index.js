import React from "react";
import { Container } from "react-bootstrap";
import Post from "../../components/forms/post";

function PostSkills() {
    return(
        <div className="p-5">
            <h2 className="text-center">!! Post your skills !!</h2>
            <Container className="p-5">
                <Post />
            </Container>
        </div>
    )
}

export default PostSkills;