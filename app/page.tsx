import { connectDB } from "@/lib/db";

connectDB();
const Home = () => {
  return <div className="m-2">Home</div>;
};

export default Home;
