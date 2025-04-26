import ReactDOM from 'react-dom';
import Album from '@/assets/images/icon/Album.svg?react';
import Camera from '@/assets/images/icon/Camera.svg?react';
import File from '@/assets/images/icon/File.svg?react';
import { Dispatch, SetStateAction } from 'react';

const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const root = document.getElementById('modal');
  return root ? ReactDOM.createPortal(children, root) : null;
};

export const ErrorModal = ({
  text,
  setShowErrorModal,
}: {
  text: string;
  setShowErrorModal: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ModalPortal>
      <div
        className='flex fixed justify-center items-center align-middle z-[300] flex-col h-screen min-w-[20rem] w-screen max-w-[40rem] px-10 bg-[rgba(11,11,11,0.6)] md:w-[28rem] overflow-auto scrollbar-hide whitespace-break-spaces'
        onClick={() => setShowErrorModal('')}
      >
        <div className='bg-white font-headline-2 w-full px-5 py-8 rounded-2xl text-center'>
          {text}
        </div>
      </div>
    </ModalPortal>
  );
};

const MoreModal = ({
  onClose,
  handleSendImages,
  handleSendFiles,
  setShowErrorModal,
}: {
  onClose: () => void;
  handleSendImages: (image: File[]) => void;
  handleSendFiles: (file: File[]) => void;
  setShowErrorModal: Dispatch<SetStateAction<string>>;
}) => {
  const getImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files ?? []);

    const validFiles = newFiles.filter((file) => file.type.match('image/.*'));
    if (validFiles.length !== newFiles.length) {
      setShowErrorModal('이미지만 전송 가능합니다.');
    } else {
      try {
        if (validFiles.length > 0) {
          handleSendImages(validFiles);
          e.target.value = '';
        }
      } catch (error) {
        setShowErrorModal('파일 전송 중 오류가 발생했습니다.');
        return null;
      }
    }

    onClose();
  };

  const getFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files ?? []);

    try {
      if (newFiles.length > 0) {
        handleSendFiles(newFiles);
        e.target.value = '';
      }
    } catch (error) {
      setShowErrorModal('파일 전송 중 오류가 발생했습니다.');
      return null;
    }

    onClose();
  };

  return (
    <ModalPortal>
      <div
        className='flex fixed justify-center items-center align-middle z-[200] flex-col h-screen min-w-[20rem] w-screen max-w-[40rem] bg-[rgba(11,11,11,0.6)] md:w-[28rem] overflow-auto scrollbar-hide'
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* 사진 전송 */}
        <div className='flex flex-row gap-5 bg-white rounded-2xl px-8 py-5'>
          <input
            type='file'
            accept='image/*'
            id='selectImage'
            className='hidden'
            multiple
            onChange={getImageFile}
          />
          <label htmlFor='selectImage'>
            <Album
              aria-label='사진'
              className='w-15 h-15 bg-blue-100 rounded-full p-2 cursor-pointer'
            />
          </label>
          {/* 카메라 */}
          <Camera
            aria-label='카메라'
            className='w-15 h-15 bg-blue-100 rounded-full p-2 cursor-pointer'
          />
          {/* 파일 전송 */}
          <input
            type='file'
            id='selectFile'
            className='hidden'
            multiple
            onChange={getFiles}
          />
          <label htmlFor='selectFile'>
            <File
              aria-label='파일'
              className='w-15 h-15 bg-blue-100 rounded-full p-2 cursor-pointer'
            />
          </label>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MoreModal;
