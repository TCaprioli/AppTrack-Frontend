import React from 'react';
// import ShowCon from '../containers/ShowCon'
import '../stylesheets/show.css';
import { IoMdArrowBack } from 'react-icons/io';
import { connect } from 'react-redux';

import fileURL from '../actions/fileURL';

class ResumeShow extends React.Component {
  state = {
    fileURL: {},
  };

  async componentDidMount() {
    let { id } = this.props.showResume;
    let resp = await fetch(
      `https://apptracklite-api.herokuapp.com/resumes/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    let data = await resp.blob();
    const fileURL = window.URL.createObjectURL(data);
    // console.log(fileURL);
    this.setState({
      fileURL,
    });
  }

  handleOnClick = () => {
    window.history.back();
  };

  render() {
    return (
      <>
        <div className="backbtn">
          <button onClick={this.handleOnClick}>
            <IoMdArrowBack />
          </button>
        </div>

        <div className="mx-auto showcon">
          <h2>{this.props.showResume.name}</h2>
          <iframe
            style={{ height: '500px', width: '400px' }}
            title={this.props.showResume.id}
            src={this.state.fileURL}
          >
            {' '}
          </iframe>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    showResume: state.showResume.resume,
    showURL: state.showResume.url,
  }),
  { fileURL }
)(ResumeShow);
