declare namespace JSX {
  interface IntrinsicElements {
    'uc-config': typeof UC.LrConfig.prototype & UC.LrConfig;
    'uc-file-uploader-regular': typeof UC.FileUploaderRegular.prototype &
      UC.FileUploaderRegular;
    'uc-file-uploader-inline': typeof UC.FileUploaderInline.prototype &
      UC.FileUploaderInline;
    'uc-upload-ctx-provider': typeof UC.UploadCtxProvider.prototype &
      UC.UploadCtxProvider;
    // Add other custom elements here as needed
  }
}
