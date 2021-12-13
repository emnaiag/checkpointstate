import react from "react";
import "./App.css";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      fullname: "Ibn Al Haytham",
      profession: "Mathématicien et physicien arabe du XIe siècle",
      bio: "Ce savant, né dans l’actuel Irak à la fin du Xe siècle, a révolutionné, entre autres, la science de la lumière. Il invente la chambre noire et il est le premier à établir que la lumière de la Lune vient du Soleil et à contredire Ptolémée qui affirmait que l’œil émettait de la lumière.",
      imageSrc:
        "https://c8.alamy.com/compfr/mry3ra/erudit-arabe-alhazen-egalement-connu-sous-le-nom-de-ibn-al-haytham-portrait-de-l-ancien-billet-de-10-dinars-l-iraq-mry3ra.jpg",
      toggle: false,
      timer: 0,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
    if (!this.state.toggle) {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    }else { this.setState({timer: 0})}
  }

  render() {
    return (
      <div>
        {this.state.toggle ? (
          <div>
            <h1>{this.state.fullname}</h1>
            <h2>{this.state.profession}</h2>
            <h3>{this.state.bio}</h3>
            <img src={this.state.imageSrc} height={200}/><br />
            {this.state.timer}
          </div>
        ) : null}
        <button onClick={this.toggle}>Toggle</button>
        <br />
      </div>
    );
  }
}

export default App;
