import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import style from "./Modal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const Modal = forwardRef(
  (
    {
      children,
      isOpen,
      onAfterOpen,
      onAfterClose,
      overlayClassName,
      closeTimeoutMS = 0,
      onRequestClose,
      htmlOpenClassName,
      bodyOpenClassName,
      contentClassName,
      shouldCloseOnEsc = true,
      shouldCloseOnOverlayClick = true,
    },
    ref,
  ) => {
    const [isCloseing, setIsCloseing] = useState(false);
    const [isImperativeOpen, setIsImperativeOpen] = useState(false);
    const isControlled = isOpen !== undefined;

    const modalIsOpen = isControlled ? isOpen : isImperativeOpen;
    const wasOpen = useRef(false);

    useImperativeHandle(ref, () => {
      return {
        open() {
          setIsImperativeOpen(true);
        },
        close() {
          setIsImperativeOpen(false);
        },
        toggle() {
          setIsImperativeOpen((prev) => !prev);
        },
      };
    }, [isImperativeOpen]);

    useEffect(() => {
      const handler = (e) => {
        if (e.code === "Escape" && shouldCloseOnEsc) {
          handlerRequestClose();
        }
      };
      if (modalIsOpen) {
        document.addEventListener("keyup", handler);
        return () => {
          document.removeEventListener("keyup", handler);
        };
      }
    }, [onRequestClose, modalIsOpen, closeTimeoutMS, shouldCloseOnEsc]);

    useEffect(() => {
      if (!modalIsOpen) return;

      if (htmlOpenClassName) {
        document.documentElement.classList.add(htmlOpenClassName);
      }

      if (bodyOpenClassName) {
        document.body.classList.add(bodyOpenClassName);
      }

      return () => {
        if (htmlOpenClassName) {
          document.documentElement.classList.remove(htmlOpenClassName);
        }

        if (bodyOpenClassName) {
          document.body.classList.remove(bodyOpenClassName);
        }
      };
    }, [modalIsOpen, htmlOpenClassName, bodyOpenClassName]);

    useEffect(() => {
      if (modalIsOpen) {
        wasOpen.current = true;
        onAfterOpen?.();
      } else if (wasOpen.current) {
        wasOpen.current = false;
        onAfterClose?.();
      }
    }, [modalIsOpen]);

    // const handlerRequestClose = () => {
    //   setIsCloseing(true);

    //   setTimeout(() => {
    //     onRequestClose?.();
    //     setIsCloseing(false);
    //   }, closeTimeoutMS);
    // };
    const handlerRequestClose = () => {
      setIsCloseing(true);

      setTimeout(() => {
        if (!isControlled) {
          setIsImperativeOpen(false);
        }

        onRequestClose?.();
        setIsCloseing(false);
      }, closeTimeoutMS);
    };

    const handlerOverlayClick = () => {
      if (shouldCloseOnOverlayClick) {
        handlerRequestClose();
      }
    };

    if (!modalIsOpen) return null;

    return (
      <div className={cx("modal", { closing: isCloseing })}>
        {/* Lớp phủ */}

        <div
          className={cx("overlay", overlayClassName)}
          onClick={handlerOverlayClick}
        />

        {/* Nội dung Modal */}
        <div className={cx("content", contentClassName)}>
          <button className={cx("close-btn")} onClick={handlerRequestClose}>
            &times;
          </button>
          <div className={cx("inner")}>{children}</div>
        </div>
      </div>
    );
  },
);

export default Modal;
