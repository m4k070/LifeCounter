module FaCaretUp = {
    [@mel.module "react-icons/fa6"] [@react.component]
    external make: (~id: string=?) => React.element = "FaCaretUp";
};

module FaCaretDown = {
    [@mel.module "react-icons/fa6"] [@react.component]
    external make: (~id: string=?) => React.element = "FaCaretDown";
};

[@react.component]
let make = (~life, ~onChange) => {
    let inc = () => {
        onChange(life + 1);
    };

    let dec = () => {
        onChange(life - 1);
    };

    <div>
        <div id="north" onClick={_ => inc()}>
            <div><FaCaretUp /></div>
        </div>
        <div>
            <div id="life">{React.string(string_of_int(life))}</div>
        </div>
        <div id="south" onClick={_ => dec()}>
            <div><FaCaretDown /></div>
        </div>
    </div>
}