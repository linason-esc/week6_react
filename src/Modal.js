import { useState } from "react";

function Modal ({ manageAddItem, openingModalManager, closingModalManager }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const manageSubmit = (e) => {
    e.preventDefault();
    manageAddItem({ name, content, image});
    closingModalManager();//모달창을 제출하면 새로운 이름, 내용, 이미지가 추가되고 모달이 닫힘.
  };

return (
  <div className="modalBackground" hidden={!openingModalManager}>
    <form className="modal" onSubmit={manageSubmit}>
      <span className="closingModal" onClick={closingModalManager}>
        X
      </span>
      <label htmlFor="name" className="marker">이름</label>
        <input id="name" type="text" className="input" placeholder="막걸리" 
        required value={name} onChange={(e) => setName(e.target.value)}
        />
      <label htmlFor="image" className="marker">이미지</label>
      <input id="image" type="text" className="input" placeholder="이미지 링크" 
        required value={image} onChange={(e) => setImage(e.target.value)}
        />
      <label htmlFor="content" className="marker">내용</label>
      <input id="content" type="text" className="input" placeholder="주로 쌀과 누룩으로 만들어져요." 
        required value={content} onChange={(e) => setContent(e.target.value)}
        />
      <button type="submit" className="submitting-btn">저장</button>
    </form>
  </div>
);
}

export default Modal;