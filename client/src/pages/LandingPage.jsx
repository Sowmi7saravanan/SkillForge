import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
          }}
        >
          Forge Your Coding Confidence
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginTop: "30px",
          }}
        >
          Every student deserves the right next challenge—not a difficulty
          label.
        </p>
      </main>
    </>
  );
}

export default LandingPage;