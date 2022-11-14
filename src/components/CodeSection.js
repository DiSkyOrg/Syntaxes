import {Component} from "react";
import Code from "./Code";

export class CodeSection extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const name = this.props.name;
        const code = this.props.code;
        if (code === undefined || code === null || code.length === 0)
            return <div></div>;
        else return(
            <div>
                <p className="text-gray-300 py-1.5 text-lg font-lato break-words">{name}</p>
                <Code code={code} language={"applescript"} />
            </div>
        )
    }
}