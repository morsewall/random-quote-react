"use strict";

//defining an array for the quotes
const quotes = [
  {
    quoteText:
      '"Many of you appear concerned that we are wasting valuable lesson time, but I assure you we will go back to school the moment you start listening to science and give us a future."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I was fortunate to be born in a time and place where everyone told us to dream big. I could become whatever I wanted to. I could live wherever I wanted to. People like me had everything we needed and more. Things our grandparents could not even dream of. We had everything we could ever wish for and yet now we may have nothing. Now we probably don’t even have a future any more."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"That future was sold so that a small number of people could make unimaginable amounts of money. It was stolen from us every time you said that the sky was the limit, and that you only live once. You lied to us. You gave us false hope. You told us that the future was something to look forward to."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      "\"But perhaps the most dangerous misconception about the climate crisis is that we have to 'lower' our emissions. Because that is far from enough. ... The fact that we are speaking of 'lowering' instead of 'stopping' emissions is perhaps the greatest force behind the continuing business as usual.\"",
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      "\"We should no longer only ask: 'Have we got enough money to go through with this?' but also: 'Have we got enough of the carbon budget to spare to go through with this?' That should and must become the centre of our new currency.\"",
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"This ongoing irresponsible behavior will no doubt be remembered in history as one of the greatest failures of humankind."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"You don’t listen to the science because you are only interested in solutions that will enable you to carry on like before. Like now. And those answers don’t exist any more. Because you did not act in time."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Sometimes we just simply have to find a way. The moment we decide to fulfill something, we can do anything. And I’m sure that the moment we start behaving as if we were in an emergency, we can avoid climate and ecological catastrophe. Humans are very adaptable: we can still fix this. But the opportunity to do so will not last for long. We must start today. We have no more excuses."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"We children are doing this to wake the adults up. We children are doing this for you to put your differences aside and start acting as you would in a crisis. We children are doing this because we want our hopes and dreams back."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Until you start focusing on what needs to be done rather than what is politically possible, there is no hope. We can’t solve a crisis without treating it as a crisis. We need to keep the fossil fuels in the ground, and we need to focus on equity. And if solutions within the system are so impossible to find, maybe we should change the system itself."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      'Our house is falling apart and our leaders need to start acting accordingly because at the moment they are not. If our house was falling apart our leaders wouldn’t go on like we do today. If our house was falling apart, you wouldn’t hold three emergency Brexit summits and no emergency summit regarding the breakdown of the climate and the environment."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"If you still say that we are wasting valuable lesson time, then let me remind you that our political leaders have wasted decades through denial and inaction."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Some people, some companies, some decision-makers in particular, have known exactly what priceless values they have been sacrificing to continue making unimaginable amounts of money. And I think many of you here today belong to that group of people."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"It is still not too late to act. It will take a far-reaching vision, it will take courage, it will take fierce, fierce determination to act now, to lay the foundations where we may not know all the details about how to shape the ceiling. In other words, it will take cathedral thinking. I ask you to please wake up and make changes required possible."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Either we choose to go on as a civilisation or we don\'t ... There are no grey areas when it comes to survival."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText: '"I don\'t want you to be hopeful, I want you to panic."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"Our house is on fire. I am here to say, our house is on fire."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I don’t want your hope. I don’t want you to be hopeful. I want you to panic. I want you to feel the fear I feel every day. And then I want you to act."',
    quoteAuthor: "@GretaThunberg"
  },
  {
    quoteText:
      '"I want you to act as you would in a crisis. I want you to act as if our house is on fire. Because it is."',
    quoteAuthor: "@GretaThunberg"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.random = this.random.bind(this);
    this.randomQuoteFunction = this.randomQuoteFunction.bind(this);
    this.chosenRandomQuoteToState = this.chosenRandomQuoteToState.bind(this);
    let quote = this.randomQuoteFunction(quotes);
    console.log(quote);
    this.state = {
      quoteTextChosen: quote.quoteText,
      quoteAuthorChosen: quote.quoteAuthor
    };
    console.log(this.state);
  }
  random(array) {
    return Math.floor(Math.random() * array.length);
  }

  randomQuoteFunction(array) {
    return array[this.random(array)];
  }

  chosenRandomQuoteToState() {
    console.log("tapped");
    let newQuote = this.randomQuoteFunction(quotes);
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
      <div>
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
