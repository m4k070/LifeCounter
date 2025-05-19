module FaCaretUp = {
    [@mel.module "react-icons/fa6"] [@react.component]
    external make: (~id: string=?) => React.element = "FaCaretUp";
};

module App = {
  type player = 
  | Player1
  | Player2;

  [@react.component]
  let make = () => {
    let default_life = 20;

    let (isReverse2P, setIsReverse2P) = React.useState(_ => false);
    let (life1p, setLife1p) = React.useState(_ => default_life);
    let (life2p, setLife2p) = React.useState(_ => default_life);

    let inc = (p) => {
        switch (p) {
        | Player1 => setLife1p(life1p => life1p + 1)
        | Player2 => setLife2p(life2p => life2p + 1)
        };
    };

    let dec = (p) => {
        switch (p) {
        | Player1 => setLife1p(life1p => life1p - 1)
        | Player2 => setLife2p(life2p => life2p - 1)
        };
    };

    let reset = () => {
        setLife1p(_ => default_life);
        setLife2p(_ => default_life);
    };

    let reverse = () => {
        setIsReverse2P(_ => !isReverse2P);
    };

    <div id="app" style={ReactDOM.Style.make(~width="100%", ~height="100%", ())}>
        <div id="player2-area">
            <div id="player2-n" onClick={_ => inc(Player2)}>
                <div><FaCaretUp /></div>
            </div>
            <div id="player2-life">
                <div id="life-2p">{React.string(string_of_int(life2p))}</div>
            </div>
            <div id="player2-s" onClick={_ => dec(Player2)}>
                <div>{React.string("▼")}</div>
            </div>
        </div>
    
        <div id="toolbar">
            <div id="reverse-btn" onClick={_ => reverse()}>
                {React.string("↩")}
            </div>
            <div id="reset-btn" onClick={_ => reset()}>
                {React.string("✖")}
            </div>
        </div>
    
        <div id="player1-area">
            <div id="player1-n" onClick={_ => inc(Player1)}>
                <div>{React.string("▲")}</div>
            </div>
            <div id="player1-life">
                <div id="life-1p">{React.string(string_of_int(life1p))}</div>
            </div>
            <div id="player1-s" onClick={_ => dec(Player1)}>
                <div>{React.string("▼")}</div>
            </div>
        </div>
    </div>;
  }
}

let () =
  switch (ReactDOM.querySelector("#root")) {
  | None =>
    Js.Console.error("Failed to start React: couldn't find the #root element")
  | Some(element) =>
    let root = ReactDOM.Client.createRoot(element);
    ReactDOM.Client.render(root, <App />);
  };