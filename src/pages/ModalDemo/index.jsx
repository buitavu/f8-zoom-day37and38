import { useRef, useState } from "react";
import Modal from "../../components/Modal";
import classNames from "classnames/bind";
import style from "./ModalDemo.module.scss";

const cx = classNames.bind(style);

function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isnoCloseOverlay, setIsnoCloseOverlay] = useState(false);
  const [iscallback, setIsCallback] = useState(false);
  const [iscustomOverlay, setIsCustomOverlay] = useState(false);
  const [ishtmlOpenClassName, setIsHtmlOpenClassName] = useState(false);
  const [isNocloseEsc, setIsNocloseEsc] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  const [isCustomModal, setIsCustomModal] = useState(false);
  const modalRef = useRef(null);
  return (
    <div className={cx("wrraper")}>
      <div className={cx("basic-Modal")}>
        <h2>Modal useImperativeHandle</h2>
        <button
          onClick={() => modalRef.current.open()}
          className={cx("open-modal")}
        >
          Open modal
        </button>
        <button
          onClick={() => modalRef.current.close()}
          className={cx("open-modal")}
        >
          Close modal
        </button>
        <button
          onClick={() => modalRef.current.toggle()}
          className={cx("open-modal")}
        >
          Toggle Modal
        </button>
        <Modal
          ref={modalRef}
          onRequestClose={() => setIsOpen(false)}
          bodyOpenClassName="modal-open"
        >
          <div className={cx("body")}>
            <h2>Modal useImperativeHandle</h2>
            <p>Modal useImperativeHandle</p>
            <button
              onClick={() => modalRef.current.close()}
              className={cx("open-modal")}
            >
              Close modal
            </button>
          </div>
        </Modal>
      </div>

      {/* Modal Basic */}
      <div className={cx("basic-Modal")}>
        <h2>Modal mặc định</h2>
        <button onClick={() => setIsOpen(true)} className={cx("open-modal")}>
          Open Modal
        </button>
        {isOpen && (
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            bodyOpenClassName="modal-open"
          >
            <div className={cx("body")}>
              <h2>Modal mặc định</h2>
              <p>Modal cơ bản</p>
              <button
                onClick={() => setIsOpen(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>
      {/* Modal khi click overlay thì ko đóng */}
      <div className={cx("basic-Modal")}>
        <h2>Modal khi click overlay thì ko đóng</h2>
        <button
          onClick={() => setIsnoCloseOverlay(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {isnoCloseOverlay && (
          <Modal
            isOpen={isnoCloseOverlay}
            onRequestClose={() => setIsnoCloseOverlay(false)}
            bodyOpenClassName="modal-custom-body"
            shouldCloseOnOverlayClick={false}
          >
            <div className={cx("body")}>
              <h2>Modal khi click overlay thì ko đóng</h2>
              <p>khi click vào overlay thì ko cho phép đóng modal</p>
              <button
                onClick={() => setIsnoCloseOverlay(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>

      {/* Modal callback */}
      <div className={cx("basic-Modal")}>
        <h2>Modal callback</h2>
        <button
          onClick={() => setIsCallback(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>

        <Modal
          isOpen={iscallback}
          onRequestClose={() => setIsCallback(false)}
          onAfterOpen={() => console.log("modal đã mở")}
          onAfterClose={() => console.log("modal đã đóng")}
        >
          <div className={cx("body")}>
            <h2>Modal callback</h2>
            <p>khi open và close modal thì hiền consolelog mở và đóng </p>
            <button
              onClick={() => setIsCallback(false)}
              className={cx("close-modal")}
            >
              close Modal
            </button>
          </div>
        </Modal>
      </div>

      {/* Modal overlayclassName */}
      <div className={cx("basic-Modal")}>
        <h2>Modal overlayclassName</h2>
        <button
          onClick={() => setIsCustomOverlay(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {iscustomOverlay && (
          <Modal
            isOpen={iscustomOverlay}
            onRequestClose={() => setIsCustomOverlay(false)}
            bodyOpenClassName="modal-open"
            overlayClassName="custom-overlay"
          >
            <div className={cx("body")}>
              <h2>Modal overlayclassName</h2>
              <p>Modal này thêm className cho overlay với bóng đậm hơn</p>
              <button
                onClick={() => setIsCustomOverlay(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>

      {/* modal htmlOpenClassName */}
      <div className={cx("basic-Modal")}>
        <h2>Modal htmlOpenClassName</h2>
        <button
          onClick={() => setIsHtmlOpenClassName(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {ishtmlOpenClassName && (
          <Modal
            isOpen={ishtmlOpenClassName}
            onRequestClose={() => setIsHtmlOpenClassName(false)}
            htmlOpenClassName="html-modal-open"
          >
            <div className={cx("body")}>
              <h2>Modal htmlOpenClassName</h2>
              <p>Modal này thêm className cho thẻ HTML khi Open </p>
              <button
                onClick={() => setIsHtmlOpenClassName(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>

      {/* modal nhấn nút esc không cho phép đóng  */}
      <div className={cx("basic-Modal")}>
        <h2>Modal nhấn nút esc không cho phép đóng</h2>
        <button
          onClick={() => setIsNocloseEsc(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {isNocloseEsc && (
          <Modal
            isOpen={isNocloseEsc}
            onRequestClose={() => setIsNocloseEsc(false)}
            shouldCloseOnEsc={false}
          >
            <div className={cx("body")}>
              <h2>Modal ko cho phép đóng khi click nút esc</h2>
              <p>Modal ko cho phép đóng khi click nút esc</p>
              <button
                onClick={() => setIsNocloseEsc(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>

      {/* modal có animation khi đóng */}
      <div className={cx("basic-Modal")}>
        <h2>Modal có animation</h2>
        <button
          onClick={() => setIsAnimation(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {isAnimation && (
          <Modal
            isOpen={isAnimation}
            onRequestClose={() => setIsAnimation(false)}
            closeTimeoutMS={300}
            bodyOpenClassName="modal-open"
          >
            <div className={cx("body")}>
              <h2>Modal animation</h2>
              <p>Modal khi click nút đóng X sẽ có animation</p>
              <button
                onClick={() => setIsAnimation(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>

      {/* modal có className content  */}
      <div className={cx("basic-Modal")}>
        <h2>Modal có Ui content khác so vs modal khác </h2>
        <button
          onClick={() => setIsCustomModal(true)}
          className={cx("open-modal")}
        >
          Open Modal
        </button>
        {isCustomModal && (
          <Modal
            isOpen={isCustomModal}
            onRequestClose={() => setIsCustomModal(false)}
            contentClassName="custom-modal"
          >
            <div className={cx("body")}>
              <h2>Modal có Ui content khác so vs modal khác </h2>
              <p>Modal có Ui content khác so vs modal khác </p>
              <button
                onClick={() => setIsCustomModal(false)}
                className={cx("close-modal")}
              >
                close Modal
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ModalDemo;
