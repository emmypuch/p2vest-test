import React from 'react';
import Image from "next/image";
import DownloadAppModalStyles from './DownloadAppModal.module.scss';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadAppModal = ({ isOpen, onClose }: DownloadAppModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={DownloadAppModalStyles.overlay} onClick={onClose}>
      <div className={DownloadAppModalStyles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={DownloadAppModalStyles.modalContent}>
          <h2 className={DownloadAppModalStyles.modalContent__title}>Get the Revve app</h2>
          <p className={DownloadAppModalStyles.modalContent__subtitle}>
            Select your device & scan the QR code to download
          </p>
          
          <div className={DownloadAppModalStyles.modalContent__platforms}>
            <button className={DownloadAppModalStyles.platformButton__android}>
              <Image
                src="/assets/images/android.svg"
                alt="Android"
                width={20}
                height={20}
                className={DownloadAppModalStyles.platformButton__icon}
              />
              <span className={DownloadAppModalStyles.platformButton__label}>Android</span>
            </button>
            
            <button className={DownloadAppModalStyles.platformButton__apple}>
              <Image
                src="/assets/images/apple.svg"
                alt="iPhone"
                width={20}
                height={20}
                className={DownloadAppModalStyles.platformButton__icon}
              />
              <span className={DownloadAppModalStyles.platformButton__label}>iPhone</span>
            </button>
          </div>

          <div className={DownloadAppModalStyles.qrCodeContainer}>
            <Image
              src="/assets/images/qr-code.svg"
              alt="QR Code"
              width={200}
              height={200}
              className={DownloadAppModalStyles.qrCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppModal;