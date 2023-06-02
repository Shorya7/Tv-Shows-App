
import "./Home.css";
import ShowList from "./Shows";
function Home() {
  return (
    <>
    <div className="logo">
      <span className="click">The</span>
      <span className="on">Tee-We</span>
      <span className="n">Showz</span>
    </div>
    <ShowList/>
    <footer>
    <h4>Made with ❤️ by Shorya | 2022 &copy; All Rights Reserved</h4>
  </footer>
  </>
  );
}
export default Home;