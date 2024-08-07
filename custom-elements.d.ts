declare namespace JSX {
  interface IntrinsicElements {
    'lr-config': typeof LR.LrConfig.prototype & LR.LrConfig;
    'lr-file-uploader-regular': typeof LR.FileUploaderRegular.prototype &
      LR.FileUploaderRegular;
    'lr-upload-ctx-provider': typeof LR.UploadCtxProvider.prototype &
      LR.UploadCtxProvider;
    // Add other custom elements here as needed
  }
}
