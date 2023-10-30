import React from 'react';
import ReactDOM from 'react-dom';

const parent = React.createElement("div", 
                                    {id: "parent"}, 
                                    React.createElement("div", 
                                        {id:"child"}, 
                                        [React.createElement("h1", {id:"heading1"}, "This is h1 Tag"),
                                        React.createElement("h1", {id:"heading2"}, "This is h1 Tag")]));

const heading = React.createElement("h1", {id: "heading1"}, "Hello World from React!!!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);