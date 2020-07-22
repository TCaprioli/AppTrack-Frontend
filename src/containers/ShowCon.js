import React from 'react';
import { connect } from 'react-redux';
import updateApplication from '../actions/updateApplication';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/show.css';

class ShowCon extends React.Component {
  state = {
    //clicked toggles display and form
    clicked: false,
    //following 4 are form inputs
    title: this.props.showData.title,
    company: this.props.showData.company,
    description: this.props.showData.description,
    applied: this.props.showData.applied,
  };

  async componentDidMount() {
    try {
      let id = this.props.showData.id;
      let token = localStorage.token;
      let resp = await fetch(
        `https://apptracklite-api.herokuapp.com/applications/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await resp.json();
      this.setState({
        resappArray: data.application.resapps,
      });
    } catch (error) {
      console.warn(error);
    }
  }

  handleOnClick = (event) => {
    let { clicked } = this.state;
    !clicked
      ? this.setState({
          clicked: true,
        })
      : this.setState({
          clicked: false,
        });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  updateObj = () => ({
    title: this.state.title,
    company: this.state.company,
    description: this.state.description,
    applied: this.state.applied,
    id: this.props.showData.id,
  });

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.updateApplication(this.updateObj());
    this.setState({
      clicked: false,
    });
  };
  render() {
    //const time and appliedAt takes attribute 'created_at' from api and converts it to a more human friendly format
    const time = new Date(this.props.showData.created_at);
    const month = () =>
      time.getMonth() + 1 <= 9
        ? `0${time.getMonth() + 1}`
        : time.getMonth() + 1;
    const day = () =>
      time.getDate() <= 9 ? `0${time.getDate()}` : time.getDate();
    const appliedAt = `${time.getFullYear()}-${month()}-${day()}`;

    //deconstructions
    let { title, company, description, applied } = this.props.showData;
    let { clicked } = this.state;

    return (
      <div>
        {clicked === false ? (
          <span>
            <h1>{title}</h1>
            <h3 style={{ color: '#6c757d' }}>{company}</h3>
            <hr />
            <p>{description}</p>
            <hr />
            <h6>Applied: {applied === null ? appliedAt : applied}</h6>
            <hr />
            <Button onClick={this.handleOnClick}>Edit</Button>
          </span>
        ) : (
          <Form onSubmit={this.handleOnSubmit}>
            Title:{' '}
            <Form.Control
              value={this.state.title}
              name="title"
              onChange={this.handleOnChange}
            />
            Company:{' '}
            <Form.Control
              value={this.state.company}
              name="company"
              onChange={this.handleOnChange}
            />
            <hr />
            Description:{' '}
            <Form.Control
              as="textarea"
              rows="3"
              value={this.state.description}
              name="description"
              onChange={this.handleOnChange}
            />
            <hr />
            Applied:{' '}
            <Form.Control
              type="date"
              placeholder={appliedAt}
              name="applied"
              onChange={this.handleOnChange}
            />
            <hr />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    showData: state.showCard.data,
    currentUser: state.loggedIn.currentUser.user,
  }),
  { updateApplication }
)(ShowCon);
