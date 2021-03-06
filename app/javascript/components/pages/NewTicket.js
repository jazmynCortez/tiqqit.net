import React from "react"
import { Redirect } from "react-router-dom"
import {Form, InputGroup, Button, Card} from 'react-bootstrap'


class NewTicket extends React.Component {
    constructor(props){
        super(props)
        // state will allow new ticket to be dynamically created
        // success allows for submit functionality
        // form sets values to blank 
        this.state = {
            success: false, 
            form: {
                title: '',
                project_cat: '',
                prob_cat: '',
                priority: '',
                desc: '',
                status: '',
                due_date: '',
                comments: '',
            }

        }
    }
    //updates the state of our form 
    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }

    //allows submit functionality
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.form)
        this.setState({ success: true })
      }
    render(){
        return(
        <>
        <br></br>
        <Card
            // Card properties and styling
            className="w-50 p-3 "
            style={{width: "20rem", marginLeft: "auto",
            marginRight: "auto", alignItems: "center",
            justifyContent: "center", boxShadow: "1px 2px 4px rgba(0, 0, 0, .5)", overflow: "hidden"}}
            bg={'dark'}
            text={'light'}
            >
            <Form>
            <Form.Group>
                {/* form component */}
                <Form.Label htmlFor="title" id="title">Title</Form.Label>
                    <InputGroup>
                    <Form.Control
                        placeholder="Title"
                        aria-label="Title"
                        aria-describedby="basic-addon1"
                        type="string"
                        name="title"
                        onChange={ this.handleChange }
                        value={ this.state.form.title }
                    />
                    </InputGroup>
                    
                <Form.Label htmlFor="project_cat" id="project_cat">Category</Form.Label>
                    <InputGroup>
                    <Form.Control
                    placeholder="Category"
                    aria-label="Category"
                    aria-describedby="basic-addon1"
                    type="string"
                    name="project_cat"
                    onChange={ this.handleChange }
                    value={ this.state.form.project_cat }
                    />
                    </InputGroup>
                <Form.Label htmlFor="prob_cat" id="prob_cat">Type</Form.Label>
                    <InputGroup>
                    <Form.Control
                    placeholder="Type"
                    aria-label="Type"
                    aria-describedby="basic-addon1"
                    type="string"
                    name="prob_cat"
                    onChange={ this.handleChange }
                    value={ this.state.form.prob_cat }
                    />
                    </InputGroup>
                <Form.Label htmlFor="priority" id="priority">Priority</Form.Label>
                    <InputGroup>
                    <Form.Control 
                    as="select"
                    placeholder="Priority"
                    aria-label="Priority"
                    aria-describedby="basic-addon1"
                    type="integer"
                    name="priority"
                    onChange={ this.handleChange }
                    value={ this.state.form.priority}
                    >
                        <option> </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </InputGroup>
                <Form.Label htmlFor="desc" id="desc">Description</Form.Label>
                    <InputGroup>
                    <Form.Control
                    placeholder="Description"
                    aria-label="Description"
                    aria-describedby="basic-addon1"
                    type="string"
                    name="desc"
                    onChange={ this.handleChange }
                    value={ this.state.form.desc}
                    />
                    </InputGroup>
                <Form.Label htmlFor="status" id="status">Status</Form.Label>
                    <InputGroup>
                    <Form.Control
                    placeholder="Status"
                    aria-label="Status"
                    aria-describedby="basic-addon1"
                    type="string"
                    name="status"
                    onChange={ this.handleChange }
                    value={ this.state.form.status}
                    />
                    </InputGroup>
                <Form.Label htmlFor="due_date" id="due_date">Due Date</Form.Label>
                    <InputGroup>
                    <Form.Control
                    onChange={ this.handleChange }
                    value={ this.state.form.due_date }
                    type="datetime-local" 
                    id="start" 
                    name="due_date" 
                    min="2020-04-17T00:00" 
                    max="2025-12-31T00:00"
                    >
                    </Form.Control>
                   
                    </InputGroup>
                <Form.Label htmlFor="comments" id="comments">Comments</Form.Label>
                    <InputGroup>
                    <Form.Control
                        placeholder="Comments"
                        aria-label="Comments"
                        aria-describedby="basic-addon1"
                        type="text"
                        name="comments"
                        onChange={ this.handleChange }
                    value={ this.state.form.comments }
                    />
                    </InputGroup>
            </Form.Group>
            {/* Button confirms inputs into form and calls redirect if succesfull */}
            <Button 
              className="new-ticket-button"
              type="submit"
              onClick={ this.handleSubmit }
              >
              Create a New Ticket
            </Button>
              { this.state.success && <Redirect to="/ticketindex"/> }
            </Form>
            </Card>
        </>    
        )
    }
}

export default NewTicket