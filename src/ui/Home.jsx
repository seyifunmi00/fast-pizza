import CreateUser from "../features/user/CreateUser.jsx";


function Home() {
  return (
    <div className="my-10 sm:my-16 text-center">
      <h1 className="text-3xl font-semibold mb-8">

        The best pizza.
        <br />
        <span className="text-yellow-500">Fast React Pizza Co.</span>
      </h1>
        <CreateUser />
    </div>
  );
}

export default Home;
