import getRandomQuote from "./services/getRandomQuote";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.random = this.random.bind(this);
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.chosenRandomQuoteToState = this.chosenRandomQuoteToState.bind(this);
    let quote = this.getRandomQuote();
    console.log(quote);
    this.state = {
      quoteTextChosen: quote.quoteText,
      quoteAuthorChosen: quote.quoteAuthor
    };
    console.log(this.state);
  }
  // random(array) {
  //   return Math.floor(Math.random() * array.length);
  // }

  // randomQuoteFunction(array) {
  //   return array[this.random(array)];
  // }

  chosenRandomQuoteToState() {
    console.log("tapped");
    let newQuote = this.getRandomQuote();
    // console.log(newQuote);
    this.setState({
      quoteTextChosen: newQuote.quoteText,
      quoteAuthorChosen: newQuote.quoteAuthor
    });
    // console.log(this.state);
  }

  render() {
    let twitterLink;
    let quoteTextElem = this.state.quoteTextChosen;
    let quoteAuthorElem = " - " + this.state.quoteAuthorChosen;
    let contentQuote = quoteTextElem + quoteAuthorElem;
    if (contentQuote.length > 280) {
      let charCountAuthor = quoteAuthorElem.length;
      const extraStylingChar = "..." + '"';
      let extraCharCount = extraStylingChar.length;
      let subString =
        quoteTextElem.substring(0, 280 - extraCharCount - charCountAuthor) +
        extraStylingChar +
        quoteAuthorElem;
      //generate url available for Twitter intent and inject url on HTML
      twitterLink = "https://twitter.com/intent/tweet?text=" + subString;
    } else {
      //generate url available for Twitter intent and inject url on HTML
      twitterLink = "https://twitter.com/intent/tweet?text=" + contentQuote;
    }
    return (
      <React.Fragment>
        <div className="container">
          <div id="quote-box">
            <div className="quotable-square">
              <div className="content">
                <div id="text">
                  {this.state.quoteTextChosen}
                  {console.log(this.state)}
                </div>
                <div id="author" className="author">
                  {this.state.quoteAuthorChosen}
                </div>
              </div>
            </div>
            <div className="actions">
              <button
                id="new-quote"
                className="new-quote"
                onClick={this.chosenRandomQuoteToState}
              >
                {console.log(this.state)}Get New Quote
              </button>
              <button className="tweet-quote">
                <a id="tweet-quote" href={twitterLink} target="_blank">
                  <i className="fab fa-twitter"></i>Tweet Quote
                </a>
              </button>
            </div>
          </div>
        </div>
        <footer>
          <ul className="footer-options">
            <li className="footer-link">
              <a href="#" className="footer-linktext">
                Legal
              </a>
            </li>
            <li className="footer-link">
              <a href="#" className="footer-linktext">
                Contact Us
              </a>
            </li>
          </ul>
          <span>© 2019 Developed by Pat. All Rights Reserved.</span>
        </footer>
      </React.Fragment>
    );
  }
}
