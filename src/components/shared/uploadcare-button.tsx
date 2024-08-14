"use client";

import { useEffect, useRef, useState } from "react";
import * as UC from "@uploadcare/file-uploader";
import Spinner from "@/components/shared/spinner";
import { createEventListener } from "@/lib/client/utils";

type UploadCareButtonProps = {
  onUpload: (cdnUrl: string) => void;
  pubkey: string;
};

type UploadcareSuccessEvent = CustomEvent<{ cdnUrl: string }>;

UC.defineComponents(UC);

const UploadCareButton = ({ onUpload, pubkey }: UploadCareButtonProps) => {
  const ctxProviderRef = useRef<
    typeof UC.UploadCtxProvider.prototype & UC.UploadCtxProvider
  >(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let uploadContext: typeof UC.UploadCtxProvider.prototype &
      UC.UploadCtxProvider;

    const handleUpload = (e: UploadcareSuccessEvent) => {
      onUpload(e.detail.cdnUrl);
    };

    if (ctxProviderRef.current) {
      uploadContext = ctxProviderRef.current;
      uploadContext.addEventListener(
        "file-upload-success",
        createEventListener<UploadcareSuccessEvent>(handleUpload),
      );
    }

    return () => {
      if (uploadContext) {
        uploadContext.removeEventListener(
          "file-upload-success",
          createEventListener<UploadcareSuccessEvent>(handleUpload),
        );
      }
    };
  }, [onUpload]);

  if (!isClient) {
    return <Spinner size="large" />;
  }

  return (
    <div>
      <uc-config ctx-name="uploader" pubkey={pubkey} />
      <uc-file-uploader-regular ctx-name="uploader" />
      <uc-upload-ctx-provider ctx-name="uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
