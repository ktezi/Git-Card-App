import React from 'react';
import axios from "axios";


const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} ></img>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    var resp;
    event.preventDefault();
    try {
      resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
      this.setState({ userName: '' });
    }
    catch (err) {
      console.error("Error response:");
      alert('NOT FOUND')
      console.error(err.response.data);    // ***
      console.error(err.response.status);  // ***
      console.error(err.response.headers); // ***
    } finally {
      console.log(resp);
    }


  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}


class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
