'use client';

import { useEffect, useRef } from 'react';
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';

type Props = {
  onUpload: (e: string) => any; // TODO: Replace with correct type
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    // TODO: Replace with correct type
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    if (ctxProviderRef.current) {
      ctxProviderRef.current.addEventListener(
        'file-upload-success',
        handleUpload
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <lr-config
        ctx-name="uploader"
        pubkey="a9428ff5ff90ae7a64eb" // TODO: Replace with your own public key
      />

      <lr-file-uploader-regular
        ctx-name="uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="uploader"
        ref={ctxProviderRef}
      />
    </div>
  );
};

export default UploadCareButton;
