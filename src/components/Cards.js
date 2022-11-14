import {Component} from "react";
import json from "../docs.json";
import {ElementCard} from "./ElementCard";
import {Types} from "../util/Enums";

export default class Cards extends Component {

    render() {
        return(<div>
            {['sections', 'events', 'expressions', 'effects', 'types', 'conditions'].map((type, index) => {
                return (
                    <div>
                        {json[type].map((element, index) => {
                            return (
                                <ElementCard key={index}
                                             name={type === 'types' ?
                                                 element.codeName.charAt(0).toUpperCase() + element.codeName.slice(1) :
                                                 (element.name === undefined ? element.id : element.name)}
                                             type={Types[type]}
                                             since={element.since === undefined ? "4.0" : element.since}
                                             description={element.description}
                                             patterns={element.patterns}
                                             examples={element.examples}
                                             eventValues={element.eventValues}/>
                            );
                        })}
                    </div>
                );
            })}
        </div>)
    }

}