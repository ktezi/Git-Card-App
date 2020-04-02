import React from 'react';
import axios from "axios";


const CardList = (props) => (
  <div className="cardlist">
    {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
  </div>
);

class Card extends React.Component {

  render() {
    const profile = this.props;
    let p;
    if (profile.blog) {
      p = <div className="linkdin"><a href={profile.blog} target="_blank"><i className="fa fa-linkedin" ></i></a></div>
    }
    else {
      p = <div></div>
    }
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} ></img>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          <div className="location">{profile.location}</div>
          {p}
          <div className="git-hub"><a href={profile.html_url} target="_blank"><i className="fa fa-github"></i></a></div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = {
    userName: '',
    search_history: []
  };
  handleSubmit = async (event) => {
    var resp;
    event.preventDefault();

    let r = this.props.profiles.map(a => {
      if (a.login === this.state.userName) {
        return 'true';
      }
      else
        return null
    })
    if (r.includes('true')) {
      return;
    }
    try {
      resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
      let x = [...this.state.search_history]
      x.push(this.state.userName);
      this.setState({ search_history: x })
      this.setState({ userName: '' });
    }
    catch (err) {
      console.log(err)
      console.error("Error response:");
      alert('NOT FOUND')
      console.error(err.response.data);    // ***
      console.error(err.response.status);  // ***
      console.error(err.response.headers); // ***
    } finally {
      console.log(resp);
    }

  };
  filterFunction = () => {
    this.state.search_history.forEach(element => {
      return (
        <div>{element}</div>);
    })

  };
  render() {
    console.log('hello')
    const r = this.state.search_history.map(element => {
      return (
        <div></div>);
    })
    console.log(r)

    console.log(this.state.search_history)
    return (
      <form onSubmit={this.handleSubmit} >

        <div className="form_div">
          <input
            className="abc"
            type="text"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            placeholder="GitHub username"
            required
          // onKeyUp ={ (event) => if(event.target.value===null{

          // })}
          />

          <button>Add card</button>
        </div>
      </form>
    );
  }
}


class App extends React.Component {
  state = {
    profiles: []

  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  render() {
    return (
      <div className="main-div">
        <div className="header">{this.props.title}
        </div>
        <Form onSubmit={this.addNewProfile} profiles={this.state.profiles} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
export default App;
