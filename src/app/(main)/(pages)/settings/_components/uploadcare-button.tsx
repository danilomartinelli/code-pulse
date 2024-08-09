"use client";

import { useEffect, useRef, useState } from "react";
import * as UC from "@uploadcare/file-uploader";
import { useRouter } from "next/navigation";

type UploadCareButton = {
  onUpload: (e: string) => any; // TODO: Replace with correct type
};

UC.defineComponents(UC);

const UploadCareButton = ({ onUpload }: UploadCareButton) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof UC.UploadCtxProvider.prototype & UC.UploadCtxProvider
  >(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let uploadContext: typeof UC.UploadCtxProvider.prototype &
      UC.UploadCtxProvider;

    // TODO: Replace with correct type
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    if (ctxProviderRef.current) {
      uploadContext = ctxProviderRef.current;
      uploadContext.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (uploadContext) {
        uploadContext.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);

  if (!isClient) {
    return null; // TODO: Loading spinner or placeholder
  }

  return (
    <div>
      <uc-config ctx-name="uploader" pubkey="f453a6e2fd77512b8a4c" />
      <uc-file-uploader-regular ctx-name="uploader" />
      <uc-upload-ctx-provider ctx-name="uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
