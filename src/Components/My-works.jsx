import ProjectArray from "./ProjectArray";
import Cards from "./Specials";


const Myworks = () => {
  const Cadd = ProjectArray.map((item) => (
    <Cards
      key={item.id}
      id={item.id} // Pass the id as a prop
      img={item.img}
      menu={item.menu}
      link={item.link}
      linked={item.linked}
      title={item.title}
      description={item.description}
      stack={item.stack}
      gitHubRepo={item.gitHubRepo}
    />
  ));

  return (
    <div id="projects">
      <main className=" px-8 lg:px-32 py-10 ">
        <h2
          className={`${"text-fuchsia-900"}  poetsen-one-regular font-extrabold my-8 text-md md:text-xl lg:text-5xl`}
        >
          Projects
        </h2>
        <div className="mt-4 grid justify-around grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 ">
          {Cadd}
        </div>
      </main>
    </div>
  );
};

export default Myworks;
