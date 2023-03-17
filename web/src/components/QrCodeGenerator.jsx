import React, { useEffect, useRef, useState } from "react";
import {
  QrCodeFactory
} from '../lib/qr-code-styling-default';


export function QRCodeComponent({
  data: {
    url,
    imageUrl
  }
}) {
  const [fileExt] = useState("png");
  const ref = useRef(null);
  const qrCode = QrCodeFactory(imageUrl, url);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);


  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };


  return (
    <div>
      <div ref={ref} />

      <div className="flex justify-center items-center mt-4">
        <button className="border-2 border-green text-green p-1 gap-2 hover:bg-green hover:text-white focus:bg-green focus:text-white" onClick={onDownloadClick}>Download</button>
      </div>

    </div>
  );
}