import React from "react";

export default class SearchComponent extends React.Component {

    updateSearch(value) {
        const cards = document.getElementsByClassName("card");
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];

            const title = card.getElementsByClassName("title")[0].textContent;
            const description = card.getElementsByClassName("description")[0].textContent;

            if (title.toLowerCase().includes(value.toLowerCase())
                || description.toLowerCase().includes(value.toLowerCase())) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    }

    render() {
        return (
            <div className="flex items-center">
                <div className="flex rounded">
                    <input
                        type="text"
                        className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Search..."
                        onChange={event => this.updateSearch(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}