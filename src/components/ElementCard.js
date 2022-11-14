import {Component} from "react";
import {CodeSection} from "./CodeSection";

export class ElementCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            type: this.props.type,
            since: props.since,
            description: props.description,
            patterns: props.patterns,
            examples: props.examples,
            eventValues: props.eventValues
        };
    }

    render() {
        return(
            <div className={"mx-auto bg-gray-700 rounded shadow-md border-l-8 mb-8 w-full card " + this.state.type.border}>
                <div className="p-3">
                    <div className="flex flex-row">
                        <h1 className="w-full text-gray-300 font-bold font-lato text-2xl title">
                            {this.state.name}
                            <span className={"inline-flex items-center justify-center px-2 py-1 ml-2 text-xl font-bold leading-none "+ this.state.type.text + " " + this.state.type.bg +" rounded-full"}> Since v{this.state.since}</span>
                        </h1>
                        <div className="w-full flex justify-end">
                            <p className="text-gray-300 text-2xl text-right mr-2">{this.state.type.name}</p>
                        </div>
                    </div>
                    <p className="text-gray-300 text-2xl py-1.5 text-base font-lato break-words description">
                        {this.state.description === undefined ? "No description provided" : this.state.description.join(' ')}
                    </p>

                    <CodeSection name={"Patterns"} code={this.state.patterns} />
                    <CodeSection name={"Examples"} code={this.state.examples} />
                    <CodeSection name={"Event Values"} code={this.state.eventValues} />
                </div>
            </div>
        );
    }

}