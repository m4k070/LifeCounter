module FaCaretUp = {
    [@mel.module "react-icons/fa6"] [@react.component]
    external make: (~id: string=?) => React.element = "FaCaretUp";
};

module App = {
  [@react.component]
  let make = () => {
    let default_life = 20;
    let (life1, setLife1) = React.useState(_ => default_life);
    let (life2, setLife2) = React.useState(_ => default_life);

    let (isReverse2P, setIsReverse2P) = React.useState(_ => false);

    let reset = () => {
        setLife1(_ => default_life);
        setLife2(_ => default_life);
    };

    let reverse = () => {
        setIsReverse2P(_ => !isReverse2P);
    };

    <div id="app" style={ReactDOM.Style.make(~width="100%", ~height="100%", ())}>
        <Counter life={life2} onChange={newLife2 => setLife2(_ => newLife2)} />
    
        <div id="toolbar">
            <div id="reverse-btn" onClick={_ => reverse()}>
                {React.string("↩")}
            </div>
            <div id="reset-btn" onClick={_ => reset()}>
                {React.string("✖")}
            </div>
        </div>
    
        <Counter life={life1} onChange={newLife1 => setLife1(_ => newLife1)} />
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