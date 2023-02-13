import React from "react";
import { Container } from "react-bootstrap";
import JobForm from "../../components/forms/jobform";

function GiveJob() {
    return(
        <div className="p-5">
            <h2 className="text-center">!! Post for New Job Opening !!</h2>
            <Container className="p-5">
                <JobForm />
            </Container>
        </div>
    )
}

export default GiveJob;