const heading = [React.createElement("div", { id: "head" },
    React.createElement('div', { id: parent, style: { color: "green", padding: "2px" } },
        React.createElement('h1', { id: 'sibi1' }, "Hiii Im' Sibling1"),
        React.createElement('h1', { id: 'sibi2' }, "Hii im Sibi2"))),

React.createElement('div', { id: 'parent2' },
    React.createElement('h1', { id: 'sibi1' }, "Hiii Im' Sibling2"),
    React.createElement('h1', { id: 'sibi2' }, "Hii im Sibi2"))
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);