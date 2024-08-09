"use client";

import { useEffect, useRef, useState } from "react";
import * as UC from "@uploadcare/file-uploader";
import { useRouter } from "next/navigation";
import Spinner from "@/components/global/spinner";
import { createEventListener } from "@/lib/utils";

// TODO: Replate this with the actual user type from database/prisma
interface User {
  name: string;
  email: string;
}

type UploadCareButtonProps = {
  onUpload: (cdnUrl: string) => Promise<User | null>;
};

type UploadcareSuccessEvent = CustomEvent<{ cdnUrl: string }>;

UC.defineComponents(UC);

const UploadCareButton = ({ onUpload }: UploadCareButtonProps) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof UC.UploadCtxProvider.prototype & UC.UploadCtxProvider
  >(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    let uploadContext: typeof UC.UploadCtxProvider.prototype &
      UC.UploadCtxProvider;

    const handleUpload = async (e: UploadcareSuccessEvent) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
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
  }, [onUpload, router]);

  if (!isClient) {
    return <Spinner size="large" />;
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
