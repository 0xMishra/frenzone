import React, { useEffect } from "react";
import { useGlobalContext } from "./context";
import "./App.css";
const App = () => {
  const {
    currentAccount,
    connectWallet,
    retrieveFile,
    handleSubmit,
    getAllImages,
    descHandle,
    posts,
    desc,
  } = useGlobalContext();

  useEffect(() => {
    getAllImages();
  }, []);
  console.log(posts);
  return (
    <main>
      {!currentAccount ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <section>
          <p>{currentAccount}</p>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={retrieveFile} />
            <br />
            <br />
            <textarea onChange={(e) => descHandle(e)} value={desc}></textarea>
            <br />
            <br />
            <button type="submit">POST</button>
          </form>
          <div>
            {posts.map((item) => {
              const { user, id, filehash, timestamp, desc } = item;
              return (
                <div key={id}>
                  <p>{user}</p>
                  <p>{timestamp}</p>
                  <h3>{desc}</h3>
                  <img src={`https://ipfs.infura.io/ipfs/${filehash}`} alt="" />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default App;
