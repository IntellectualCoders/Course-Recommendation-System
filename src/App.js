import React, { Component } from "react";
import "./App.css";

// images

// app components
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./router";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      activeEvents: "",
    };

    // For window scroll
    // this.myRef = React.createRef();
    // this.handleScrollToRef = this.handleScrollToRef.bind(this);
  }

  // For window scroll
  // handleScrollToRef() {
  //   window.scrollTo({
  //     top: this.myRef.current.offsetTop,
  //     behavior: "smooth"
  //   })
  // }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header
            about="COURSE RECOMMENDATION"

            //handleScrollToRef={ this.handleScrollToRef }
          />
          <div>
            <div className="container">
              <a href="/">
                <h1 style={{ marginTop: "200px", color: "whitesmoke" }}>
                  Fancy Quote
                </h1>
              </a>
            </div>
          </div>

          <div className="header__bg img-fluid" />
        </div>

        <main>
          <Router />
          {/* <h2 style={{textAlign: 'center'}} ref={ this.myRef } >Events</h2>  For window scroll */}
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
