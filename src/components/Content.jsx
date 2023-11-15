import React, { useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import styles from "./Modal.module.css";
import { Icon } from "@iconify/react";
import Modal from "./Modal";
import ModalDetail from "./ModalDetail";

const Content = ({ filteredData, setData, keyword, setKeyword }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState({ data: [], isShow: false });

  return (
    <div className="container">
      <div className="content">
        {showModal ? <Modal setData={setData} setShowModal={setShowModal} /> : null}

        <SearchBar keyword={keyword} setKeyword={setKeyword} />
        <div className={styles.addBtn} onClick={() => setShowModal(true)}>
          <div className={styles.addIcon}>
            <Icon icon="mingcute:add-fill" color="#f2f3f2" width={24} />
          </div>
        </div>

        {filteredData.length > 0 ? (
          <div className="notesContainer">
            {filteredData
              .filter((data) => !data.archived)
              .map((data) => (
                <Card key={data.id} data={data} setData={setData} setShowModalDetail={setShowModalDetail} />
              ))}
          </div>
        ) : (
          <p className="notFound">ups, didn't find note with keyword : "{keyword}"</p>
        )}

        {filteredData.length > 0 ? (
          <>
            <hr />
            <div className="notesArchived">
              <h1 className="titleArchived">Archived</h1>
              <div className="notesContainer" style={{ "margin-top": "30px" }}>
                {filteredData
                  .filter((data) => data.archived)
                  .map((data) => (
                    <>
                      <Card key={data.id} data={data} setData={setData} setShowModalDetail={setShowModalDetail} />
                    </>
                  ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
      {showModalDetail.isShow && <ModalDetail data={showModalDetail.data} setShowModalDetail={setShowModalDetail} />}
    </div>
  );
};

export default Content;
