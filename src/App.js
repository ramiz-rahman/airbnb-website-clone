import React, { Component } from 'react';
import './App.css';

function Logo(props) {
  return (
    <div className="Logo">
      <svg
        viewBox="0 0 1000 1000"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z" />
      </svg>
      <svg
        viewBox="0 0 18 18"
        role="presentation"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
}

function Banner({ img, text }) {
  return (
    <div className="Banner">
      <Logo />
      <h1>{text}</h1>
    </div>
  );
}

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      checkIn: '',
      checkOut: '',
      guests: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'location') {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted: ${this.state.location}`);
  }

  render() {
    return (
      <div className="SearchForm">
        <form>
          <p>
            <div className="formRow">
              <label for="location">Where</label>
              <input
                type="text"
                placeholder="Anywhere"
                name="location"
                value={this.state.where}
                onChange={e => this.handleChange(e)}
              />
            </div>
          </p>
          <p>
            <div className="formRow">
              <label>Check-in</label>
              <input type="date" />
            </div>

            <div className="formRow">
              <label>Check-out</label>
              <input type="date" />
            </div>
          </p>
          <p>
            <div className="formRow">
              <label>Guests</label>
              <input type="select" placeholder="Guests" />
            </div>
          </p>

          <button onClick={e => this.handleSubmit(e)}>Search</button>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Banner text="Book unique places to stay and things to do" />
      <SearchForm />
    </div>
  );
}

export default App;
