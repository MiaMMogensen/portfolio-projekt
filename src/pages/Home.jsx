import forsideimg from "../assets/img/forside-img.png";

export default function Home() {
  return (
    <main>
      <div className="forside">
        <img className="my-img" src={forsideimg} alt="mit navn" />
      </div>
      <p>Multimediedesigner | Frontend-udvikler</p>
    </main>
  );
}
