import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/search";
import DropDown from "./components/dropdown";
import Translate from "./components/translate";
import Route from "./components/route";
import Header from "./components/header";

const options = [
  {
    label: "The color red",
    value: "Red",
  },
  {
    label: "The color green",
    value: "Green",
  },
  {
    label: "The color blue",
    value: "Blue",
  },
];

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

function App(props) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown
          label="Selected a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
