import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="mt-10 flex flex-col gap-2 h-screen bg-zinc-300 p-10">
      <Accordion
        title={"Types of Developers"}
        options={["Frontend", "Backend", "FullStack"]}
      />
      <Accordion
        title={"Favorite Languages"}
        options={["JavaScript", "Python", "PHP"]}
      />
      <Accordion title={"How to Code"} />
    </div>
  );
};
export default App;
