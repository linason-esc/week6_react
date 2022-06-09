import { useState } from "react";
import Modal from "./Modal.js"

function App() {
  const defaultData = [
    {
      name: "소주",
      content: "소주는 토닉워터랑 섞어먹는 걸 좋아해요.",
      image:
        "https://cdn.pixabay.com/photo/2017/10/22/08/02/bottle-2877005__340.jpg",
    },
    {
      name: "맥주",
      content: "맥주는 가볍고 깔끔한 게 좋아요. 전 블랑을 사랑해요.",
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg",
    },
    {
      name: "샴페인",
      content: "아직 응애라서 샴페인을 먹어본 적이 없어요.",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775__340.jpg",
    },
  ];

  const [data, setData] = useState(defaultData);
  const [OpenModal, setOpenModal] = useState(false);

  function manageAddItem(item) {
    setData([...data, item]);
  };

  function openingModalManager() {
    setOpenModal(true);
  }

  function closingModalManager() {
    setOpenModal(false);
  }

  return (
    <>
    <header>
      <span className = "topbar">💗독버섯의 고량주💗</span>
    </header>
    <main>
    <div className = "sidebar">
    <button type="button" className="adding-btn"
    onClick = {openingModalManager}
    >추가</button>
    {data.map((item) => (
      <li key={item.name}>{item.name}</li>
    ))}
    </div>
    <section className="juryubox">
      {data.map((item) => (
        <div className="box" key={item.name}>
          <img src={item.image} alt={item.name} />
          <span>{item.content}</span>
        </div>
      ))}
    </section>
    </main>
    {OpenModal && (<Modal
      manageAddItem = {manageAddItem}
      openingModalManager = {openingModalManager}
      closingModalManager = {closingModalManager}
      />)}
    </>
  );
}

export default App;
