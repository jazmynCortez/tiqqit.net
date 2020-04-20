import React, { Component } from 'react'
import { Redirect, Link } from "react-router-dom"
import {Table, Button} from 'react-bootstrap'

class TicketEdit extends Component {
    constructor(props){
        super(props)
        this.state={
          success: false,
          editable: false
        }
      }

      handleDelete = (id) => {
        fetch(`http://www.tiqqit.net/tickets/${id}`, {
          method: 'DELETE',
           headers: {
             'Content-Type': 'application/json'
             }
           }

         ).then((response) => {
           if(response.ok){
             alert("This ticket has been deleted!")
             this.setState({ success: true })
             return this.props.getTickets()
           }
         })
        }


        handleEdit = (id) => {
            if(this.state.editable == id){
              this.setState({ editable: null })
              let title = this.title.value
              let project_cat = this.project_cat.value
              let prob_cat = this.prob_cat.value
              let priority = this.priority.value
              let desc = this.desc.value
              let status = this.status.value
              let due_date = this.due_date.value
              let ticket = { title: title, project_cat: project_cat, prob_cat: prob_cat, priority: priority, desc: desc, status: status, due_date: due_date}
              this.handleUpdate(ticket, id)
            }else{
           this.setState({
             editable: id
           })}
         }

         handleUpdate = (ticket, id) => {
            fetch(`http://www.tiqqit.net/tickets/${id}`,
            {
              method: 'PUT',
              body: JSON.stringify({ticket: ticket}),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((response) => {
                this.setState({ success: true })
                return this.props.getTickets()
              })
            }


  render () {
    
    return (
      <React.Fragment>
        <Table responsive striped bordered hover variant="light">
          <thead>
            <tr>
            <th >Title</th>
            <th >Project Category</th>
            <th >Type</th>
            <th >Priority</th>
            <th >Description</th>
            <th >Status</th>
            <th >Due Date</th>
            </tr>
          </thead>
          <tbody>
        { this.props.tickets.map((ticket, index) => {
        return(
          <tr key={ index }>
            {(this.state.editable == `${ ticket.id }`)?
              <th>
              <input type='text'
                ref={input => this.title = input}
                defaultValue={ ticket.title }/>
              </th>:
              <th>
                <a href = {`/ticketindex/${ticket.id}`}>{ ticket.title }</a>
              </th>}


            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.project_cat = input}
                defaultValue={ ticket.project_cat }/></td>:
              <td>{ ticket.project_cat }</td>}

            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.prob_cat = input}
                defaultValue={ ticket.prob_cat }/></td>:
              <td>{ ticket.prob_cat }</td>}


            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.priority = input}
                defaultValue={ ticket.priority }/></td>:
              <td>{ ticket.priority }</td>}


            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.desc = input}
                defaultValue={ ticket.desc }/></td>:
              <td>{ ticket.desc }</td>}

            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.status = input}
                defaultValue={ ticket.status }/></td>:
              <td>{ ticket.status }</td>}

            {(this.state.editable == `${ ticket.id }`)?
              <td><input type='text'
                ref={input => this.due_date = input}
                defaultValue={ ticket.due_date }/></td>:
              <td>{ ticket.due_date }</td>}

            <td>
            <div className="buttons" style={{marginLeft: "auto",
              marginRight: "auto", display: "flex", alignItems: "center",
              justifyContent: "space-evenly"}}>
            <Button variant="danger"
              onClick={() => this.handleDelete(`${ ticket.id }`)}
              >
              Delete</Button>
            <Button variant="warning"
              onClick={() => this.handleEdit(`${ ticket.id }`)}
              >
              {(this.state.editable == `${ ticket.id }`)? 'Submit' : 'Edit'}</Button>
            <Button variant="info">
            <Link to={`/ticketimage/${ticket.id}`} style={{color: "white"}}>Upload Image</Link> 
            </Button>
            </div>
            </td>
          </tr>
          )
        })}
          </tbody>
        </Table>
        
        { this.state.success && <Redirect to="/mytickets"/> }
        
      </React.Fragment>
      );
    }
}


export default TicketEdit